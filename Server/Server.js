const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Users = require("./Models/users");
const Businesstype = require("./Models/business_type");
const SetupPackage = require("./Models/setup_package");
const ManageCategory = require("./Models/manage_category");
const setupteamsize = require("./Models/setup_teamsize");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const uploads = multer({ dest: "uploads\\" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads\\");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg"); //Appending .jpg
  },
});

const upload = multer({ storage: storage });

const app = express();
const businessroute = require("./Routes/businesstyperoute");
const packageroute = require("./Routes/setuppackage");
const categoryroute = require("./Routes/managecategoryroute");
const teamroute = require("./Routes/teamsizeroute");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/saloondb");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/images", upload.single("image"), (req, res) => {
  const imagePath = req.file.path;
  const description = req.body.description;

  // Save this data to a database probably

  console.log(description, imagePath);
  res.send({ description, imagePath });
});

app.post("/api/businesstype", upload.single("image"), (req, res) => {
  const image = req.file.path;
  const name = req.body.name;

  console.log(name, image);

  try {
    Businesstype.create({
      name: req.body.name,
      image: req.file.path,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate name" });
  }
});
app.post("/api/setuppackage", async (req, res) => {
  console.log(req.body);
  try {
    await SetupPackage.create({
      name: req.body.name,
      benefits: req.body.benefits,
      type: req.body.type,
      bookings: req.body.bookings,
      price: req.body.price,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate name" });
  }
});
app.post("/api/managecategory", async (req, res) => {
  console.log(req.body);
  try {
    await ManageCategory.create({
      name: req.body.name,
      type: req.body.type,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate name" });
  }
});
app.post("/api/teamsize", async (req, res) => {
  console.log(req.body);
  try {
    await setupteamsize.create({
      size: req.body.size,
      image: req.body.image,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Team Size" });
  }
});
// app.post("/api/businesstype", async (req, res) => {
//   console.log(req.body);
//   try {
//     await Businesstype.create({
//       name: req.body.name,

//       image: req.body.image,
//     });
//     res.json({ status: "ok" });
//   } catch (err) {
//     res.json({ status: "error", error: "Duplicate name" });
//   }
// });

app.use(businessroute);
app.use(packageroute);
app.use(categoryroute);
app.use(teamroute);
app.listen(1337, () => {
  console.log("Server started on 1337");
});

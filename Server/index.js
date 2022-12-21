const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const multer = require("multer");
const businessroute = require("./Routes/businesstyperoute");
const packageroute = require("./Routes/setuppackage");
const categoryroute = require("./Routes/managecategoryroute");
const teamroute = require("./Routes/teamsizeroute");
const path = require("path");
const paymentroute = require("./Routes/paymentmethodroute");
const bookingsroute = require("./Routes/bookings");
const customers = require("./Routes/customers");
const clinics = require("./Routes/clinics");
const saloons = require("./Routes/saloons");
const booking = require("./Routes//transactionsbooking");
const membership = require("./Routes/transactionsmembership");
const wallets = require("./Routes/transactionsdeposit");
const withdraw = require("./Routes/transactionswithdraw");
const transfers = require("./Routes/transfers");
const profile = require("./Routes/profile");
const app = express();
const PORT = 1337;
app.use(cors());
app.use(express.json());
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../Client/src/images/");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});
app.post("/api/businesstype", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.body.name);
    var name = req.body.name;
    console.log(req.file.path);
    var imgsrc = "http://127.0.0.1:3000/" + req.file.path;
    console.log(imgsrc);
    var insertData = "INSERT INTO business_types(name,image)VALUES(?,?)";

    db.query(insertData, [name, imgsrc], (err, result) => {
      if (err) throw err;
      console.log("file uploaded");
    });
  }
});
app.post("/api/managecategory", (req, res) => {
  console.log(req.body.type);
  console.log(req.body.name);
  var type = req.body.type;
  var name = req.body.name;
  var insertData = "INSERT INTO categories(business_type_id,name )VALUES(?,?)";

  db.query(insertData, [type, name], (err, result) => {
    if (err) throw err;
    console.log("data inserted");
  });
});
app.post("/api/setuppackage", (req, res) => {
  console.log(req.body.type);
  console.log(req.body.name);
  var name = req.body.name;
  var benefits = req.body.benefits;
  var type = req.body.type;
  var bookings = req.body.bookings;
  var price = req.body.price;

  var insertData =
    "INSERT INTO packages(package_type , title ,summery , price,no_of_booking )VALUES(?,?,?,?,?)";

  db.query(
    insertData,
    [type, name, benefits, price, bookings],
    (err, result) => {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});
app.post("/api/reward", (req, res) => {
  console.log(req.body.earning);
  console.log(req.body.spending);
  var earning = req.body.earning;
  var spending = req.body.spending;

  var insertData =
    "INSERT INTO setup_reward_points(earning , spending)VALUES(?,?)";

  db.query(insertData, [earning, spending], (err, result) => {
    if (err) throw err;
    console.log("data inserted");
  });
});
app.use(businessroute);
app.use(packageroute);
app.use(categoryroute);
app.use(teamroute);
app.use(paymentroute);
app.use(bookingsroute);
app.use(customers);
app.use(clinics);
app.use(saloons);
app.use(booking);
app.use(membership);
app.use(wallets);
app.use(withdraw);
app.use(transfers);
app.use(profile);
app.listen(PORT, () => {
  console.log("Server started on 1337");
});

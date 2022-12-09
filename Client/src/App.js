import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Register from "./Components/Signup";
import Dashboard from "./Components/Home.js";
import Edit from "./Components/Edit";
import BusinessType from "./Components/BusinessType";
import Profile from "./Components/Profile";
import Upload from "./Components/upload";
import ManageCategory from "./Components/ManageCategory";
import SetupPackage from "./Components/SetupPackage";
import SetTeamSize from "./Components/SetupTeamSize";
import Test from "./Components/Test";
import SetupPaymenet from "./Components/SetupPayment";
import RewardPoint from "./Components/SetupRewardPoint";
import BookingManagement from "./Components/BookingManagement";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"   element={<Welcome />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/businesstype" element={<BusinessType />} />
          <Route path="/test" element={<Test />} />
          <Route path="/managecategory" element={<ManageCategory />} />
          <Route path="/setuppackage" element={<SetupPackage />} />
          <Route path="/teamsize" element={<SetTeamSize />} />
          <Route path="/setuppayment" element={<SetupPaymenet />} />
          <Route path="/bookingmanagement" element={<BookingManagement />} />
          <Route path="/reward" element={<RewardPoint />} />
          <Route path="/add/edit/:id" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

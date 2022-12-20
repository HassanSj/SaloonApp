import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Signup";
import Dashboard from "./Components/Home.js";

import BusinessType from "./Components/BusinessType";
import Profile from "./Components/Profile";

import ManageCategory from "./Components/ManageCategory";
import SetupPackage from "./Components/SetupPackage";
import SetTeamSize from "./Components/SetupTeamSize";
import Transactions from "./Components/Transactions";
import SetupPaymenet from "./Components/SetupPayment";
import RewardPoint from "./Components/SetupRewardPoint";
import BookingManagement from "./Components/BookingManagement";
import Customers from "./Components/ManageCustomers";
import Clinics from "./Components/ClinicsManagement";
import SaloonsManagement from "./Components/SaloonsManagement";
import Transfers from "./Components/Transfers";
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
          <Route path="/managecategory" element={<ManageCategory />} />
          <Route path="/setuppackage" element={<SetupPackage />} />
          <Route path="/teamsize" element={<SetTeamSize />} />
          <Route path="/setuppayment" element={<SetupPaymenet />} />
          <Route path="/bookingmanagement" element={<BookingManagement />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/saloons" element={<SaloonsManagement />} />
          <Route path="/reward" element={<RewardPoint />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

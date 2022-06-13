import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./view/HomePage";
import ChangePassword from "./view/Auth/ChangePassword";
import Login from "./view/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Device from "./pages/Device/Device";
import Report from "./pages/Report/Report";
import Service from "./pages/Service/Service";
import ProvideNumber from "./pages/ProvideNumber/ProvideNumber";
import ManageRole from "./pages/ManageRole/ManageRole";
import ManageAccount from "./pages/ManameAccount/ManageAccount";
import DinaryUser from "./pages/DinaryUser/DinaryUser";
import UserInformataion from "./pages/UserInformation/UserInformataion";
import DeviceOutlet from "./pages/Device";
import CreateDevice from "./pages/CreateDevice/CreateDevice";
import DetailsDevice from "./pages/DetailsDevice/DetailsDevice";
import UpdateDevice from "./pages/UpdateDevice/UpdateDevice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/device" element={<DeviceOutlet />}>
              <Route path="/device" element={<Device />} />
              <Route path="/device/create" element={<CreateDevice />} />
              <Route path="/device/details" element={<DetailsDevice />} />
              <Route path="/device/update" element={<UpdateDevice />} />
            </Route>
            <Route path="/report" element={<Report />} />
            <Route path="/service" element={<Service />} />
            <Route path="/provide-number" element={<ProvideNumber />} />
            <Route path="/manage-role" element={<ManageRole />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            <Route path="/dinary-user" element={<DinaryUser />} />
            <Route path="/me" element={<UserInformataion />} />
          </Route>
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

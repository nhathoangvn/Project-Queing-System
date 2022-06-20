import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateDevice from "./pages/CreateDevice/CreateDevice";
import CreateManageAccount from "./pages/CreateManageAccount/CreateManageAccount";
import CreateProvideNumber from "./pages/CreateProvideNumber/CreateProvideNumber";
import CreateRole from "./pages/CreateRole/CreateRole";
import CreateService from "./pages/CreateService/CreateService";
import Dashboard from "./pages/Dashboard/Dashboard";
import DetailsDevice from "./pages/DetailsDevice/DetailsDevice";
import DetailsProvideNumber from "./pages/DetailsProvideNumber/DetailsProvideNumber";
import DetailsService from "./pages/DetailsService/DetailsService";
import DeviceOutlet from "./pages/Device";
import Device from "./pages/Device/Device";
import DinaryUser from "./pages/DinaryUser/DinaryUser";
import ManageAccount from "./pages/ManageAccount/ManageAccount";
import ManageRole from "./pages/ManageRole/ManageRole";
import ProviderNumberOutlet from "./pages/ProvideNumber";
import ProvideNumber from "./pages/ProvideNumber/ProvideNumber";
import Report from "./pages/Report/Report";
import SeriviceOutlet from "./pages/Service";
import Service from "./pages/Service/Service";
import UpdateDevice from "./pages/UpdateDevice/UpdateDevice";
import UpdateManageAccount from "./pages/UpdateManageAccount/UpdateManageAccount";
import UpdateManageRole from "./pages/UpdateManageRole/UpdateManageRole";
import UpdateService from "./pages/UpdateService/UpdateService";
import UserInformataion from "./pages/UserInformation/UserInformataion";
import ChangePassword from "./view/Auth/ChangePassword";
import Login from "./view/Auth/Login";
import HomePage from "./view/HomePage";

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
              <Route
                path="/device/details/:deviceID"
                element={<DetailsDevice />}
              />
              <Route
                path="/device/update/:deviceID"
                element={<UpdateDevice />}
              />
            </Route>
            <Route path="/report" element={<Report />} />
            <Route path="/service" element={<SeriviceOutlet />}>
              <Route path="/service" element={<Service />} />
              <Route path="/service/create" element={<CreateService />} />
              <Route path="/service/details" element={<DetailsService />} />
              <Route path="/service/update" element={<UpdateService />} />
            </Route>
            <Route path="/provide-number" element={<ProviderNumberOutlet />}>
              <Route path="/provide-number" element={<ProvideNumber />} />
              <Route
                path="/provide-number/create"
                element={<CreateProvideNumber />}
              />
              <Route
                path="/provide-number/details"
                element={<DetailsProvideNumber />}
              />
            </Route>
            <Route path="/manage-role" element={<ManageRole />} />
            <Route path="/manage-role/create" element={<CreateRole />} />
            <Route path="/manage-role/update" element={<UpdateManageRole />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            <Route
              path="/manage-account/create"
              element={<CreateManageAccount />}
            />
            <Route
              path="/manage-account/update"
              element={<UpdateManageAccount />}
            />
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

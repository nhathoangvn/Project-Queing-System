import { Button } from "antd";
import { getAuth } from "firebase/auth";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivatePage from "./routers/components/PrivatePage";
import Login from "./view/Auth/Login";
import HomePage from "./pages/HomePage";
import ChangePassword from "./view/Auth/ChangePassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivatePage>
                <HomePage />
              </PrivatePage>
            }
          />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

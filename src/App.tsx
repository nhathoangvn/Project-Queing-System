import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PrivatePage from "./routers/components/PrivatePage";
import ChangePassword from "./view/Auth/ChangePassword";
import Login from "./view/Auth/Login";

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

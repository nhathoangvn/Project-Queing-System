import React from "react";
import { Outlet } from "react-router-dom";

export default function DeviceOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

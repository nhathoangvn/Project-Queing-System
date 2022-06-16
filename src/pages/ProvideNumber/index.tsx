import React from "react";
import { Outlet } from "react-router-dom";

export default function ProviderNumberOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

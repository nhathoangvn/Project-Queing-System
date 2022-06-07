import { Button } from "antd";
import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          getAuth().signOut();
          navigate("/login");
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );
}

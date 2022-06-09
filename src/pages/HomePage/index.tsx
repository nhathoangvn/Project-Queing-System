import { Button, Col, Menu, Row } from "antd";
import React from "react";
import { MdOutlineDashboard, MdMoreVert } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiWechatLine, RiSettingsLine } from "react-icons/ri";
import { FiLayers, FiLogOut } from "react-icons/fi";
import { BsClipboardData } from "react-icons/bs";
import logo from "../../shared/assets/images/logoAltaMain.png";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      <div className="main">
        <div className="main-left">
          <Row className="main-left-logo" justify="center" align="middle">
            <img src={logo} alt="" />
          </Row>
          <Menu
            style={{ width: 220 }}
            defaultSelectedKeys={["dashboard"]}
            defaultOpenKeys={["dashboard"]}
            className="main-menu"
          >
            <Menu.Item key="dashboard" icon={<MdOutlineDashboard size={20} />}>
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="device"
              icon={<HiOutlineDesktopComputer size={20} />}
            >
              Thiết bị
            </Menu.Item>
            <Menu.Item key="service" icon={<RiWechatLine size={20} />}>
              Dịch vụ
            </Menu.Item>
            <Menu.Item key="provide-number" icon={<FiLayers size={20} />}>
              Cấp số
            </Menu.Item>
            <Menu.Item key="report" icon={<BsClipboardData size={20} />}>
              Báo cáo
            </Menu.Item>
            <Menu.Item
              key="setting"
              className="__submenu"
              icon={<RiSettingsLine size={20} />}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>Cài đặt hệ thống</span>
                <MdMoreVert size={20} style={{ marginLeft: "17px" }} />
              </div>
              <div className="setting__wrap">
                <div className="setting__wrap-item">Quản lý vai trò</div>
                <div className="setting__wrap-item">Quản lý tài khoản</div>
                <div className="setting__wrap-item">Nhật ký người dùng</div>
              </div>
            </Menu.Item>

            <Menu.Item
              className="logout"
              key="logout"
              icon={<FiLogOut size={20} />}
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng xuất
            </Menu.Item>
          </Menu>
        </div>
        <div className="main-center"></div>
      </div>
    </div>
  );
}

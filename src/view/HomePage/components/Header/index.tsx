import { Avatar, Breadcrumb, Col, Dropdown, Row } from "antd";
import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { state } from "../../../../redux";
import avatar from "../../../../shared/assets/images/avatar.png";
import Notification, { INotification } from "../Notification/Notification";
import "./Header.scss";
interface IBreadcrumb {
  pathname: string;
  title: string[];
  childrenBreadcrumb?: IBreadcrumb;
}
interface IRouterProps {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

const Header: React.FC = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCheckedNotification, setIsCheckedNotification] =
    useState<boolean>(false);
  const { taiKhoanLogin } = useSelector((state: state) => state.taikhoan);
  const { deviceID, serviceID, numberID, roleID } = useParams();
  const breadcrumbItems: IBreadcrumb[] = [
    {
      pathname: "/dashboard",
      title: ["Dashboard"],
    },
    {
      pathname: "/device",
      title: ["Thiết bị", "Danh sách thiết bị"],
    },
    {
      pathname: "/device/create",
      title: ["Thiết bị", "Danh sách thiết bị", "Thêm thiết bị"],
    },
    {
      pathname: `/device/details/${deviceID}`,
      title: ["Thiết bị", "Danh sách thiết bị", "Chi tiết thiết bị"],
    },
    {
      pathname: `/device/update/${deviceID}`,
      title: ["Thiết bị", "Danh sách thiết bị", "Cập nhật thiết bị"],
    },
    {
      pathname: "/service",
      title: ["Dịch vụ", "Danh sách dịch vụ"],
    },
    {
      pathname: "/service/create",
      title: ["Dịch vụ", "Danh sách dịch vụ", "Thêm dịch vụ"],
    },
    {
      pathname: `/service/details/${serviceID}`,
      title: ["Dịch vụ", "Danh sách dịch vụ", "Chi tiết"],
    },
    {
      pathname: `/service/update/${serviceID}`,
      title: ["Dịch vụ", "Danh sách dịch vụ", "Chi tiết", "Cập nhật"],
    },
    {
      pathname: "/provide-number",
      title: ["Cấp số", "Danh sách cấp số"],
    },
    {
      pathname: "/provide-number/create",
      title: ["Cấp số", "Danh sách cấp số", "Cấp số"],
    },
    {
      pathname: `/provide-number/details/${numberID}`,
      title: ["Cấp số", "Danh sách cấp số", "Chi tiết"],
    },
    {
      pathname: "/report",
      title: ["Báo cáo", "Lập báo cáo"],
    },
    {
      pathname: "/manage-role",
      title: ["Cài đặt hệ thống", "Quản lý vai trò"],
    },
    {
      pathname: "/manage-role/create",
      title: ["Cài đặt hệ thống", "Quản lý vai trò", "Thêm vai trò"],
    },
    {
      pathname: `/manage-role/update/${roleID}`,
      title: ["Cài đặt hệ thống", "Quản lý vai trò", "Thêm vai trò"],
    },
    {
      pathname: "/manage-account",
      title: ["Cài đặt hệ thống", "Quản lý tài khoản"],
    },
    {
      pathname: "/manage-account/create",
      title: ["Cài đặt hệ thống", "Quản lý tài khoản", "Thêm tài khoản"],
    },
    {
      pathname: "/manage-account/update",
      title: ["Cài đặt hệ thống", "Quản lý tài khoản", "Cập nhật tài khoản"],
    },
    {
      pathname: "/dinary-user",
      title: ["Cài đặt hệ thống", "Nhật ký người dùng"],
    },
    {
      pathname: "/me",
      title: ["Thông tin cá nhân"],
    },
  ];
  const breadcrumb = (locationPathname: string) => {
    return breadcrumbItems.map((breadcrumbItem) => {
      switch (breadcrumbItem.pathname) {
        case locationPathname:
          return breadcrumbItem;
        default:
          return null;
      }
    });

    //   .filter((value) => value != null);
    // if (pathname.startsWith(pathname)) {
    //   return breadcrumbItems.filter(
    //     (item: IBreadcrumb) => item.pathname === pathname
    //   );
    // }
    // return breadcrumbItems.filter((item: IBreadcrumb) =>
    //   locationPathname.startsWith(item.pathname)
    // );
    // return locationPathname.split("/").filter((value) => value !== "");+
  };

  const Notifications: INotification = {
    notifications: [
      {
        fullname: "Nguyễn Thị Thuỳ Dung",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Nguyễn Thiên Chinh",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Võ Thị Kim Liên",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Hoàng Nguyễn Quốc Huy",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Võ Ngọc Lan Anh",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Nguyễn Thị Trúc Anh",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Nguyễn Trung Toàn",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Phạm Hồng Ngọc",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Hồ Trung Hiếu",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Hoàng Duy Phước",
        time: "12h30",
        date: "31/11/2021",
      },
      {
        fullname: "Trương Ngọc Nguyên",
        time: "12h30",
        date: "31/11/2021",
      },
    ],
  };
  return (
    <Row className="header">
      <Col span={17} className="header-breadcrumb">
        <Breadcrumb separator=">">
          {breadcrumb(location.pathname).map((items) =>
            items?.title?.map((title, index) => {
              return (
                <Breadcrumb.Item href={items.pathname} key={index}>
                  {title}
                </Breadcrumb.Item>
              );
            })
          )}
          {/* {breadcrumb(location.pathname)} */}
        </Breadcrumb>
      </Col>
      <Col
        span={7}
        className={
          location.pathname === "/dashboard"
            ? "header-bg header-user-information"
            : "header-user-information"
        }
      >
        <Row>
          <Col span={6}>
            <Row
              justify="end"
              align="middle"
              className="header-user-notification"
            >
              <Dropdown
                overlay={
                  <Notification notifications={Notifications.notifications} />
                }
                onVisibleChange={(visible) => {
                  setIsCheckedNotification(visible);
                }}
                trigger={["click"]}
                placement="bottom"
                overlayStyle={{ paddingLeft: "160px", paddingTop: "16px" }}
              >
                <Row
                  align="middle"
                  justify="center"
                  className={
                    isCheckedNotification
                      ? "around-notification-checked"
                      : "around-notification"
                  }
                >
                  <BsFillBellFill />
                </Row>
              </Dropdown>
            </Row>
          </Col>
          <Col span={18}>
            <Row className="header-user-avatar" onClick={() => navigate("/me")}>
              <Avatar src={avatar} size={40} />
              <div className="header-user-info">
                <span>Xin chào</span>
                <p>{taiKhoanLogin[0].hoten}</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Header;

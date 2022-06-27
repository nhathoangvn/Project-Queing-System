import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";
export interface INotification {
  notifications: {
    id: string;
    fullname: string;
    createdAt: string;
  }[];
}
const Notification: React.FC<INotification> = ({ notifications }) => {
  const navigate = useNavigate();
  return (
    <div className="menu-notification">
      <div className="menu-notification-header">
        <div style={{ paddingLeft: "24px" }}>Thông báo</div>
      </div>
      <div className="menu-notification-content">
        <Menu className="menu-notification-popup">
          {notifications.map((notification, index) => {
            return (
              <Menu.Item
                key={index}
                className="menu-notification-popup-item"
                onClick={() =>
                  navigate(`/provide-number/details/${notification.id}`)
                }
              >
                <div className="notify">
                  <div className="notify-title">{`Người dùng: ${notification.fullname}`}</div>
                  <div className="notyfi-description">{`Thời gian nhận số: ${notification.createdAt.replace(
                    " ",
                    " ngày "
                  )}`}</div>
                </div>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};
export default Notification;

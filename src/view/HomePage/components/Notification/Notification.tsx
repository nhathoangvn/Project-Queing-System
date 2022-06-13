import { Menu } from "antd";
import React from "react";
import "./Notification.scss";
export interface INotification {
  notifications: {
    fullname: string;
    time: string;
    date: string;
  }[];
}
const Notification: React.FC<INotification> = ({ notifications }) => {
  return (
    <div className="menu-notification">
      <div className="menu-notification-header">
        <div style={{ paddingLeft: "24px" }}>Thông báo</div>
      </div>
      <div className="menu-notification-content">
        <Menu className="menu-notification-popup">
          {notifications.map((notification, index) => {
            return (
              <Menu.Item key={index} className="menu-notification-popup-item">
                <div className="notify">
                  <div className="notify-title">{`Người dùng: ${notification.fullname}`}</div>
                  <div className="notyfi-description">{`Thời gian nhận số: ${notification.time} ngày ${notification.date}`}</div>
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

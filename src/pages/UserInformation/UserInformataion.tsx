import { Avatar, Col, Form, Input, Row, Typography } from "antd";
import React, { ChangeEvent } from "react";
import me from "../../shared/assets/images/me.png";
import "./UserInformataion.scss";
interface IUserInfo {
  label: string;
  value: string;
}
export default function UserInformataion() {
  const getFields: IUserInfo[] = [
    {
      label: "Tên người dùng",
      value: "Phan Võ Nhật Hoàng",
    },
    {
      label: "Số điện thoại",
      value: "0981169709",
    },
    {
      label: "Email",
      value: "nhathoangvn112@gmail.com",
    },
    {
      label: "Tên đăng nhập",
      value: "nhathoang1",
    },
    {
      label: "Mật khẩu",
      value: "123213",
    },
    {
      label: "Vai trò",
      value: "Kế toán",
    },
  ];
  return (
    <div className="user-info">
      <Row justify="center" className="user-info-left">
        <div className="avatar">
          <Avatar src={me} size={248} />
        </div>
        <div>
          <p className="text-fullname">Phan Võ Nhật Hoàng</p>
        </div>
      </Row>
      <div className="user-info-right">
        <Form layout="vertical">
          <Row gutter={[24, 8]}>
            {getFields.map((field, index) => {
              return (
                <Col span={12} key={index}>
                  <Form.Item label={field.label}>
                    <Input className="input" value={field.value} disabled />
                  </Form.Item>
                </Col>
              );
            })}
          </Row>
        </Form>
      </div>
    </div>
  );
}

import { Avatar, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { state } from "../../redux";
import me from "../../shared/assets/images/me.png";
import "./UserInformataion.scss";
interface IUserInfo {
  label: string;
  value: string;
}
export default function UserInformataion() {
  const { taiKhoanLogin } = useSelector((state: state) => state.taikhoan);
  useEffect(() => {}, []);
  return (
    <div className="user-info">
      <Row justify="center" className="user-info-left">
        <div className="avatar">
          <Avatar src={me} size={248} />
        </div>
        <div>
          <p className="text-fullname">{taiKhoanLogin[0].hoten}</p>
        </div>
      </Row>
      <div className="user-info-right">
        <Form layout="vertical">
          <Row gutter={[24, 8]}>
            <Col span={12}>
              <Form.Item label="Tên người dùng">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].hoten}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số điện thoại">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].sodienthoai}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].email}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tên đăng nhập">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].tendangnhap}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mật khẩu">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].matkhau}
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Vai trò">
                <Input
                  className="input"
                  value={taiKhoanLogin[0].vaitro}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

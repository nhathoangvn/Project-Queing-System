import { Button, Form, Input, Row } from "antd";
import React, { ChangeEvent } from "react";

interface FormPasswordProps {
  password: string;
  rePassword: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FormPassword: React.FC<FormPasswordProps> = ({
  password,
  rePassword,
  onChangePassword,
  onChangeRePassword,
  onClickConfirm,
}) => {
  const handleOnchangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    onChangePassword(e);
  };
  const handleOnChangeRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeRePassword(e);
  };
  return (
    <Row justify="center" className="change-password-container">
      <Form layout="vertical">
        <Row justify="center" className="title">
          <p>Đặt lại mật khẩu</p>
        </Row>
        <Form.Item label="Mật khẩu *">
          <Input.Password
            value={password}
            onChange={handleOnchangePassword}
            className="input"
          />
        </Form.Item>
        <Form.Item label="Nhập lại mật khẩu *">
          <Input.Password
            value={rePassword}
            onChange={handleOnChangeRePassword}
            className="input"
          />
        </Form.Item>
        <Form.Item>
          <Row justify="center" className="btn-container">
            <Button
              className="btn-continue"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onClickConfirm(e)
              }
            >
              Xác nhận
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default FormPassword;

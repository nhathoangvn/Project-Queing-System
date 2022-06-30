import { Button, Form, Row, Space, Input } from "antd";

import React, { ChangeEvent } from "react";
interface FormEmailProps {
  emailChange: string;
  checkEmail: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickContinue: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FormEmail: React.FC<FormEmailProps> = ({
  emailChange,
  checkEmail,
  onChangeEmail,
  onClickCancel,
  onClickContinue,
}) => {
  const handleOnchangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeEmail(event);
  };
  return (
    <Row justify="center" className="change-password-container">
      <Form>
        <Row justify="center" className="title">
          <p>Đặt lại mật khẩu</p>
        </Row>
        <Row justify="center" className="description">
          <span>Vui lòng nhập email để đặt lại mật khẩu của bạn *</span>
        </Row>
        <Form.Item
          help={
            checkEmail ? (
              ""
            ) : (
              <React.Fragment>
                <span style={{ color: "red", fontWeight: 600 }}>
                  Email không chính xác vui lòng thử lại
                </span>
              </React.Fragment>
            )
          }
        >
          <Input
            value={emailChange}
            onChange={handleOnchangeEmail}
            className="input"
          />
        </Form.Item>
        <Form.Item>
          <Row justify="center" align="middle" className="btn-container">
            <Space>
              <Button
                className="btn-cancel"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  onClickCancel(event)
                }
              >
                Huỷ
              </Button>
              <Button
                className="btn-continue"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  onClickContinue(event)
                }
              >
                Tiếp tục
              </Button>
            </Space>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default FormEmail;

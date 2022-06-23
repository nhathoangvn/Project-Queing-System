import { Button, Col, Input, Row, Select, Space } from "antd";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CreateManageAccount.scss";
export default function CreateManageAccount() {
  const naviagte = useNavigate();
  return (
    <div className="create-account">
      <div className="create-account-wrapper">
        <div className="create-account-container">
          <div className="create-account-title">
            <span>Quản lý tài khoản</span>
          </div>
          <div className="create-account-content">
            <div className="create-account-form">
              <div className="create-account-form-title">
                <span>Thông tin tài khoản</span>
              </div>
              <div className="create-account-form-item">
                <Row gutter={[24, 16]}>
                  <Col span={12}>
                    <span className="label">
                      Họ tên: <span className="required">*</span>
                    </span>
                    <Input className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Tên đăng nhập: <span className="required">*</span>
                    </span>
                    <Input className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Số điện thoại: <span className="required">*</span>
                    </span>
                    <Input className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Mật khẩu: <span className="required">*</span>
                    </span>
                    <Input.Password className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Email: <span className="required">*</span>
                    </span>
                    <Input className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Nhập lại mật khẩu: <span className="required">*</span>
                    </span>
                    <Input.Password className="form-item-input" />
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Vai trò <span className="required">*</span>
                    </span>
                    <Select
                      suffixIcon={<AiFillCaretDown size={20} />}
                      defaultValue="Quản lý"
                    >
                      <Select.Option value="Quản lý">Quản lý</Select.Option>
                      <Select.Option value="Kế toán">Kế toán</Select.Option>
                      <Select.Option value="Admin">Admin</Select.Option>
                    </Select>
                  </Col>
                  <Col span={12}>
                    <span className="label">
                      Tình trạng: <span className="required">*</span>
                    </span>
                    <Select
                      defaultValue="Tất cả"
                      suffixIcon={<AiFillCaretDown size={20} />}
                    >
                      <Select.Option value="Tất cả">Tất cả</Select.Option>
                      <Select.Option value="Hoạt động">Hoạt động</Select.Option>
                      <Select.Option value="Ngưng hoạt động">
                        Ngưng hoạt động
                      </Select.Option>
                    </Select>
                  </Col>
                  <Col span={12}>
                    <span className="required-label">
                      <span style={{ color: "red" }}>*</span> Là trường thông
                      tin bắt buộc
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="create-account-action">
            <Row justify="center" align="middle">
              <Space size="large">
                <Button
                  className="btn-cancel"
                  onClick={() => naviagte("/manage-account")}
                >
                  Huỷ bỏ
                </Button>
                <Button
                  className="btn-add"
                  onClick={() => naviagte("/manage-account")}
                >
                  Thêm
                </Button>
              </Space>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

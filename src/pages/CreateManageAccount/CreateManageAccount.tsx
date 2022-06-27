import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import React, { ChangeEvent, useState } from "react";
import {
  AiFillCaretDown,
  AiFillInfoCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { taikhoanCreator } from "../../redux";
import "./CreateManageAccount.scss";
export default function CreateManageAccount() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [passwordChange, setPasswordChange] = useState<string>("");
  const [repasswordChange, setRepasswordChange] = useState<string>("");
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const { addAccount } = bindActionCreators(taikhoanCreator, dispatch);
  const [checkRepassword, setCheckRepassword] = useState<boolean>(true);

  const handleOnchangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordChange(e.target.value);
    setCheckRepassword(true);
  };
  const handleOnChangeRepassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepasswordChange(e.target.value);
    setCheckRepassword(true);
  };
  const handleOnClickCreateAccount = () => {
    form
      .validateFields()
      .then(async (value) => {
        const {
          hoten,
          tendangnhap,
          matkhau,
          repassword,
          email,
          sodienthoai,
          vaitro,
          hoatdong,
        } = value;
        if (passwordChange === repassword) {
          addAccount({
            hoatdong,
            hoten,
            tendangnhap,
            matkhau,
            email,
            sodienthoai,
            vaitro,
          });
          setCheckRepassword(true);
          navigate("/manage-account");
        } else {
          setCheckRepassword(false);
        }
      })
      .catch(() => setCheckRepassword(false));
  };
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
                <Form form={form} onFinish={handleOnClickCreateAccount}>
                  <Row gutter={24}>
                    <Col span={12}>
                      <span className="label">
                        Họ tên: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="hoten"
                        rules={[
                          {
                            required: true,
                            message: "Họ tên là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Input className="form-item-input" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Tên đăng nhập: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="tendangnhap"
                        rules={[
                          {
                            required: true,
                            message:
                              "Tên đăng nhập là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Input className="form-item-input" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Số điện thoại: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="sodienthoai"
                        rules={[
                          {
                            required: true,
                            message:
                              "Số điện thoại là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Input className="form-item-input" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Mật khẩu: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="matkhau"
                        rules={[
                          {
                            required: true,
                            message: "Mật khẩu là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Input.Password
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnchangePassword(e)
                          }
                          className="form-item-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Email: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Email là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Input className="form-item-input" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Nhập lại mật khẩu: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="repassword"
                        help={
                          checkRepassword ? (
                            ""
                          ) : (
                            <React.Fragment>
                              <Row align="middle" style={{ color: "#ff4d4f" }}>
                                <AiOutlineInfoCircle size={16} />
                                Mật khẩu không trùng khớp
                              </Row>
                            </React.Fragment>
                          )
                        }
                      >
                        <Input.Password
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnChangeRepassword(e)
                          }
                          className="form-item-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Vai trò <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="vaitro"
                        rules={[
                          {
                            required: true,
                            message: "Vai trò là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Select
                          suffixIcon={<AiFillCaretDown size={20} />}
                          placeholder="Chọn vai trò"
                        >
                          <Select.Option value="Quản lý">Quản lý</Select.Option>
                          <Select.Option value="Kế toán">Kế toán</Select.Option>
                          <Select.Option value="Admin">Admin</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Tình trạng: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="hoatdong"
                        rules={[
                          {
                            required: true,
                            message: "Tình trạng là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Chọn tình trạng"
                          suffixIcon={<AiFillCaretDown size={20} />}
                        >
                          <Select.Option value={true}>Hoạt động</Select.Option>
                          <Select.Option value={false}>
                            Ngưng hoạt động
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="required-label">
                        <span style={{ color: "red" }}>*</span> Là trường thông
                        tin bắt buộc
                      </span>
                    </Col>
                  </Row>
                </Form>
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
                  onClick={handleOnClickCreateAccount}
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

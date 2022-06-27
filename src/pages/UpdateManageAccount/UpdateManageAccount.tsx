import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, taikhoanCreator } from "../../redux";
type MyParams = {
  accountID: string;
};
interface IAccount {
  email: string;
  hoatdong: boolean;
  hoten: string;
  matkhau: string;
  sodienthoai: string;
  tendangnhap: string;
  vaitro: string;
}
export default function UpdateManageAccount() {
  const [form] = Form.useForm();
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [updateAccount, setUpdateAccount] = useState<IAccount>({
    email: "",
    hoatdong: true,
    hoten: "",
    matkhau: "",
    sodienthoai: "",
    tendangnhap: "",
    vaitro: "",
  });
  const [checkRepassword, setCheckRepassword] = useState<boolean>(true);
  const { accountID } = useParams<keyof MyParams>() as MyParams;
  const { loadData, selectedAccount, updateItem } = bindActionCreators(
    taikhoanCreator,
    dispatch
  );
  const { taiKhoanSelected } = useSelector((state: state) => state.taikhoan);
  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    selectedAccount(accountID);
  }, [accountID]);
  useEffect(() => {
    setUpdateAccount({
      email: taiKhoanSelected.email,
      hoatdong: taiKhoanSelected.hoatdong,
      hoten: taiKhoanSelected.hoten,
      matkhau: taiKhoanSelected.matkhau,
      sodienthoai: taiKhoanSelected.sodienthoai,
      tendangnhap: taiKhoanSelected.tendangnhap,
      vaitro: taiKhoanSelected.vaitro,
    });
    form.setFieldsValue({
      email: taiKhoanSelected.email,
      hoatdong: taiKhoanSelected.hoatdong,
      hoten: taiKhoanSelected.hoten,
      matkhau: taiKhoanSelected.matkhau,
      sodienthoai: taiKhoanSelected.sodienthoai,
      tendangnhap: taiKhoanSelected.tendangnhap,
      vaitro: taiKhoanSelected.vaitro,
      rematkhau: taiKhoanSelected.matkhau,
    });
  }, [taiKhoanSelected]);

  const handleOnClickUpdateAccount = () => {
    form
      .validateFields()
      .then(async (value) => {
        const { rematkhau } = value;
        if (updateAccount.matkhau === rematkhau) {
          updateItem(accountID, updateAccount);
          setCheckRepassword(true);
          naviagte("/manage-account");
        } else {
          setCheckRepassword(false);
        }
      })
      .catch();
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
                <Form form={form}>
                  <Row gutter={24}>
                    <Col span={12}>
                      <span className="label">
                        Họ tên: <span className="required">*</span>
                      </span>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Họ tên là trường thông tin bắt buộc",
                          },
                        ]}
                        name="hoten"
                      >
                        <Input
                          value={updateAccount.hoten}
                          onChange={(e) =>
                            setUpdateAccount({
                              ...updateAccount,
                              hoten: e.target.value,
                            })
                          }
                          className="form-item-input"
                        />
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
                        <Input
                          value={updateAccount.tendangnhap}
                          onChange={(e) =>
                            setUpdateAccount({
                              ...updateAccount,
                              tendangnhap: e.target.value,
                            })
                          }
                          className="form-item-input"
                        />
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
                        <Input
                          value={updateAccount.sodienthoai}
                          onChange={(e) =>
                            setUpdateAccount({
                              ...updateAccount,
                              sodienthoai: e.target.value,
                            })
                          }
                          className="form-item-input"
                        />
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
                          value={updateAccount.matkhau}
                          onChange={(e) => {
                            setUpdateAccount({
                              ...updateAccount,
                              matkhau: e.target.value,
                            });
                            setCheckRepassword(true);
                          }}
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
                        <Input
                          value={updateAccount.email}
                          onChange={(e) =>
                            setUpdateAccount({
                              ...updateAccount,
                              email: e.target.value,
                            })
                          }
                          className="form-item-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <span className="label">
                        Nhập lại mật khẩu: <span className="required">*</span>
                      </span>
                      <Form.Item
                        name="rematkhau"
                        help={
                          checkRepassword ? (
                            ""
                          ) : (
                            <React.Fragment>
                              <span style={{ color: "red" }}>
                                Mật khẩu không trùng khớp
                              </span>
                            </React.Fragment>
                          )
                        }
                      >
                        <Input.Password
                          onChange={() => setCheckRepassword(true)}
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
                          onChange={(value) =>
                            setUpdateAccount({
                              ...updateAccount,
                              vaitro: value,
                            })
                          }
                        >
                          <Select.Option value="Quản lý">Quản lý</Select.Option>
                          <Select.Option value="Kế toán">Kế toán</Select.Option>
                          <Select.Option value="Admin">Admin</Select.Option>
                          <Select.Option value="SuperAdmin">
                            Super Admin
                          </Select.Option>
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
                            message: "Hoạt động là trường thông tin bắt buộc",
                          },
                        ]}
                      >
                        <Select
                          suffixIcon={
                            <AiFillCaretDown
                              size={20}
                              onChange={(value: any) =>
                                setUpdateAccount({
                                  ...updateAccount,
                                  hoatdong: value,
                                })
                              }
                            />
                          }
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
                  onClick={handleOnClickUpdateAccount}
                >
                  Cập nhật
                </Button>
              </Space>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

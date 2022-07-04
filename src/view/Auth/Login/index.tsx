import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, taikhoanCreator } from "../../../redux";
import banner from "../../../shared/assets/images/banner.png";
import logoAlta from "../../../shared/assets/images/logoAlta.png";
import CButton from "../../../shared/components/Button";
import "./Login.scss";
interface ILoginPageProps {}
const Login: React.FC<ILoginPageProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formLogin] = Form.useForm();
  const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { loadData, signin } = bindActionCreators(taikhoanCreator, dispatch);
  const { taiKhoanList } = useSelector((state: state) => state.taikhoan);
  useEffect(() => {
    loadData();
  }, []);
  console.log(taiKhoanList);
  const handleSubmitLogin = () => {
    const result = taiKhoanList.filter(
      (item: any) => item.tendangnhap === username && item.matkhau === password
    );

    Promise.all(result)
      .then((res: any) => {
        if (res[0].tendangnhap !== undefined) {
          localStorage.setItem("accessToken", result[0].id);
          localStorage.setItem("currentUser", JSON.stringify(result));
          signin(true);
          window.location.href = "/dashboard";
        }
      })
      .catch(() => setCheckAuth(false));
  };
  const handleOnChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setCheckAuth(true);
  };
  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setCheckAuth(true);
  };
  if (localStorage.getItem("currentUser")) {
    <Navigate to={`/dashboard`} replace={true} />;
  }
  return (
    <div className="login">
      <Row className="wrapper">
        <Col className="login-wrapper" span={10}>
          <Row className="logo" justify="center" align="middle">
            <img src={logoAlta} alt="" />
          </Row>
          <Row justify="center" className="login-container">
            <Col span={24}>
              <Row justify="center">
                <Form
                  layout="vertical"
                  form={formLogin}
                  size="large"
                  onFinish={handleSubmitLogin}
                >
                  <Form.Item
                    label="Tên đăng nhập *"
                    validateStatus={checkAuth ? "" : "error"}
                    name="userName"
                  >
                    <Input
                      className="input"
                      value={username}
                      onChange={handleOnChangeUsername}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Mật khẩu *"
                    name="password"
                    validateStatus={checkAuth ? "" : "error"}
                    help={
                      checkAuth ? undefined : (
                        <React.Fragment>
                          <InfoCircleOutlined />
                          <span> Sai mật khẩu hoặc tên đăng nhập</span>
                        </React.Fragment>
                      )
                    }
                  >
                    <Input.Password
                      className="input"
                      value={password}
                      onChange={handleOnChangePassword}
                    />
                  </Form.Item>
                  <Form.Item>
                    <a className="forgot-password" href="/change-password">
                      Quên mật khẩu
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Row justify="center" align="middle">
                      <CButton
                        cName="btn-login"
                        size="large"
                        onClick={handleSubmitLogin}
                        text="Đăng nhập"
                      />
                    </Row>
                  </Form.Item>
                </Form>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="banner" span={14}>
          <Row className="banner-wrapper">
            <img alt="" src={banner} className="img-banner" />
            <div className="text-banner-wrapper">
              <span className="text-banner">Hệ thống</span>
              <span className="text">QUẢN LÝ XẾP HÀNG</span>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Login;

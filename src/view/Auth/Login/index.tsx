import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../shared/assets/images/banner.png";
import logoAlta from "../../../shared/assets/images/logoAlta.png";
import CButton from "../../../shared/components/Button";
import "./Login.scss";
interface ILoginPageProps {}
const Login: React.FC<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formLogin] = Form.useForm();
  const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const handleSubmitLogin = () => {
    formLogin.validateFields().then(async (formValue) => {
      const { userName, password } = formValue;
      if (userName && password) {
        signInWithEmailAndPassword(auth, userName, password)
          .then((response) => {
            if (response) {
              setCheckAuth(true);
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);
            setCheckAuth(false);
          });
      } else {
        // setCheckAuth(false);
      }
    });
  };
  const handleOnChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setCheckAuth(true);
  };
  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setCheckAuth(true);
  };
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
                <Form layout="vertical" form={formLogin} size="large">
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
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Login;

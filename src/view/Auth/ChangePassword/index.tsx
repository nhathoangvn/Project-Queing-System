import React, { ChangeEvent, useState } from "react";
import { Button, Col, Form, Input, Row, Space } from "antd";
import logoAlta from "../../../shared/assets/images/logoAlta.png";
import banner from "../../../shared/assets/images/banner-changepassword.png";
import "./ChangePassword.scss";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import FormEmail from "./components/FormEmail";
import FormPassword from "./components/FormPassword";
export default function ChangePassword() {
  const navigate = useNavigate();
  const [emailChange, setEmailChange] = useState<string>("");
  const [passowrd, setPassword] = useState<string>("");
  const [rePassowrd, setRePassword] = useState<string>("");

  const [showFormEmail, setShowFormEmail] = useState<boolean>(true);
  const [showFormPassword, setShowFormPassword] = useState<boolean>(false);
  const handleOnchangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailChange(e.target.value);
  };
  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleOnChangeRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };
  const handleOnClickCancel = () => {
    navigate("/login");
  };
  const handleOnClickCountinue = () => {
    setShowFormEmail(false);
    setShowFormPassword(true);
  };
  const handleOnClickConfirm = () => {
    navigate("/login");
  };
  return (
    <div className="change-password">
      <Row justify="center" className="wrapper">
        <Col span={10} className="form-change-password">
          <Row justify="center" align="middle">
            <img src={logoAlta} className="logo" alt="" />
          </Row>
          {showFormEmail && (
            <FormEmail
              onChangeEmail={handleOnchangeEmail}
              onClickCancel={handleOnClickCancel}
              onClickContinue={handleOnClickCountinue}
              emailChange={emailChange}
            />
          )}

          <CSSTransition
            in={showFormPassword}
            timeout={0}
            classNames="alert"
            unmountOnExit
          >
            <FormPassword
              onClickConfirm={handleOnClickConfirm}
              onChangePassword={handleOnChangePassword}
              onChangeRePassword={handleOnChangeRePassword}
              password={passowrd}
              rePassword={rePassowrd}
            />
          </CSSTransition>
        </Col>
        <Col span={14}>
          <Row align="middle" className="banner">
            <img src={banner} alt="" className="img-banner" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

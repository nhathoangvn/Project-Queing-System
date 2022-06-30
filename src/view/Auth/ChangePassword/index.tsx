import React, { ChangeEvent, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Input, Row, Space } from "antd";
import logoAlta from "../../../shared/assets/images/logoAlta.png";
import banner from "../../../shared/assets/images/banner-changepassword.png";
import "./ChangePassword.scss";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import FormEmail from "./components/FormEmail";
import FormPassword from "./components/FormPassword";
import { bindActionCreators } from "redux";
import { state, taikhoanCreator } from "../../../redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function ChangePassword() {
  const navigate = useNavigate();
  const [emailChange, setEmailChange] = useState<string>("");
  const [passowrd, setPassword] = useState<string>("");
  const [rePassowrd, setRePassword] = useState<string>("");
  const [showFormEmail, setShowFormEmail] = useState<boolean>(true);
  const [showFormPassword, setShowFormPassword] = useState<boolean>(false);
  const [userChange, setUserChange] = useState<any>({});

  const [checkEmail, setCheckEmail] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { loadData, updateItem } = bindActionCreators(
    taikhoanCreator,
    dispatch
  );
  const { taiKhoanList } = useSelector((state: state) => state.taikhoan);
  useEffect(() => {
    loadData();
  }, []);
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
    if (
      taiKhoanList.filter((item: any) => item.email === emailChange).length > 0
    ) {
      setUserChange(
        taiKhoanList.filter((item: any) => item.email === emailChange)
      );
      setShowFormEmail(false);
      setShowFormPassword(true);
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const handleOnClickConfirm = () => {
    if (passowrd === rePassowrd) {
      updateItem(userChange[0].id, {
        email: emailChange,
        hoatdong: true,
        hoten: userChange[0].hoten,
        matkhau: passowrd,
        sodienthoai: userChange[0].sodienthoai,
        tendangnhap: userChange[0].tendangnhap,
        vaitro: userChange[0].vaitro,
      });
      navigate("/login");
    }
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
              checkEmail={checkEmail}
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

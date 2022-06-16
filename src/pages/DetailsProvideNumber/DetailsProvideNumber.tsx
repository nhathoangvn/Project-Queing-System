import { Badge, Col, Row } from "antd";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./DetailsProvideNumber.scss";
export default function DetailsProvideNumber() {
  const navigate = useNavigate();
  return (
    <div className="details-provide-number">
      <div className="details-provide-number-wrapper">
        <div className="details-provide-number-container">
          <div className="details-provide-number-title">
            <span>Quản lý cấp số</span>
          </div>
          <div className="details-provide-number-content">
            <div className="details-provide-number-content-container">
              <div className="details-provide-number-container-left">
                <div className="content-title">
                  <span>Thông tin cấp số</span>
                </div>
                <Row className="content-form">
                  <Col className="content-form-item" span={6}>
                    <span className="label">Họ tên:</span>
                    <span className="children">Nguyễn Thị Dung</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Nguồn cấp:</span>
                    <span className="children">Kiosk</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Tên dịch vụ:</span>
                    <span className="children">Khám tim mạch</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Trạng thái:</span>
                    <span className="children">
                      <Badge color="blue" />
                      Đang chờ
                    </span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Số thứ tự:</span>
                    <span className="children">2001201</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Số điện thoại:</span>
                    <span className="children">0981169609</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Thời gian cấp:</span>
                    <span className="children">14:30 06/11/2021</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Địa chỉ Email:</span>
                    <span className="children">nguyendung@gmail.com</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Hạn sử dụng:</span>
                    <span className="children">18:00 06/11/2021</span>
                  </Col>
                </Row>
              </div>
              <div
                className="details-provide-number-container-right"
                onClick={() => navigate("/provide-number")}
              >
                <Row justify="center" align="middle" className="right-content">
                  <div className="around-icon">
                    <RiArrowGoBackFill
                      size={20}
                      style={{ fontWeight: "bolder", marginTop: "2px" }}
                      color="#fff"
                    />
                  </div>
                  <div>
                    <p>Quay lại</p>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

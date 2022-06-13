import { Col, Row } from "antd";
import React from "react";
import { FaPenSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DetailsDevice.scss";
export default function DetailsDevice() {
  const navigate = useNavigate();
  return (
    <div className="details-device">
      <div className="details-device-title">
        <p>Quản lý thiết bị</p>
      </div>
      <div className="details-device-wrapper">
        <div className="details-device-container">
          <div className="details-device-content-title">
            <p>Thông tin thiết bị</p>
          </div>
          <div className="details-device-form-container">
            <div className="details-device-form">
              <Row gutter={24}>
                <Col className="details-device-form-item" span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Mã thiết bị:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>KIO_01</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="details-device-form-item" offset={3} span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Loại thiết bị:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>Kiosk</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="details-device-form-item" span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Tên thiết bị:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>Kiosk</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="details-device-form-item" offset={3} span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Tên đăng nhập:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>nhathoangvn112</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="details-device-form-item" span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Địa chỉ IP:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>168.172.308</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="details-device-form-item" offset={3} span={8}>
                  <Row>
                    <Col span={12} className="label">
                      <p>Mật khẩu:</p>
                    </Col>
                    <Col span={12} className="init-value">
                      <p>CMS</p>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} className="details-device-form-item">
                  <div className="label">
                    <p>Dịch vụ sử dụng:</p>
                  </div>
                  <div className="init-value">
                    <p>
                      Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt,
                      Khám tai mũi họng, Khám hô hấp, Khám tổng quát.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <Row
          justify="center"
          align="middle"
          className="details-device-form-action"
          onClick={() => navigate("/device/update")}
        >
          <div className="action-icon">
            <FaPenSquare size={26} color="#FF9138" />
          </div>
          <div className="action-title">
            <p>Cập nhật thiết bị</p>
          </div>
        </Row>
      </div>
    </div>
  );
}

import { Button, Checkbox, Col, Input, Row, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateService.scss";
export default function CreateService() {
  const navigate = useNavigate();
  return (
    <div className="create-service">
      <div className="create-service-wrapper">
        <div className="create-service-container">
          <div className="create-service-title">
            <span>Quản lý dịch vụ</span>
          </div>
          <div className="create-service-content-container">
            <div className="create-service-content">
              <div className="create-service-content-title">
                <span>Thông tin dịch vụ</span>
              </div>
              <div className="create-service-form">
                <Row>
                  <Col span={12}>
                    <div className="form-item">
                      <div className="label">
                        <p>Mã dịch vụ:</p>
                        <div className="required">
                          <p>*</p>
                        </div>
                      </div>
                      <div className="input">
                        <Input />
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="label">
                        <p>Tên dịch vụ:</p>
                        <div className="required">
                          <p>*</p>
                        </div>
                      </div>
                      <div className="input">
                        <Input />
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="form-item">
                      <div className="label">
                        <p>Mô tả:</p>
                      </div>
                      <div>
                        <Input.TextArea
                          className="input-area"
                          style={{ resize: "none" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="content-bottom">
                <div className="title">
                  <span>Quy tắc cấp số</span>
                </div>
                <div>
                  <div className="content-form">
                    <Row className="content-form-item">
                      <Col span={4} className="checkbox">
                        <Checkbox
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                          }}
                        >
                          Tăng tự động từ:
                        </Checkbox>
                      </Col>
                      <Col span={20}>
                        <div className="checkbox-content">
                          <Input
                            value="0001"
                            bordered
                            style={{
                              width: "61px",
                              height: "44px",
                              borderRadius: "8px",
                            }}
                          />
                          <Row
                            align="middle"
                            style={{ height: "44px", padding: "0 12px 0 12px" }}
                          >
                            đến
                          </Row>
                          <Input
                            value="9999"
                            bordered
                            style={{
                              width: "61px",
                              height: "44px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="content-form">
                    <Row className="content-form-item ">
                      <Col span={4} className="checkbox">
                        <Checkbox
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                          }}
                        >
                          Prefix:
                        </Checkbox>
                      </Col>
                      <Col span={20}>
                        <div className="checkbox-content">
                          <Input
                            value="0001"
                            bordered
                            className=""
                            style={{
                              width: "61px",
                              height: "44px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="content-form">
                    <Row className="content-form-item">
                      <Col span={4} className="checkbox">
                        <Checkbox
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                          }}
                        >
                          Surfix:
                        </Checkbox>
                      </Col>
                      <Col span={20}>
                        <div className="checkbox-content">
                          <Input
                            value="0001"
                            bordered
                            style={{
                              width: "61px",
                              height: "44px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row
                      style={{
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Col span={4} style={{ paddingLeft: "24px" }}>
                        <Checkbox
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                          }}
                        >
                          Reset mỗi ngày:
                        </Checkbox>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div style={{ paddingTop: "12px", paddingLeft: "24px" }}>
                  <span style={{ color: "red" }}>*</span>{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#7e7d88",
                    }}
                  >
                    Là trường thông tin bắt buột
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Row justify="center" align="middle" className="action-content">
            <Space size="large">
              <Button
                className="btn-cancel"
                onClick={() => navigate("/service")}
              >
                Huỷ bỏ
              </Button>
              <Button className="btn-add" onClick={() => navigate("/service")}>
                Thêm dịch vụ
              </Button>
            </Space>
          </Row>
        </div>
      </div>
    </div>
  );
}

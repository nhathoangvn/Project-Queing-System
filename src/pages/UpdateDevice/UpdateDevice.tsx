import { Button, Col, Input, Row, Select, Space } from "antd";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./UpdateDevice.scss";
export default function UpdateDevice() {
  return (
    <div className="update-device">
      <div className="update-device-wrapper">
        <div className="update-device-container">
          <div className="update-device-title">
            <p>Quản lý thiết bị</p>
          </div>
          <div className="update-device-form-container">
            <div className="update-device-form">
              <div className="update-device-form-content-title">
                <p>Thông tin thiết bị</p>
              </div>
              <div className="update-device-form-item">
                <Row gutter={24} style={{ paddingLeft: "24px" }}>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Mã thiết bị:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="input">
                      <Input value="KIO_01" />
                    </div>
                  </Col>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Loại thiết bị:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="select-option">
                      <Select
                        suffixIcon={<AiFillCaretDown size={20} />}
                        defaultValue="kiosk"
                        size="large"
                      >
                        <Select.Option value="kiosk">Kiosk</Select.Option>
                        <Select.Option value="display-counter">
                          Display Counter
                        </Select.Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Tên thiết bị:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="input">
                      <Input value="Kiosk" />
                    </div>
                  </Col>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Tên đăng nhập:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="input">
                      <Input value="nhathoangvn112" />
                    </div>
                  </Col>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Địa chỉ IP:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="input">
                      <Input value="168.172.308" />
                    </div>
                  </Col>
                  <Col span={12} className="form-item">
                    <div className="label">
                      <p>Mật khẩu:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="input">
                      <Input value="CMS" />
                    </div>
                  </Col>
                  <Col span={24} className="form-item">
                    <div className="label">
                      <p>Dịch vụ sử dụng:</p>
                      <div className="required">
                        <p>*</p>
                      </div>
                    </div>
                    <div className="service-usage">
                      <Select mode="multiple">
                        <Select.Option value="tatCa">Tất cả</Select.Option>
                        <Select.Option value="timMach">
                          Khám tim mạch
                        </Select.Option>
                        <Select.Option value="sanPhuKhoa">
                          Khám sản phụ khoa
                        </Select.Option>
                        <Select.Option value="rangHamMat">
                          Khám răng hàm mặt
                        </Select.Option>
                        <Select.Option value="taiMuiHong">
                          Khám tai mũi họng
                        </Select.Option>
                        <Select.Option value="hoHap">Khám hô hấp</Select.Option>
                        <Select.Option value="tongQuat">
                          Khám tổng quát
                        </Select.Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24} className="form-item-notes">
                    <div className="label">
                      <div className="required">
                        <p>*</p>
                      </div>
                      <p>Là trường thông tin bắt buộc</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <Row justify="center" align="middle" className="action-container">
              <Space size="large">
                <Button className="btn-cancel">Huỷ bỏ</Button>
                <Button className="btn-update">Cập nhật</Button>
              </Space>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Select,
  Space,
} from "antd";
import { ALL } from "dns";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { thietBiCreator } from "../../redux";
import { IDevice } from "../../types/TypeDevice";
import "./CreateDevice.scss";
export default function CreateDevice() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(thietBiCreator, dispatch);
  const [newDevice, setNewDevice] = useState<IDevice>({
    deviceName: "",
    idDevice: "",
    ipAddress: "",
    service: [],
    statusConnection: true,
    statusWork: true,
    matkhau: "",
    taikhoan: "",
    typeDevice: "",
  });
  const handleOnClickAddItemDevice = () => {
    form
      .validateFields()
      .then(async () => {
        addItem(newDevice);
        navigate("/device");
      })
      .catch(() => {});
  };
  return (
    <div className="create-device">
      <div className="create-device-wrapper">
        <Form form={form} onFinish={handleOnClickAddItemDevice}>
          <div className="create-device-title">
            <p>Quản lý thiết bị</p>
          </div>
          <div className="create-device-container">
            <div className="create-device-title-info">
              <p>Thông tin thiết bị</p>
            </div>
            <div className="create-device-form">
              <Row gutter={24}>
                <Col span={12} className="create-device-form-item">
                  <span>
                    Mã thiết bị:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Mã thiết bị là trường thông tin bắt buộc",
                      },
                    ]}
                    name="idDevice"
                  >
                    <Input
                      className="form-item-input"
                      placeholder="Nhập mã thiết bị"
                      value={newDevice.idDevice}
                      onChange={(e) =>
                        setNewDevice({
                          ...newDevice,
                          idDevice: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="create-device-form-item-select">
                  <div className="select-label">
                    <span>
                      Loại thiết bị:<span className="required">*</span>
                    </span>
                  </div>
                  <div className="select">
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Loại thiết bị là trường thông tin bắt buộc",
                        },
                      ]}
                      name="typeDevice"
                    >
                      <Select
                        optionLabelProp="children"
                        size="large"
                        placeholder="Chọn loại thiết bị"
                        suffixIcon={<AiFillCaretDown size={20} />}
                        value={newDevice.typeDevice}
                        onChange={(value: any) =>
                          setNewDevice({ ...newDevice, typeDevice: value })
                        }
                      >
                        <Select.Option value="Kiosk">Kiosk</Select.Option>
                        <Select.Option value="Display Counter">
                          Display Counter
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col span={12} className="create-device-form-item">
                  <span>
                    Tên thiết bị:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Tên thiết bị là trường thông tin bắt buộc",
                      },
                    ]}
                    name="deviceName"
                  >
                    <Input
                      className="form-item-input"
                      placeholder="Nhập tên thiết bị"
                      value={newDevice.deviceName}
                      onChange={(e) =>
                        setNewDevice({
                          ...newDevice,
                          deviceName: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="create-device-form-item">
                  <span>
                    Tên đăng nhập:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Tên thiết bị là trường thông tin bắt buộc",
                      },
                    ]}
                    name="taikhoan"
                  >
                    <Input
                      className="form-item-input"
                      placeholder="Nhập tài khoản"
                      value={newDevice.taikhoan}
                      onChange={(e) =>
                        setNewDevice({ ...newDevice, taikhoan: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="create-device-form-item">
                  <span>
                    Địa chỉ IP:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Địa chỉ là trường thông tin bắt buộc",
                      },
                    ]}
                    name="ipAddress"
                  >
                    <Input
                      className="form-item-input"
                      placeholder="Nhập địa chỉ IP"
                      value={newDevice.ipAddress}
                      onChange={(e) =>
                        setNewDevice({
                          ...newDevice,
                          ipAddress: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="create-device-form-item">
                  <span>
                    Mật khẩu:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Mật khẩu là trường thông tin bắt buộc",
                      },
                    ]}
                    name="matkhau"
                  >
                    <Input
                      className="form-item-input"
                      placeholder="Nhập mật khẩu"
                      value={newDevice.matkhau}
                      onChange={(e) =>
                        setNewDevice({ ...newDevice, matkhau: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={24}
                  className="create-device-form-item select-service-usage"
                >
                  <span>
                    Dịch vụ sử dụng:<span className="required">*</span>
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Dịch vụ sử dụng là trường thông tin bắt buộc",
                      },
                    ]}
                    name="service"
                  >
                    <Select
                      value={newDevice.service}
                      onChange={(value: string[]) =>
                        setNewDevice({ ...newDevice, service: value })
                      }
                      mode="multiple"
                      suffixIcon={<AiFillCaretDown size={20} color="#FF7506" />}
                    >
                      <Select.Option value="Tất cả">Tất cả</Select.Option>
                      <Select.Option value="Khám tim">Khám tim</Select.Option>
                      <Select.Option value="Khám răng hàm mặt">
                        Khám răng hàm mặt
                      </Select.Option>
                      <Select.Option value="Khám sản-Phụ khoa">
                        Khám sản-Phụ khoa
                      </Select.Option>
                      <Select.Option value="TKhám tai mũi họng">
                        Khám tai mũi họng
                      </Select.Option>
                      <Select.Option value="Khám hô hấp">
                        Khám hô hấp
                      </Select.Option>
                      <Select.Option value="Khám tổng quát">
                        Khám tổng quát
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  {/* <Input
                  className="form-item-input-service"
                  placeholder="Nhập dịch vụ sử dụng"
                /> */}
                </Col>
                <Col span={24} className="required">
                  <span>
                    <span className="required">*</span> Là trường thông tin bắt
                    buộc
                  </span>
                </Col>
              </Row>
            </div>
          </div>
          <Row justify="center" className="action-container">
            <Space size={"large"} className="action-form">
              <Form.Item>
                <Button
                  className="btn-cancel"
                  onClick={() => navigate("/device")}
                >
                  Huỷ bỏ
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  className="btn-add"
                  onClick={handleOnClickAddItemDevice}
                >
                  Thêm thiết bị
                </Button>
              </Form.Item>
            </Space>
          </Row>
        </Form>
      </div>
    </div>
  );
}

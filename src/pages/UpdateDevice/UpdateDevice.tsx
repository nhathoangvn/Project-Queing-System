import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, thietBiCreator } from "../../redux";
import { IDevice } from "../../types/TypeDevice";
import "./UpdateDevice.scss";
type MyParams = {
  deviceID: string;
};
export default function UpdateDevice() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { deviceID } = useParams<keyof MyParams>() as MyParams;
  const { updateItem, selectedItem } = bindActionCreators(
    thietBiCreator,
    dispatch
  );
  const { thietBiInfo } = useSelector((state: state) => state.thietbi);
  const [updateDevice, setUpdateDevice] = useState<IDevice>({
    idDevice: "",
    deviceName: "",
    ipAddress: "",
    service: [],
    statusConnection: true,
    statusWork: true,
    matkhau: "",
    taikhoan: "",
    typeDevice: "",
  });
  const handleOnClickUpdateDevice = () => {
    form
      .validateFields()
      .then(async () => {
        updateItem(deviceID, updateDevice);
        navigate("/device");
      })
      .catch();
  };
  useEffect(() => {
    selectedItem(deviceID);
  }, []);
  useEffect(() => {
    setUpdateDevice({
      deviceName: thietBiInfo.deviceName,
      idDevice: thietBiInfo.idDevice,
      ipAddress: thietBiInfo.ipAddress,
      service: thietBiInfo.service,
      statusConnection: thietBiInfo.statusConnection,
      statusWork: thietBiInfo.statusWork,
      matkhau: thietBiInfo.matkhau,
      taikhoan: thietBiInfo.taikhoan,
      typeDevice: thietBiInfo.typeDevice,
    });
    form.setFieldsValue({
      deviceName: thietBiInfo.deviceName,
      idDevice: thietBiInfo.idDevice,
      ipAddress: thietBiInfo.ipAddress,
      matkhau: thietBiInfo.matkhau,
      taikhoan: thietBiInfo.taikhoan,
    });
  }, [thietBiInfo]);
  console.log(thietBiInfo.service);

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
              <Form form={form} onFinish={handleOnClickUpdateDevice}>
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
                        <Form.Item
                          name="idDevice"
                          rules={[
                            {
                              required: true,
                              message:
                                "Mã thiết bị là trường thông tin bắt buộc",
                            },
                          ]}
                        >
                          <Input
                            value={updateDevice.idDevice}
                            onChange={(e) =>
                              setUpdateDevice({
                                ...updateDevice,
                                idDevice: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
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
                          value={{ value: `${updateDevice.typeDevice}` }}
                          size="large"
                          onChange={(value: any) =>
                            setUpdateDevice({
                              ...updateDevice,
                              typeDevice: value,
                            })
                          }
                        >
                          <Select.Option value="Kiosk">Kiosk</Select.Option>
                          <Select.Option value="Display Counter">
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
                        <Form.Item
                          name="deviceName"
                          rules={[
                            {
                              required: true,
                              message:
                                "Tên thiết bị là trường thông tin bắt buộc",
                            },
                          ]}
                        >
                          <Input
                            value={updateDevice.deviceName}
                            onChange={(e) =>
                              setUpdateDevice({
                                ...updateDevice,
                                deviceName: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
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
                        <Form.Item
                          name="taikhoan"
                          rules={[
                            {
                              required: true,
                              message: "Tài khoản là thường thông tin bắt buộc",
                            },
                          ]}
                        >
                          <Input
                            value={updateDevice.taikhoan}
                            onChange={(e) =>
                              setUpdateDevice({
                                ...updateDevice,
                                taikhoan: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
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
                        <Form.Item
                          name="ipAddress"
                          rules={[
                            {
                              required: true,
                              message:
                                "Địa chỉ IP là thường thông tin bắt buộc",
                            },
                          ]}
                        >
                          <Input
                            value={updateDevice.ipAddress}
                            onChange={(e) =>
                              setUpdateDevice({
                                ...updateDevice,
                                ipAddress: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
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
                        <Form.Item
                          name="matkhau"
                          rules={[
                            {
                              required: true,
                              message: "Mật khẩu là thường thông tin bắt buộc",
                            },
                          ]}
                        >
                          <Input
                            value={updateDevice.matkhau}
                            onChange={(e) =>
                              setUpdateDevice({
                                ...updateDevice,
                                matkhau: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
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
                        <Select
                          mode="multiple"
                          value={updateDevice.service}
                          onChange={(value: any) =>
                            setUpdateDevice({ ...updateDevice, service: value })
                          }
                        >
                          <Select.Option value="Tất cả">Tất cả</Select.Option>
                          <Select.Option value="Khám tim mạch">
                            Khám tim mạch
                          </Select.Option>
                          <Select.Option value="Khám sản-Phụ khoa">
                            Khám sản phụ khoa
                          </Select.Option>
                          <Select.Option value="Khám răng hàm mặt">
                            Khám răng hàm mặt
                          </Select.Option>
                          <Select.Option value="Khám tai mũi họng">
                            Khám tai mũi họng
                          </Select.Option>
                          <Select.Option value="Khám hô hấp">
                            Khám hô hấp
                          </Select.Option>
                          <Select.Option value="Khám tổng quát">
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
              </Form>
            </div>
            <Row justify="center" align="middle" className="action-container">
              <Space size="large">
                <Button
                  className="btn-cancel"
                  onClick={() => navigate("/device")}
                >
                  Huỷ bỏ
                </Button>
                <Button
                  className="btn-update"
                  onClick={handleOnClickUpdateDevice}
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

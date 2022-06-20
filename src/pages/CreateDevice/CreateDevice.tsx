import { Button, Col, Input, Row, Select, Space } from "antd";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { thietBiCreator } from "../../redux";
import { IDevice } from "../../types/TypeDevice";
import "./CreateDevice.scss";
export default function CreateDevice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(thietBiCreator, dispatch);
  const [newDevice, setNewDevice] = useState<IDevice>({
    deviceName: "",
    idDevice: "",
    ipAddress: "",
    service: ["Khám tim", "Khám sản-Phụ khoa", "Khám răng hàm mặt"],
    statusConnection: true,
    statusWork: true,
    matkhau: "",
    taikhoan: "",
    typeDevice: "",
  });
  const handleOnClickAddItemDevice = () => {
    addItem(newDevice);
    navigate("/device");
  };
  return (
    <div className="create-device">
      <div className="create-device-wrapper">
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
                  Mã thiết bị:<span>*</span>
                </span>
                <Input
                  className="form-item-input"
                  placeholder="Nhập mã thiết bị"
                  value={newDevice.idDevice}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, idDevice: e.target.value })
                  }
                />
              </Col>
              <Col span={12} className="create-device-form-item-select">
                <div className="select-label">
                  <span>
                    Loại thiết bị:<span>*</span>
                  </span>
                </div>
                <div className="select">
                  <Select
                    size="large"
                    placeholder="Chọn loại thiết bị"
                    suffixIcon={<AiFillCaretDown size={20} />}
                    value={newDevice.typeDevice}
                    onChange={(value: any) =>
                      setNewDevice({ ...newDevice, typeDevice: value })
                    }
                  >
                    <Select.Option value="kiosk">kiosk</Select.Option>
                    <Select.Option value="display-counter">
                      Display Counter
                    </Select.Option>
                  </Select>
                </div>
              </Col>
              <Col span={12} className="create-device-form-item">
                <span>
                  Tên thiết bị:<span>*</span>
                </span>
                <Input
                  className="form-item-input"
                  placeholder="Nhập tên thiết bị"
                  value={newDevice.deviceName}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, deviceName: e.target.value })
                  }
                />
              </Col>
              <Col span={12} className="create-device-form-item">
                <span>
                  Tên đăng nhập:<span>*</span>
                </span>
                <Input
                  className="form-item-input"
                  placeholder="Nhập tài khoản"
                  value={newDevice.taikhoan}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, taikhoan: e.target.value })
                  }
                />
              </Col>
              <Col span={12} className="create-device-form-item">
                <span>
                  Địa chỉ IP:<span>*</span>
                </span>
                <Input
                  className="form-item-input"
                  placeholder="Nhập địa chỉ IP"
                  value={newDevice.ipAddress}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, ipAddress: e.target.value })
                  }
                />
              </Col>
              <Col span={12} className="create-device-form-item">
                <span>
                  Mật khẩu:<span>*</span>
                </span>
                <Input
                  className="form-item-input"
                  placeholder="Nhập mật khẩu"
                  value={newDevice.matkhau}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, matkhau: e.target.value })
                  }
                />
              </Col>
              <Col span={24} className="create-device-form-item">
                <span>
                  Dịch vụ sử dụng:<span>*</span>
                </span>

                <Input
                  className="form-item-input-service"
                  placeholder="Nhập dịch vụ sử dụng"
                />
              </Col>
              <Col span={24} className="required">
                <span>
                  <span>*</span> Là trường thông tin bắt buộc
                </span>
              </Col>
            </Row>
          </div>
        </div>
        <Row justify="center" className="action-container">
          <Space size={"large"} className="action-form">
            <Button className="btn-cancel" onClick={() => navigate("/device")}>
              Huỷ bỏ
            </Button>
            <Button className="btn-add" onClick={handleOnClickAddItemDevice}>
              Thêm thiết bị
            </Button>
          </Space>
        </Row>
      </div>
    </div>
  );
}

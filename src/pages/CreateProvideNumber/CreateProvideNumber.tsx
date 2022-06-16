import { Button, Modal, Row, Select, Space } from "antd";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CreateProvideNumber.scss";
export default function CreateProvideNumber() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleOnClickShowModal = () => {
    setIsVisible(true);
  };
  const handleOnClickCloseModal = () => {
    setIsVisible(false);
  };
  return (
    <div className="create-provide-number">
      <div className="create-provide-number-wrapper">
        <div className="create-provide-number-container">
          <div className="create-provide-number-title">
            <span>Quản lý cấp số</span>
          </div>
          <div className="create-provide-number-content">
            <div className="create-provide-number-content-item">
              <div className="create-provide-number-content-title">
                <span>Cấp số mới</span>
              </div>
              <div className="create-provide-number-content-select">
                <div>
                  <div>
                    <span>Dịch vụ khách hàng lựa chọn</span>
                    <div className="select-option">
                      <Select
                        placeholder="Chọn dịch vụ"
                        suffixIcon={<AiFillCaretDown size={20} />}
                      >
                        <Select.Option value="khamtim">Khám tim</Select.Option>
                        <Select.Option value="khamsan">
                          Khám sản - Phụ khoa
                        </Select.Option>
                        <Select.Option value="khamrang">
                          Khám răng hàm mặt
                        </Select.Option>
                        <Select.Option value="khamtai">
                          Khám tai mũi họng
                        </Select.Option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-option">
                <div>
                  <Space size="large">
                    <Button
                      className="btn-cancel"
                      onClick={() => navigate("/provide-number")}
                    >
                      Huỷ bỏ
                    </Button>
                    <Button className="btn-in" onClick={handleOnClickShowModal}>
                      In số
                    </Button>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={{ borderRadius: "24px", top: 200 }}
        width={469}
        visible={isVisible}
        title={
          <React.Fragment>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderTopRightRadius: "24px",
              }}
            >
              <div className="text-top">
                <span>Số thứ tự được cấp</span>
              </div>
              <div className="text-center">
                <span>2001201</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p className="text-bottom">
                DV: Khám răng hàm mặt
                <span className="text-bold" style={{ fontWeight: "bold" }}>
                  (Tại quầy số 1)
                </span>
              </p>
            </div>
          </React.Fragment>
        }
        footer={null}
        onOk={handleOnClickCloseModal}
        onCancel={handleOnClickCloseModal}
      >
        <div
          className="content-inso"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span>Thời gian cấp: 09:30 11/10/2021</span>
          <span>Hạn sử dụng: 17:30 11/10/2021</span>
        </div>
      </Modal>
    </div>
  );
}

import { Button, Form, Modal, Select, Space } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { capSoCreator, dichVuCreator, state } from "../../redux";
import "./CreateProvideNumber.scss";

export default function CreateProvideNumber() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [service, setService] = useState<string>("");
  const dispatch = useDispatch();
  const { addItem, loadData } = bindActionCreators(capSoCreator, dispatch);
  const { loadDataService } = bindActionCreators(dichVuCreator, dispatch);
  const [number, setNumber] = useState<number>(0);
  const { capSoList } = useSelector((state: state) => state.capSo);
  const [form] = Form.useForm();
  useEffect(() => {
    loadDataService();
    loadData();
    const list = [];
    for (let i = 0; i < capSoList.length; i++) {
      list.push(capSoList[i].number);
    }
    setNumber(Math.max.apply(null, list));
  }, []);

  const handleOnClickShowModal = () => {
    form
      .validateFields()
      .then(() => {
        addItem({
          number: number + 1,
          fullname: "Nguyễn C",
          source: "Kiosk",
          status: "Đang chờ",
          createdAt: moment(Date.now()).format("HH:mm DD/MM/YYYY"),
          expiry: moment(Date.now()).add(7, "days").format("HH:mm DD/MM/YYYY"),
          serviceName: service,
        });
        setNumber(number + 1);
        setIsVisible(true);
      })
      .catch();
  };
  const handleOnChangeSelectService = (value: string) => {
    setService(value);
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
                    <Form form={form} onFinish={handleOnClickShowModal}>
                      <div className="select-option">
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng chọn dịch vụ",
                            },
                          ]}
                          name="serviceName"
                        >
                          <Select
                            placeholder="Chọn dịch vụ"
                            suffixIcon={<AiFillCaretDown size={20} />}
                            onChange={(value) =>
                              handleOnChangeSelectService(value)
                            }
                          >
                            <Select.Option value="Khám tim">
                              Khám tim
                            </Select.Option>
                            <Select.Option value="Khám sản-Phụ khoa">
                              Khám sản - Phụ khoa
                            </Select.Option>
                            <Select.Option value="Khám răng hàm mặt">
                              Khám răng hàm mặt
                            </Select.Option>
                            <Select.Option value="Khám tai mũi họng">
                              Khám tai mũi họng
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </Form>
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
                <span>{number}</span>
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
                DV: {service}
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
          <span>
            Thời gian cấp: {moment(Date.now()).format("HH:mm DD/MM/YYYY")}
          </span>
          <span>
            Hạn sử dụng:
            {moment(Date.now()).add(7, "days").format("HH:mm DD/MM/YYYY")}
          </span>
        </div>
      </Modal>
    </div>
  );
}

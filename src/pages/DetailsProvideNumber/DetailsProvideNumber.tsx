import { Badge, Col, Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { capSoCreator, state } from "../../redux";
import "./DetailsProvideNumber.scss";
type MyParams = {
  numberID: string;
};
export default function DetailsProvideNumber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { numberID } = useParams<keyof MyParams>() as MyParams;
  const { selectedItem } = bindActionCreators(capSoCreator, dispatch);
  const { capSoSelected } = useSelector((state: state) => state.capSo);
  useEffect(() => {
    selectedItem(numberID);
  }, [numberID]);
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
                    <span className="children">{capSoSelected.fullname}</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Nguồn cấp:</span>
                    <span className="children">{capSoSelected.source}</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Tên dịch vụ:</span>
                    <span className="children">
                      {capSoSelected.serviceName}
                    </span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Trạng thái:</span>
                    <span className="children">
                      <Badge color="blue" />
                      {capSoSelected.status}
                    </span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Số thứ tự:</span>
                    <span className="children">{capSoSelected.number}</span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Số điện thoại:</span>
                    <span className="children">0981169609</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Thời gian cấp:</span>
                    <span className="children">
                      {moment(capSoSelected.createdAt).format(
                        "HH:mm DD/MM/YYYY"
                      )}
                    </span>
                  </Col>
                  <Col className="content-form-item" offset={6} span={8}>
                    <span className="label">Địa chỉ Email:</span>
                    <span className="children">nguyendung@gmail.com</span>
                  </Col>
                  <Col className="content-form-item" span={6}>
                    <span className="label">Hạn sử dụng:</span>
                    <span className="children">
                      {moment(capSoSelected.expity).format("HH:mm DD/MM/YYYY")}
                    </span>
                  </Col>
                </Row>
              </div>
              <div
                className="details-provide-number-container-right"
                onClick={() => navigate("/provide-number")}
              >
                <Row justify="center" align="middle" className="right-content">
                  <Col span={24}>
                    <Row justify="center" align="middle">
                      <div className="around-icon">
                        <RiArrowGoBackFill
                          size={20}
                          style={{ fontWeight: "bolder", marginTop: "2px" }}
                          color="#fff"
                        />
                      </div>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <p>Quay lại</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

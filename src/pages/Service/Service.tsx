import { Badge, Col, DatePicker, Input, Row, Select, Table } from "antd";
import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dataService from "./dataService.json";
import "./Service.scss";
export default function Service() {
  const navigate = useNavigate();
  const columnService = [
    {
      title: "Mã dịch vụ",
      dataIndex: "id",
      key: "id",
      width: 150,
      render: (id: string) => <Row align="middle">{id}</Row>,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
      key: "serviceName",
      width: 224,
      render: (serviceName: string) => <Row align="middle">{serviceName}</Row>,
    },

    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      width: 230,
      render: (description: string) => <Row align="middle">{description}</Row>,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusWork",
      key: "statusWork",
      width: 253,
      render: (statusWork: boolean) => (
        <Row align="middle">
          {statusWork ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Badge color="#34CD26" style={{ marginRight: "4px" }} />
              Hoạt động
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Badge color="#EC3740" style={{ marginRight: "4px" }} />
              Ngưng hoạt động
            </div>
          )}
        </Row>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: 125,
      render: (id: string) => (
        <Row align="middle" justify="center">
          <span className="more" onClick={() => navigate("/service/details")}>
            Chi tiết
          </span>
        </Row>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: 125,
      render: (id: string) => (
        <Row align="middle" justify="center">
          <span className="more" onClick={() => navigate("/service/update")}>
            Cập nhật
          </span>
        </Row>
      ),
    },
  ];
  function itemPagination(current: any, type: any, orginalElement: any) {
    if (type === "prev") {
      return <AiFillCaretLeft color="#A9A9B0" />;
    } else if (type === "next") {
      return <AiFillCaretRight color="#A9A9B0" />;
    }
    return orginalElement;
  }
  return (
    <div className="service">
      <div className="service-wrapper">
        <div className="service-container">
          <div className="service-title">
            <span>Quản lý dịch vụ</span>
          </div>
          <div className="service-form">
            <div className="service-form-filter">
              <Row gutter={24}>
                <Col span={6}>
                  <div className="label">
                    <span>Trạng thái hoạt động</span>
                  </div>
                  <div className="select-option">
                    <Select defaultValue="tatCa">
                      <Select.Option value="tatCa">Tất cả</Select.Option>
                      <Select.Option value="hoatDong">Hoạt động</Select.Option>
                      <Select.Option value="ngungHoatDong">
                        Ngưng hoạt động
                      </Select.Option>
                    </Select>
                  </div>
                </Col>
                <Col span={7}>
                  <div className="label">
                    <span>Chọn thời gian</span>
                  </div>
                  <div className="select-option-date">
                    <DatePicker suffixIcon={<BiCalendar size={20} />} />
                    <div style={{ padding: "0 5px 0 5px" }}>
                      <AiFillCaretRight size={10} />
                    </div>
                    <DatePicker suffixIcon={<BiCalendar size={20} />} />
                  </div>
                </Col>
                <Col span={6} offset={2} style={{ paddingLeft: "46px" }}>
                  <div className="label">
                    <span>Từ khoá</span>
                  </div>
                  <Input
                    suffix={<BiSearch size={20} />}
                    className="form-item-input"
                  />
                </Col>
              </Row>
            </div>
            <div className="service-form-container">
              <div className="service-form-left">
                <Table
                  columns={columnService}
                  dataSource={dataService}
                  pagination={{ pageSize: 9, itemRender: itemPagination }}
                />
              </div>
              <div className="service-form-right">
                <Row
                  style={{ cursor: "pointer" }}
                  justify="center"
                  align="middle"
                  className="service-form-right-container"
                  onClick={() => navigate("/service/create")}
                >
                  <div className="icon">
                    <BsPlusSquareFill size={20} color="#ff9138" />
                  </div>
                  <div className="action-title">
                    <p>Thêm dịch vụ</p>
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

import { Badge, Col, DatePicker, Input, Row, Select, Table } from "antd";
import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./DetailsService.scss";
type typeStatus = "daThucHien" | "daHoanThanh" | "vang";
interface IDetailsService {
  number: string;
  status: typeStatus;
}
export default function DetailsService() {
  const navigate = useNavigate();
  const renderStatus = (status: typeStatus) => {
    switch (status) {
      case "daHoanThanh":
        return (
          <>
            <Badge color="#34CD26" />
            <span>Đã hoàn thành</span>
          </>
        );
      case "daThucHien":
        return (
          <>
            <Badge color="#5490EB" />
            <span>Đã thực hiện</span>
          </>
        );
      case "vang":
        return (
          <>
            <Badge color="#6C7585" />
            <span>Vắng</span>
          </>
        );
      default:
        return null;
    }
  };
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "number",
      width: 334,
      render: (number: string) => <Row align="middle">{number}</Row>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 334,
      render: (status: typeStatus) => (
        <Row align="middle">{renderStatus(status)}</Row>
      ),
    },
  ];
  const columnService: IDetailsService[] = [
    {
      number: "20010001",
      status: "daHoanThanh",
    },
    {
      number: "20010002",
      status: "vang",
    },
    {
      number: "20010003",
      status: "daThucHien",
    },
    {
      number: "20010004",
      status: "daHoanThanh",
    },
    {
      number: "20010005",
      status: "vang",
    },
    {
      number: "20010006",
      status: "daHoanThanh",
    },
    {
      number: "20010007",
      status: "daThucHien",
    },
    {
      number: "20010008",
      status: "daThucHien",
    },
    {
      number: "20010009",
      status: "daHoanThanh",
    },
    {
      number: "200100010",
      status: "daHoanThanh",
    },
    {
      number: "200100011",
      status: "daHoanThanh",
    },
    {
      number: "200100012",
      status: "daHoanThanh",
    },
    {
      number: "200100013",
      status: "daThucHien",
    },
    {
      number: "200100014",
      status: "vang",
    },
    {
      number: "200100015",
      status: "daHoanThanh",
    },
    {
      number: "200100016",
      status: "vang",
    },
    {
      number: "200100017",
      status: "daThucHien",
    },
    {
      number: "200100018",
      status: "daHoanThanh",
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
    <div className="details-service">
      <div className="details-service-wrapper">
        <div className="details-service-title">
          <span>Quản lý dịch vụ</span>
        </div>
        <div className="details-service-container">
          <div className="details-service-container-left">
            <div className="content-left">
              <div className="content-title">
                <span>Thông tin dịch vụ</span>
              </div>
              <Row className="content-form">
                <Col span={8} className="content-label">
                  <span>Mã dịch vụ:</span>
                </Col>
                <Col span={16} className="content-init">
                  <span>201</span>
                </Col>
                <Col span={8} className="content-label">
                  <span>Tên dịch vụ:</span>
                </Col>
                <Col span={16} className="content-init">
                  <span>Khám tim mạch</span>
                </Col>
                <Col span={8} className="content-label">
                  <span>Mô tả:</span>
                </Col>
                <Col span={16} className="content-init">
                  <span>Chuyên các bệnh lý vè tim</span>
                </Col>
              </Row>
            </div>
            <div className="content-left">
              <div className="content-title">
                <span>Quy tắc cấp số</span>
              </div>
              <Row className="content-form">
                <Col span={8} className="content-label">
                  <span>Quy tắc cấp số:</span>
                </Col>
                <Col span={16}>
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
                <Col
                  span={8}
                  className="content-label"
                  style={{ paddingTop: "12px" }}
                >
                  <span>Prefix:</span>
                </Col>
                <Col span={16} style={{ paddingTop: "12px" }}>
                  <Input
                    value="9999"
                    bordered
                    style={{
                      width: "61px",
                      height: "44px",
                      borderRadius: "8px",
                    }}
                  />
                </Col>
                <Col span={8} className="content-label">
                  <span>Reset mỗi ngày</span>
                </Col>
                <Col span={24} className="content-example">
                  <span>Ví dụ: 201-2001</span>
                </Col>
              </Row>
            </div>
          </div>
          <div className="details-service-container-center">
            <div className="details-service-filter">
              <Row gutter={24}>
                <Col span={6}>
                  <div className="form-filter-item">
                    <div className="label">
                      <span>Trạng thái</span>
                    </div>
                    <div className="select-option">
                      <Select
                        defaultValue="tatCa"
                        suffixIcon={<AiFillCaretDown size={20} />}
                      >
                        <Select.Option value="tatCa">Tất cả</Select.Option>
                        <Select.Option value="daHoanThanh">
                          Đã hoàn thành
                        </Select.Option>
                        <Select.Option value="daThucHien">
                          Đã thực hiện
                        </Select.Option>
                        <Select.Option value="vang">Vắng</Select.Option>
                      </Select>
                    </div>
                  </div>
                </Col>
                <Col span={10}>
                  <div className="form-filter-item">
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
                  </div>
                </Col>
                <Col span={8}>
                  <div className="form-filter-item">
                    <div className="label">
                      <span>Từ khoá</span>
                    </div>
                    <Input
                      suffix={<BiSearch size={20} />}
                      className="search-dex"
                      placeholder="Nhập từ khoá"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="table-service">
              <Table
                columns={columns}
                dataSource={columnService}
                pagination={{ pageSize: 8, itemRender: itemPagination }}
              />
            </div>
          </div>
          <div className="details-service-container-right">
            <div
              className="container-add"
              onClick={() => navigate("/service/update")}
            >
              <Row justify="center" align="middle" className="container-add">
                <Row justify="center" align="middle" className="around-icon">
                  <FaPen color="#ffffff" />
                </Row>
                <span>Cập nhật danh sách</span>
              </Row>
            </div>
            <div
              className="container-back"
              onClick={() => navigate("/service")}
            >
              <Row justify="center" align="middle" className="container-back">
                <Row justify="center" align="middle" className="around-icon">
                  <RiArrowGoBackFill color="#ffffff" />
                </Row>
                <span>Quay lại</span>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

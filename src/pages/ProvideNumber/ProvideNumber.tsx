import {
  Badge,
  Col,
  DatePicker,
  Dropdown,
  Input,
  Menu,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import data from "./dataProvideNumber.json";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import "./ProvideNumber.scss";
import { useNavigate } from "react-router-dom";
const Option = Select.Option;
export default function ProvideNumber() {
  const navigate = useNavigate();
  const columns = [
    {
      title: "STT",
      dataIndex: "number",
      width: 93,
      render: (number: string) => <Row align="middle">{number}</Row>,
    },
    {
      title: "Tên người dùng",
      dataIndex: "fullname",
      width: 162,
      render: (fullname: string) => <Row align="middle">{fullname}</Row>,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
      width: 171,
      render: (serviceName: string) => <Row align="middle">{serviceName}</Row>,
    },
    {
      title: "Thời gian cấp",
      dataIndex: "createdAt",
      width: 161,
      render: (createdAt: string) => <Row align="middle">{createdAt}</Row>,
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "hsd",
      width: 174,
      render: (hsd: string) => <Row align="middle">{hsd}</Row>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 147,
      render: (status: string) => (
        <Row align="middle">{statusRender(status)}</Row>
      ),
    },
    {
      title: "Nguồn cấp",
      dataIndex: "source",
      width: 120,
      render: (source: string) => <Row align="middle">{source}</Row>,
    },
    {
      title: "",
      dataIndex: "id",
      width: 78,
      render: (id: string) => (
        <Row
          className="more"
          align="middle"
          justify="center"
          onClick={() => navigate("/provide-number/details")}
        >
          Chi tiết
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
  function statusRender(status: string) {
    switch (status) {
      case "Đang chờ":
        return (
          <React.Fragment>
            <Badge color="#4277FF" />
            Đang chờ
          </React.Fragment>
        );
      case "Đã sử dụng":
        return (
          <React.Fragment>
            <Badge color="#7E7D88" />
            Đã sử dụng
          </React.Fragment>
        );
      case "Bỏ qua":
        return (
          <React.Fragment>
            <Badge color="#E73F3F" />
            Bỏ qua
          </React.Fragment>
        );
      default:
        return;
    }
  }
  return (
    <div className="provide-number">
      <div className="provide-number-wrapper">
        <div className="provide-number-container">
          <div className="provide-number-title">
            <span>Quản lý cấp số</span>
          </div>
          <div className="provide-number-container-filter">
            <Row gutter={[8, 16]}>
              <Col span={4} className="filter-item">
                <span>Tên dịch vụ</span>
                <div className="select-option">
                  <Select
                    defaultValue="tatca"
                    suffixIcon={<AiFillCaretDown size={20} />}
                    dropdownStyle={{
                      borderRadius: "8px",
                    }}
                  >
                    <Option value="tatca">Tất cả</Option>
                    <Option value="khamsan">Khám sản - Phụ khoa</Option>
                    <Option value="khamrang">Khám răng hàm mặt</Option>
                    <Option value="khamtai">Khám tai mũi họng</Option>
                  </Select>
                </div>
              </Col>
              <Col span={4} className="filter-item">
                <span>Tình trạng</span>
                <div className="select-option">
                  <Select
                    defaultValue="tatca"
                    suffixIcon={<AiFillCaretDown size={20} />}
                  >
                    <Option value="tatca">Tất cả</Option>
                    <Option value="khamsan">Đang chờ</Option>
                    <Option value="khamrang">Đã sử dụng</Option>
                    <Option value="khamtai">Bỏ qua</Option>
                  </Select>
                </div>
              </Col>
              <Col span={4} className="filter-item">
                <span>Nguồn cấp</span>
                <div className="select-option">
                  <Select
                    defaultValue="tatca"
                    suffixIcon={<AiFillCaretDown size={20} />}
                  >
                    <Option value="tatca">Tất cả</Option>
                    <Option value="khamsan">Kiosk</Option>
                    <Option value="khamrang">Hệ thống</Option>
                  </Select>
                </div>
              </Col>
              <Col span={7} className="filter-item">
                <span>Chọn thời gian</span>
                <div className="select-option-date">
                  <DatePicker suffixIcon={<BiCalendar size={20} />} />
                  <div style={{ padding: "0 5px 0 5px" }}>
                    <AiFillCaretRight size={10} />
                  </div>
                  <DatePicker suffixIcon={<BiCalendar size={20} />} />
                </div>
              </Col>
              <Col span={4} className="filter-item">
                <span>Từ khoá</span>
                <div>
                  <Input
                    placeholder="Nhập từ khoá "
                    className="input-search"
                    suffix={<BiSearch size={20} />}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="provide-number-table-container">
            <div className="table-content">
              <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 9, itemRender: itemPagination }}
              />
            </div>
            <div>
              <Row
                justify="center"
                align="middle"
                className="action-content"
                onClick={() => navigate("/provide-number/create")}
              >
                <BsFillPlusSquareFill
                  color="#ff7506"
                  size={20}
                  style={{ marginTop: "15px" }}
                />
                <p style={{ padding: "7px", textAlign: "center" }}>
                  Cấp số mới
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

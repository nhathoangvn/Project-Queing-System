import { Badge, Col, DatePicker, Input, Row, Select, Table } from "antd";
import moment from "moment";
import React, { ChangeEvent, useEffect } from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { capSoCreator } from "../../redux";
import { capSoRemainingSelector } from "../../redux/selectors/capSoSelector";
import "./ProvideNumber.scss";

const Option = Select.Option;
export default function ProvideNumber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loadData,
    filterBySearchText,
    filterByServiceName,
    filterByStatus,
    filterBySource,
  } = bindActionCreators(capSoCreator, dispatch);
  const capSoList = useSelector(capSoRemainingSelector);

  //Load data từ firebase
  useEffect(() => {
    loadData();
  }, []);

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
      render: (createdAt: any) => (
        <Row align="middle">{createdAt.toString()}</Row>
      ),
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "expiry",
      width: 174,
      render: (hsd: any) => <Row align="middle">{hsd.toString()}</Row>,
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
        <Row className="more" align="middle" justify="center">
          <Link className="more" to={`/provide-number/details/${id}`}>
            Chi tiết
          </Link>
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
                    suffixIcon={<AiFillCaretDown size={20} />}
                    dropdownStyle={{
                      borderRadius: "8px",
                    }}
                    defaultValue="tatCa"
                    onChange={(value) => filterByServiceName(value)}
                  >
                    <Option value="tatCa">Tất cả</Option>
                    <Option value="Khám sản-Phụ khoa">
                      Khám sản - Phụ khoa
                    </Option>
                    <Option value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
                    <Option value="Khám tai mũi họng">Khám tai mũi họng</Option>
                  </Select>
                </div>
              </Col>
              <Col span={4} className="filter-item">
                <span>Tình trạng</span>
                <div className="select-option">
                  <Select
                    defaultValue="tatCa"
                    onChange={(value) => filterByStatus(value)}
                    suffixIcon={<AiFillCaretDown size={20} />}
                  >
                    <Option value="tatCa">Tất cả</Option>
                    <Option value="Đang chờ">Đang chờ</Option>
                    <Option value="Đã sử dụng">Đã sử dụng</Option>
                    <Option value="Bỏ qua">Bỏ qua</Option>
                  </Select>
                </div>
              </Col>
              <Col span={4} className="filter-item">
                <span>Nguồn cấp</span>
                <div className="select-option">
                  <Select
                    defaultValue="tatCa"
                    suffixIcon={<AiFillCaretDown size={20} />}
                    onChange={(value) => filterBySource(value)}
                  >
                    <Option value="tatCa">Tất cả</Option>
                    <Option value="Kiosk">Kiosk</Option>
                    <Option value="Hệ thống">Hệ thống</Option>
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      filterBySearchText(e.target.value)
                    }
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
                dataSource={capSoList}
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

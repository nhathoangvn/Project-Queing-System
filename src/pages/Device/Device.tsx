import { Badge, Col, Input, Row, Select, Table } from "antd";
import React from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillPlusSquare,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dataThietBi from "./dataDevice.json";
import "./Device.scss";
export default function Device() {
  const navigate = useNavigate();
  const columnDevice = [
    {
      title: "Mã thiết bị",
      dataIndex: "id",
      key: "id",
      width: 120,
      render: (id: string) => <Row align="middle">{id}</Row>,
    },
    {
      title: "Tên thiết bị",
      dataIndex: "deviceName",
      key: "deviceName",
      width: 119,
      render: (deviceName: string) => <Row align="middle">{deviceName}</Row>,
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "ipAddress",
      key: "ipAddress",
      width: 138,
      render: (ipAddress: string) => <Row align="middle">{ipAddress}</Row>,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusWork",
      key: "statusWork",
      width: 200,
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
      title: "Trạng thái kết nối",
      dataIndex: "statusConection",
      key: "statusConection",
      width: 171,
      render: (statusConection: boolean) => (
        <Row align="middle">
          {statusConection ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Badge color="#34CD26" style={{ marginRight: "4px" }} />
              Kết nối
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Badge color="#EC3740" style={{ marginRight: "4px" }} />
              Mất kết nối
            </div>
          )}
        </Row>
      ),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "service",
      key: "service",
      width: 268,
      render: (service: string) => (
        <React.Fragment>
          <div className="usedService">
            <span className="ant-table-cell-content">{service}</span>
          </div>
          <div className="ant-table-cell-more">
            <div className="more">Xem thêm</div>
            <div className="ant-table-cell-dichvu">
              <p>{service}</p>
            </div>
          </div>
        </React.Fragment>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (id: string) => (
        <Row justify="center" align="middle">
          <span
            onClick={() => navigate("/device/details")}
            className="more"
            style={{ textDecoration: "underLine" }}
          >
            Chi tiết
          </span>
        </Row>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (id: string) => (
        <Row justify="center" align="middle">
          <span
            className="more"
            onClick={() => navigate("/device/update")}
            style={{ textDecoration: "underLine" }}
          >
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
    <div className="device-container">
      <div className="device-wrapper">
        <div className="title-list-device">Danh sách thiết bị</div>
        <div>
          <Row
            gutter={24}
            justify="center"
            align="middle"
            style={{
              width: "1112px",
              marginLeft: "12px",
            }}
          >
            <Col span={7}>
              <span>Trạng thái hoạt động</span>
              <Select
                size="large"
                defaultValue="tatCa"
                suffixIcon={<AiFillCaretDown size={20} />}
              >
                <Select.Option value="tatCa">Tất cả</Select.Option>
                <Select.Option value="hoatDong">Hoạt động</Select.Option>
                <Select.Option value="ngungHoatDong">
                  Ngưng hoạt động
                </Select.Option>
              </Select>
            </Col>
            <Col span={7}>
              <span>Trạng thái kết nối</span>
              <Select
                size="large"
                defaultValue="tatCa"
                suffixIcon={<AiFillCaretDown size={20} />}
              >
                <Select.Option value="tatCa">Tất cả</Select.Option>
                <Select.Option value="ketNoi">Kết nối</Select.Option>
                <Select.Option value="matKetNoi">Mất kết nối</Select.Option>
              </Select>
            </Col>
            <Col span={7} offset={3}>
              <span>Từ khoá</span>
              <Input
                placeholder="Nhập từ khoá"
                suffix={<BiSearch size={20} />}
                size="large"
              />
            </Col>
          </Row>
        </div>
        <div style={{ paddingLeft: "24px" }} className="thietBi__content-table">
          <Table
            style={{ height: "490px", width: "1112px" }}
            columns={columnDevice}
            dataSource={dataThietBi}
            pagination={{ pageSize: 9, itemRender: itemPagination }}
          />
        </div>
      </div>
      <Row
        justify="center"
        align="middle"
        className="device-add"
        onClick={() => navigate("/device/create")}
      >
        <BsFillPlusSquareFill
          style={{ paddingTop: "12px" }}
          color="#FF9138"
          size={28}
        />
        <div className="text">
          <p>Thêm thiết bị</p>
        </div>
      </Row>
    </div>
  );
}

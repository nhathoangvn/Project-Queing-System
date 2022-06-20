import { Badge, Col, Input, Row, Select, Table } from "antd";
import React, { useEffect } from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, thietBiCreator } from "../../redux";
import dataThietBi from "./dataDevice.json";
import "./Device.scss";
export default function Device() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadData } = bindActionCreators(thietBiCreator, dispatch);
  useEffect(() => {
    loadData();
  }, []);
  const { thietBiList } = useSelector((state: state) => state.thietbi);

  const columnDevice = [
    {
      title: "Mã thiết bị",
      dataIndex: "idDevice",
      width: 120,
      render: (id: string) => <Row align="middle">{id}</Row>,
    },
    {
      title: "Tên thiết bị",
      dataIndex: "deviceName",
      width: 119,
      render: (deviceName: string) => <Row align="middle">{deviceName}</Row>,
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "ipAddress",
      width: 138,
      render: (ipAddress: string) => <Row align="middle">{ipAddress}</Row>,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusWork",
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
      dataIndex: "statusConnection",
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
      width: 268,
      render: (service: string[]) => (
        <React.Fragment>
          <div className="usedService">
            <span className="ant-table-cell-content">
              {service.map((item: any) => {
                return item + ",";
              })}
            </span>
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
      width: 125,
      render: (id: string) => (
        <Row justify="center" align="middle">
          <Link
            to={`/device/details/${id}`}
            className="more"
            style={{ textDecoration: "underLine" }}
          >
            Chi tiết
          </Link>
        </Row>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      width: 125,
      render: (id: string) => (
        <Row justify="center" align="middle">
          <Link
            to={`/device/update/${id}`}
            className="more"
            onClick={() => navigate("/device/update")}
            style={{ textDecoration: "underLine" }}
          >
            Cập nhật
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
              <div className="label">
                <span>Trạng thái hoạt động</span>
              </div>
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
              <div className="label">
                <span>Trạng thái kết nối</span>
              </div>
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
            <Col span={7} offset={3} style={{ paddingLeft: "35px" }}>
              <div className="label">
                <span>Từ khoá</span>
              </div>
              <Input
                placeholder="Nhập từ khoá"
                suffix={<BiSearch size={20} />}
                size="large"
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{ marginLeft: "24px" }}
            className="thietBi__content-table"
          >
            <Table
              style={{ height: "490px", width: "1112px" }}
              columns={columnDevice}
              dataSource={thietBiList}
              pagination={{ pageSize: 9, itemRender: itemPagination }}
            />
          </div>
          <div
            className="service-form-right-container"
            style={{ marginLeft: "21px" }}
          >
            <Row
              style={{ cursor: "pointer" }}
              justify="center"
              align="middle"
              className="service-form-right-container"
              onClick={() => navigate("/device/create")}
            >
              <div className="icon">
                <BsPlusSquareFill size={20} color="#ff9138" />
              </div>
              <div className="action-title">
                <p>Thêm thiết bị</p>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

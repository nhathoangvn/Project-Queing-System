import { Input, Row, Table } from "antd";
import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import data from "./dataManageRole.json";
import "./ManageRole.scss";
export default function ManageRole() {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Tên vai trò",
      dataIndex: "role",
      width: 224,
      render: (role: string) => <Row align="middle">{role}</Row>,
    },
    {
      title: "Số người dùng",
      dataIndex: "quantity",
      width: 224,
      render: (quantity: number) => <Row align="middle">{quantity}</Row>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      width: 537,
      render: (description: string) => <Row align="middle">{description}</Row>,
    },
    {
      title: "",
      dataIndex: "role",
      width: 125,
      render: (role: string) => (
        <Row
          onClick={() => navigate("/manage-role/update")}
          align="middle"
          className="more"
        >
          Cập nhật
        </Row>
      ),
    },
  ];
  return (
    <div className="manage-role">
      <div className="mamage-role-wrapper">
        <div className="manage-role-container">
          <div className="manage-role-content-filter">
            <div className="manage-role-title">
              <span>Danh sách vai trò</span>
            </div>
            <div className="manage-role-filter">
              <span>Từ khoá</span>
              <div className="input-filter">
                <Input suffix={<BiSearch size={20} />} />
              </div>
            </div>
          </div>
          <div className="manage-role-content-table">
            <div className="manage-role-table">
              <Table dataSource={data} columns={columns} pagination={false} />
            </div>
            <div
              className="manage-role-action"
              onClick={() => navigate("/manage-role/create")}
            >
              <div className="action">
                <AiFillPlusSquare size={30} color="#FF9138" />
                <div style={{ width: "72px", textAlign: "center" }}>
                  <span>Thêm vai trò</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

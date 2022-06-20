import { DatePicker, Input, Row, Table } from "antd";
import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import data from "./DinaryUser.json";
import "./DinaryUser.scss";
export default function DinaryUser() {
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "usename",
      width: 266,
      render: (username: string) => <Row justify="center">{username}</Row>,
    },
    {
      title: "Thời gian tác động",
      dataIndex: "time",
      width: 240,
      render: (time: string) => <Row justify="center">{time}</Row>,
    },
    {
      title: "IP thực hiện",
      dataIndex: "ip",
      width: 216,
      render: (ip: string) => <Row justify="center">{ip}</Row>,
    },
    {
      title: "Thao tác thực hiện",
      dataIndex: "action",
      width: 386,
      render: (action: string) => <Row justify="center">{action}</Row>,
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
    <div className="dinary-user">
      <div className="dinary-user-wrapper">
        <div className="dinary-user-container">
          <div className="dinary-user-filter-form">
            <div>
              <span>Chọn thời gian</span>
              <div className="select-option-date">
                <DatePicker suffixIcon={<BiCalendar size={20} />} />
                <div style={{ padding: "0 5px 0 5px" }}>
                  <AiFillCaretRight size={10} />
                </div>
                <DatePicker suffixIcon={<BiCalendar size={20} />} />
              </div>
            </div>
            <div>
              <span>Từ khoá</span>
              <div>
                <Input
                  className="filter-input"
                  suffix={<BiSearch size={20} color="#FF7506" />}
                />
              </div>
            </div>
          </div>
          <div className="dinary-user-content-table">
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10, itemRender: itemPagination }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge, Col, DatePicker, Input, Row, Select, Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { db } from "../../config/firebase";
import { dichVuCreator, state } from "../../redux";
import "./DetailsService.scss";
type typeStatus = "Đã sử dụng" | "Đang chờ" | "Bỏ qua";
type MyParams = {
  serviceID: string;
};
export default function DetailsService() {
  const navigate = useNavigate();
  const [provideNumbers, setProvideNumbers] = useState<any>([]);
  const [filterOnchange, setFilterOnchange] = useState("tatCa");
  const [searchText, setSearchText] = useState("");
  const { serviceID } = useParams<keyof MyParams>() as MyParams;
  const dispatch = useDispatch();
  const { selectedItem } = bindActionCreators(dichVuCreator, dispatch);

  useEffect(() => {
    selectedItem(serviceID);
  }, [serviceID]);

  const { dichVuSelected } = useSelector((state: state) => state.dichvu);

  useEffect(() => {
    const getListNumber = async () => {
      const numberCollectionRef = collection(db, "capso");
      const docs = await getDocs(numberCollectionRef);
      const listNumber: any[] = docs.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProvideNumbers(
        listNumber
          .sort((a: any, b: any) => {
            if (a.number > b.number) return 1;
            if (a.number < b.number) return -1;
            return 0;
          })
          .filter(
            (item: any) =>
              item.serviceName === dichVuSelected.serviceName &&
              (filterOnchange !== "tatCa"
                ? item.status === filterOnchange
                : item.serviceName === dichVuSelected.serviceName) &&
              (searchText
                ? item.number?.toString()?.includes(searchText)
                : item.serviceName === dichVuSelected.serviceName)
          )
      );
    };
    getListNumber();
  }, [dichVuSelected, filterOnchange, searchText]);

  const renderStatus = (status: typeStatus) => {
    switch (status) {
      case "Đã sử dụng":
        return (
          <>
            <Badge color="#34CD26" />
            <span>Đã sử dụng</span>
          </>
        );
      case "Đang chờ":
        return (
          <>
            <Badge color="#5490EB" />
            <span>Đang chờ</span>
          </>
        );
      case "Bỏ qua":
        return (
          <>
            <Badge color="#6C7585" />
            <span>Bỏ qua</span>
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
                  <span>{dichVuSelected.idService}</span>
                </Col>
                <Col span={8} className="content-label">
                  <span>Tên dịch vụ:</span>
                </Col>
                <Col span={16} className="content-init">
                  <span>{dichVuSelected.serviceName}</span>
                </Col>
                <Col span={8} className="content-label">
                  <span>Mô tả:</span>
                </Col>
                <Col span={16} className="content-init">
                  <span>{dichVuSelected.description}</span>
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
                        onChange={(value) => setFilterOnchange(value)}
                      >
                        <Select.Option value="tatCa">Tất cả</Select.Option>
                        <Select.Option value="Đã sử dụng">
                          Đã sử dụng
                        </Select.Option>
                        <Select.Option value="Đang chờ">Đang chờ</Select.Option>
                        <Select.Option value="Bỏ qua">Bỏ qua</Select.Option>
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
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="table-service">
              <Table
                columns={columns}
                dataSource={provideNumbers}
                pagination={{ pageSize: 8, itemRender: itemPagination }}
              />
            </div>
          </div>
          <div className="details-service-container-right">
            <div
              className="container-add"
              onClick={() => navigate(`/service/update/${serviceID}`)}
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

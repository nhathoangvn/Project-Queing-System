import { Badge, Col, DatePicker, Input, Row, Select, Table } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BiCalendar, BiSearch } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { dichVuCreator } from "../../redux";
import {
  dichVuListSelector,
  dichVuRemainingSelector,
} from "../../redux/selectors/dichVuSelector";
import "./Service.scss";
export default function Service() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [statusWorks, setStatusWorks] = useState<any>("tatCa");
  const { loadData, filterOnChange, statusWork } = bindActionCreators(
    dichVuCreator,
    dispatch
  );
  const dichVuList = useSelector(dichVuRemainingSelector);
  useEffect(() => {
    loadData();
  }, [location.pathname]);
  const handleOnchangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    filterOnChange(e.target.value);
  };
  const handleOnChangeStatusWork = (value: any) => {
    setStatusWorks(value);
    statusWork(value);
  };
  const columnService = [
    {
      title: "Mã dịch vụ",
      dataIndex: "idService",
      width: 150,
      render: (id: string) => <Row align="middle">{id}</Row>,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
      width: 224,
      render: (serviceName: string) => <Row align="middle">{serviceName}</Row>,
    },

    {
      title: "Mô tả",
      dataIndex: "description",
      width: 230,
      render: (description: string) => <Row align="middle">{description}</Row>,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusWork",
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
      width: 125,
      render: (id: string) => (
        <Row align="middle" justify="center">
          <Link className="more" to={`/service/details/${id}`}>
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
        <Row align="middle" justify="center">
          <Link className="more" to={`/service/update/${id}`}>
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
                    <Select
                      defaultValue="tatCa"
                      onChange={(value) => handleOnChangeStatusWork(value)}
                    >
                      <Select.Option value="tatCa">Tất cả</Select.Option>
                      <Select.Option value={true}>Hoạt động</Select.Option>
                      <Select.Option value={false}>
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
                    value={searchText}
                    suffix={<BiSearch size={20} />}
                    className="form-item-input"
                    onChange={(e) => handleOnchangeSearchText(e)}
                  />
                </Col>
              </Row>
            </div>
            <div className="service-form-container">
              <div className="service-form-left">
                <Table
                  columns={columnService}
                  dataSource={dichVuList}
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

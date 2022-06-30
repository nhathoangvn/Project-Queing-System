import { RadialBar } from "@ant-design/plots";
import { Badge, Col, Row, Select, Typography } from "antd";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  AiFillCaretDown,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsBookmarkStar, BsCalendar, BsCalendarCheck } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { FiLayers } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiWechatLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import date from "./Dashboard-Date.json";
import week from "./Dashboard-Week.json";
import month from "./Dashboard-Month.json";
import CardView from "./components/CardView";
import "./Dashboard.scss";
import { useState } from "react";
export default function Dashboard() {
  const navigate = useNavigate();
  const [selectOnChange, setSelectOnChange] = useState("ngày");

  const thietBi: number = 4221;
  const thietBiHD: number = 3779;
  const thietBiNHD: number = 422;
  const dichVu = 276;
  const dichVuHD = 210;
  const dichVuNHD = 66;

  const capSo = 4221;
  const capSoDaSD = 3721;
  const capSoDangCho = 486;
  const capSoBoQua = 32;

  const maxAngleThietBi = (thietBiHD / thietBi) * 360;
  const ngungHD = (thietBiNHD / thietBi) * 360;
  const maxAngleThietBiPhanTram = (thietBiHD / thietBi) * 100;

  const maxAngleDichVu = (dichVuHD / dichVu) * 360;
  const ngungHDDichVu = (dichVuNHD / dichVu) * 360;
  const maxAngleDichVuPhanTram = (dichVuHD / dichVu) * 100;

  const maxAngleCapSo = (capSoDaSD / capSo) * 360;
  const dangChoCapSo = (capSoDangCho / capSo) * 360;
  const boQuaCapSo = (capSoBoQua / capSo) * 360;
  const maxAngleCapSoPhanTram = (capSoDaSD / capSo) * 100;
  const dataThietBi = [
    {
      name: "",
      star: ngungHD,
    },
    {
      name: "2",
      star: maxAngleThietBi,
    },
  ];
  const dataDichVu = [
    {
      name: "",
      star: ngungHDDichVu,
    },
    {
      name: "2",
      star: maxAngleDichVu,
    },
  ];
  const dataCapSo = [
    {
      name: "",
      star: boQuaCapSo + 20,
    },
    {
      name: "2",
      star: dangChoCapSo,
    },
    {
      name: "4",
      star: maxAngleCapSo,
    },
  ];
  const configDichVu: any = {
    data: dataDichVu,
    xField: "name",
    yField: "star",
    width: 60,
    height: 60,
    radius: 1,
    innerRadius: 0.75,
    maxAngle: maxAngleDichVu,
    tooltip: {
      showContent: false,
    },
    colorField: "star",
    color: ({ star }: any) => {
      if (star > dichVu / 2) {
        return "#4277FF";
      } else if (star < dichVu / 2) {
        return "#7E7D88";
      }

      return "#4277FF";
    },
    barBackground: {},
    barStyle: {
      cursor: "pointer",
      lineCap: "round",
    },
    annotations: [
      {
        type: "text",
        position: ["32%", "50%"],
        content: `${maxAngleDichVuPhanTram.toFixed(0)}%`,
      },
    ],
  };
  const configCapSo: any = {
    data: dataCapSo,
    xField: "name",
    yField: "star",
    width: 60,
    height: 60,
    radius: 1,
    innerRadius: 0.6,
    maxAngle: maxAngleCapSo,
    tooltip: {
      showContent: false,
    },
    colorField: "star",
    color: ({ star }: any) => {
      if (star > dichVu / 2) {
        return "#35C75A";
      } else if (star < dichVu / 2 && star > 30) {
        return "#7E7D88";
      } else if (star < 30) {
        return "#F178B6";
      }
      return "#35C75A";
    },
    barBackground: {},
    barStyle: {
      cursor: "pointer",
      lineCap: "round",
    },
    annotations: [
      {
        type: "text",
        position: ["32%", "50%"],
        content: `${maxAngleCapSoPhanTram.toFixed(0)}%`,
      },
    ],
  };
  const configThietbi: any = {
    data: dataThietBi,
    xField: "name",
    yField: "star",
    width: 60,
    height: 60,
    radius: 1,
    innerRadius: 0.75,
    maxAngle: maxAngleThietBi,
    tooltip: {
      showContent: false,
    },
    colorField: "star",
    color: ({ star }: any) => {
      if (star > 50) {
        return "#FF7506";
      } else if (star < 50) {
        return "#7E7D88";
      }
      return "#FF7506";
    },
    barBackground: {},
    barStyle: {
      cursor: "pointer",
      lineCap: "round",
    },
    type: "round",
    annotations: [
      {
        type: "text",
        position: ["32%", "50%"],
        content: `${maxAngleThietBiPhanTram.toFixed(0)}%`,
      },
    ],
  };
  const onChangeDataChart = (type: string) => {
    switch (type) {
      case "ngày": {
        return date;
      }
      case "tuần": {
        return week;
      }
      case "tháng": {
        return month;
      }
      default:
        return date;
    }
  };
  return (
    <div className="dashboard">
      <Row>
        <Col span={17} className="dashboard-card-view">
          <div className="dashboard-title">Biểu đồ cấp số</div>
          <Row gutter={24}>
            <CardView
              number="4.211"
              icon={<BsCalendar size={24} style={{ color: "#6695FB" }} />}
              backgroundAroundIcon={{ backgroundColor: "#a5bdf0" }}
              contentTitle="Số thứ tự đã cấp"
              iconArrow={<AiOutlineArrowUp />}
              percent="32,41 %"
              colorBadge={{
                backgroundColor: "#ffe3cc",
                color: "#ff9138",
                borderRadius: "8px",
              }}
              handleOnClick={(e) => navigate("/provide-number")}
            />
            <CardView
              number="3.721"
              icon={<BsCalendarCheck size={24} style={{ color: "#35C75A" }} />}
              backgroundAroundIcon={{ backgroundColor: "#ccffcc" }}
              contentTitle="Số thứ tự đã sử dụng"
              iconArrow={<AiOutlineArrowDown />}
              percent="32,41 %"
              colorBadge={{
                backgroundColor: "rgba(231, 63, 63, 0.15)",
                color: "#E73F3F",
                borderRadius: "8px",
              }}
              handleOnClick={(e) => navigate("/provide-number")}
            />
            <CardView
              number="468"
              icon={<CgUser size={24} style={{ color: "#ff7506" }} />}
              backgroundAroundIcon={{ backgroundColor: "#ffe3cc" }}
              contentTitle="Số thứ tự đang chờ"
              iconArrow={<AiOutlineArrowUp />}
              percent="56,41 %"
              colorBadge={{
                backgroundColor: "#ffe3cc",
                color: "#ff9138",
                borderRadius: "8px",
              }}
              handleOnClick={(e) => navigate("/provide-number")}
            />
            <CardView
              number="32"
              icon={<BsBookmarkStar size={24} style={{ color: "#E73F3F" }} />}
              backgroundAroundIcon={{
                backgroundColor: "rgba(231, 63, 63, 0.15)",
              }}
              contentTitle="Số thứ tự đã bỏ qua"
              iconArrow={<AiOutlineArrowDown />}
              percent="22,41 %"
              colorBadge={{
                backgroundColor: "rgba(231, 63, 63, 0.15)",
                color: "#E73F3F",
                borderRadius: "8px",
              }}
              handleOnClick={(e) => navigate("/provide-number")}
            />
          </Row>
          <Row className="dashboard-statistic">
            <Col span={24} className="dashboard-chart-wrapper">
              <Row>
                <Col className="dashboard-chart-content" span={12}>
                  <Typography className="title">
                    {`Bảng thống kê theo ${selectOnChange}`}
                  </Typography>
                  <Typography className="description">Tháng 11/2021</Typography>
                </Col>
                <Col span={12}>
                  <Row
                    align="middle"
                    justify="end"
                    className="dashboard-chart-filter"
                  >
                    <Typography className="label">Xem theo</Typography>
                    <Select
                      size="large"
                      value={selectOnChange}
                      onChange={(value) => setSelectOnChange(value)}
                      className="dashboard-chart-filter-select"
                      suffixIcon={<AiFillCaretDown size={20} />}
                    >
                      <Select.Option value="ngày">Ngày</Select.Option>
                      <Select.Option value="tuần">Tuần</Select.Option>
                      <Select.Option value="tháng">Tháng</Select.Option>
                    </Select>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <AreaChart
                width={800}
                height={345}
                data={onChangeDataChart(selectOnChange)}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5185F7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#5185F7"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
                <XAxis dataKey="timePeriod" />
                <YAxis min={0} max={10000} />
                <CartesianGrid strokeDasharray="3 3" />
              </AreaChart>
            </Col>
          </Row>
        </Col>
        <Col span={7}>
          <div className="dashboard-overview">
            <div className="title">Tổng quan</div>
            <Row justify="center" className="content__right-list">
              <div
                className="content__right-item"
                onClick={() => navigate("/device")}
              >
                <div className="item__left">
                  <RadialBar {...configThietbi} />
                  <div className="item__number">
                    <p>4.221</p>
                    <div className="item__text device">
                      <HiOutlineDesktopComputer />
                      <span>Thiết bị</span>
                    </div>
                  </div>
                </div>
                <div className="item__right">
                  <div className="item__right-list">
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="yellow" />
                        <span>Đang hoạt động</span>
                      </div>

                      <div className="item__right-number device">
                        <span>{thietBiHD}</span>
                      </div>
                    </div>
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="#7E7D88" />
                        <span>Ngưng hoạt động</span>
                      </div>
                      <div className="item__right-number device">
                        <span>{thietBiNHD}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content__right-item"
                onClick={() => navigate("/service")}
              >
                <div className="item__left">
                  <RadialBar {...configDichVu} />
                  <div className="item__number">
                    <p>276</p>
                    <div className="item__text service">
                      <RiWechatLine size={20} />
                      <span>Dịch vụ</span>
                    </div>
                  </div>
                </div>
                <div className="item__right">
                  <div className="item__right-list">
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="#4277FF" />
                        <span>Đang hoạt động</span>
                      </div>

                      <div className="item__right-number service">
                        <span>{dichVuHD}</span>
                      </div>
                    </div>
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="#7E7D88" />
                        <span>Ngưng hoạt động</span>
                      </div>
                      <div className="item__right-number service">
                        <span>{dichVuNHD}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content__right-item"
                onClick={() => navigate("/provide-number")}
              >
                <div className="item__left">
                  <RadialBar {...configCapSo} />
                  <div className="item__number">
                    <p>4.221</p>
                    <div className="item__text provide-number">
                      <FiLayers />
                      <span>Cấp số</span>
                    </div>
                  </div>
                </div>
                <div className="item__right">
                  <div className="item__right-list">
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="yellow" />
                        <span>Đã sử dụng</span>
                      </div>

                      <div className="item__right-number provide-number">
                        <span>{capSoDaSD}</span>
                      </div>
                    </div>
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="#7E7D88" />
                        <span>Đang chờ</span>
                      </div>
                      <div className="item__right-number provide-number">
                        <span>{capSoDangCho}</span>
                      </div>
                    </div>
                    <div className="item__right-item">
                      <div className="item__right-status">
                        <Badge color="#7E7D88" />
                        <span>Bỏ qua</span>
                      </div>
                      <div className="item__right-number provide-number">
                        <span>{capSoBoQua}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <Row justify="center" align="middle" className="calendar">
              <Calendar />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

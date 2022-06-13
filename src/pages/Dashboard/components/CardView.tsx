import { Badge, Col, Row } from "antd";
import { CSSProperties, ReactNode } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";

interface ICardViewProps {
  icon: ReactNode;
  colorBadge: CSSProperties;
  backgroundAroundIcon: CSSProperties;
  number: string;
  iconArrow: ReactNode;
  contentTitle: string;
  percent: string;
}
const CardView: React.FC<ICardViewProps> = ({
  icon,
  backgroundAroundIcon,
  number,
  iconArrow,
  contentTitle,
  colorBadge,
  percent,
}) => {
  return (
    <Col className="dashboard-card-view-item" span={5}>
      <div className="content">
        <Row
          align="middle"
          justify="center"
          style={backgroundAroundIcon}
          className="content-around-icon"
        >
          {icon}
        </Row>
        <Row align="middle" className="content-title">
          {contentTitle}
        </Row>
      </div>
      <div className="data">
        <div className="data-number">{number}</div>
        <div className="data-percent">
          <Badge
            style={colorBadge}
            count={
              <Row justify="center" className="data-percent">
                {iconArrow} {percent}
              </Row>
            }
          />
        </div>
      </div>
    </Col>
  );
};
export default CardView;

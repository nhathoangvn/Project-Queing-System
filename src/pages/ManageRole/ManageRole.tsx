import { Input, Row, Table } from "antd";
import { useEffect } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { vaiTroCreator } from "../../redux";
import { vaiTroRemainingSelector } from "../../redux/selectors/vaiTroSelector";
import "./ManageRole.scss";
export default function ManageRole() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadData, filterOnChange } = bindActionCreators(
    vaiTroCreator,
    dispatch
  );
  // const { vaiTroList } = useSelector((state: state) => state.vaitro);
  const vaiTroList = useSelector(vaiTroRemainingSelector);
  useEffect(() => {
    loadData();
  }, []);
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
      dataIndex: "id",
      width: 125,
      render: (id: string) => (
        <Row align="middle" className="more">
          <Link to={`/manage-role/update/${id}`}>Cập nhật</Link>
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
                <Input
                  onChange={(e) => filterOnChange(e.target.value)}
                  suffix={<BiSearch size={20} />}
                />
              </div>
            </div>
          </div>
          <div className="manage-role-content-table">
            <div className="manage-role-table">
              <Table
                dataSource={vaiTroList}
                columns={columns}
                pagination={false}
              />
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

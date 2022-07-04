import { Badge, Input, Row, Select, Table } from "antd";
import { ChangeEvent, useEffect } from "react";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillPlusSquare,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, taikhoanCreator } from "../../redux";
import { taiKhoanListRemainingSelector } from "../../redux/selectors/taiKhoanSelector";
import "./ManageAccount.scss";
export default function ManageAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadData, filterByRole, filterBySearchText } = bindActionCreators(
    taikhoanCreator,
    dispatch
  );
  useEffect(() => {
    loadData();
  }, []);
  let locale = {
    emptyText: "Không có dữ liệu",
  };
  // const { taiKhoanList } = useSelector((state: state) => state.taikhoan);
  const taiKhoanList = useSelector(taiKhoanListRemainingSelector);
  const handleOnChangeRole = (value: any) => {
    filterByRole(value);
  };
  const handleOnChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    filterBySearchText(e.target.value);
  };
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "tendangnhap",
      width: 150,
      render: (username: string) => <Row align="middle">{username}</Row>,
    },
    {
      title: "Họ tên",
      dataIndex: "hoten",
      width: 166,
      render: (fullname: string) => <Row align="middle">{fullname}</Row>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "sodienthoai",
      width: 150,
      render: (phonenumber: string) => <Row align="middle">{phonenumber}</Row>,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 166,
      render: (email: string) => <Row align="middle">{email}</Row>,
    },
    {
      title: "Vai trò",
      dataIndex: "vaitro",
      width: 150,
      render: (role: string) => <Row align="middle">{role}</Row>,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "hoatdong",
      width: 166,
      render: (status: boolean) => (
        <Row align="middle">
          {status ? (
            <div>
              <Badge color="#34CD26" />
              Hoạt động
            </div>
          ) : (
            <div>
              <Badge color="red" />
              Ngưng hoạt động
            </div>
          )}
        </Row>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      width: 150,
      render: (id: string) => (
        <Row align="middle" justify="center" className="more">
          <Link to={`/manage-account/update/${id}`}>Cập nhật</Link>
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
    <div className="manage-account">
      <div className="manage-account-wrapper">
        <div className="manage-account-container">
          <div className="manage-account-title">
            <span>Danh sách tài khoản</span>
          </div>
          <div className="manage-account-content-filter">
            <div className="filter-label">
              <span>Tên vai trò</span>
              <div className="filter-select">
                <Select
                  className="filter-select"
                  suffixIcon={<AiFillCaretDown size={20} />}
                  defaultValue="tatCa"
                  onChange={(value) => handleOnChangeRole(value)}
                >
                  <Select.Option value="tatCa">Tất cả</Select.Option>
                  <Select.Option value="Quản lý">Quản lý</Select.Option>
                  <Select.Option value="Kế toán">Kế toán</Select.Option>
                  <Select.Option value="Admin">Admin</Select.Option>
                </Select>
              </div>
            </div>
            <div className="filter-label">
              <span>Từ khoá</span>
              <div>
                <Input
                  onChange={(e) => handleOnChangeSearchText(e)}
                  className="filter-input"
                  suffix={<BiSearch color="#FF7506" size={20} />}
                />
              </div>
            </div>
          </div>
          <div className="manage-account-content-form">
            <div className="manage-account-content-form-table">
              <Table
                locale={locale}
                columns={columns}
                dataSource={taiKhoanList}
                pagination={{ pageSize: 9, itemRender: itemPagination }}
              />
            </div>
            <Row
              justify="center"
              align="middle"
              className="manage-account-content-form-action"
              onClick={() => navigate("/manage-account/create")}
            >
              <AiFillPlusSquare
                size={28}
                color="#FF9138"
                style={{ marginTop: "12px" }}
              />
              <p>Thêm tài khoản</p>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

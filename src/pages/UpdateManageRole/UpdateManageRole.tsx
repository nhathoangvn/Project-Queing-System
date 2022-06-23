import { Button, Checkbox, Input, Row, Space } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { state, vaiTroCreator } from "../../redux";
type MyParams = {
  roleID: string;
};
export default function UpdateManageRole() {
  const navigate = useNavigate();
  const { roleID } = useParams<keyof MyParams>() as MyParams;
  const dispatch = useDispatch();
  const { selectedItem, updateItem } = bindActionCreators(
    vaiTroCreator,
    dispatch
  );
  useEffect(() => {
    selectedItem(roleID);
  }, [roleID]);
  const { vaiTroSelected } = useSelector((state: state) => state.vaitro);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setRole(vaiTroSelected.role);
    setDescription(vaiTroSelected.description);
  }, [vaiTroSelected]);
  const handleOnChangeRole = (e: ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };
  const handleOnChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleOnClickUpdateRole = () => {
    updateItem(roleID, { role: role, description: description });
    navigate("/manage-role");
  };
  return (
    <div className="create-role">
      <div className="create-role-wrapper">
        <div className="create-role-container">
          <div className="create-role-title">
            <span>Danh sách vai trò</span>
          </div>
          <div className="create-role-content">
            <div className="create-role-content-title">
              <span>Thông tin vai trò</span>
            </div>
            <div className="create-role-content-form">
              <div className="create-role-content-form-left">
                <div className="create-role-content-form-item-left">
                  <span>
                    Tên vai trò<span style={{ color: "red" }}>*</span>
                  </span>
                  <div style={{ margin: "8px 0 8px 0" }}>
                    <Input
                      value={role}
                      placeholder="Nhập tên vai trò"
                      className="create-role-content-form-item-left-input"
                      onChange={(e) => handleOnChangeRole(e)}
                    />
                  </div>
                </div>
                <div className="create-role-content-form-item-left">
                  <span>
                    Tên vai trò:<span style={{ color: "red" }}>*</span>
                  </span>
                  <div style={{ margin: "8px 0 8px 0" }}>
                    <Input.TextArea
                      value={description}
                      placeholder="Nhập mô tả"
                      style={{ resize: "none" }}
                      className="create-role-content-form-item-left-input-area"
                      onChange={(e) => handleOnChangeDescription(e)}
                    />
                  </div>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#7E7D88",
                    }}
                  >
                    <span style={{ color: "red" }}>*</span> Là trường thông tin
                    bắt buộc
                  </span>
                </div>
              </div>
              <div className="create-role-content-form-right">
                <div className="create-role-content-form-right-title">
                  <span>Phân quyền chức năng:</span>
                </div>
                <div className="create-role-content-form-right-form">
                  <div style={{ padding: "16px 0 0 24px" }}>
                    <div className="create-role-content-form-right-title-item">
                      <span>Nhóm chức năng A</span>
                    </div>
                    <div className="create-role-content-form-item">
                      <div>
                        <Checkbox checked>Tất cả</Checkbox>
                      </div>
                      <div>
                        <Checkbox checked>Chức năng x</Checkbox>
                      </div>
                      <div>
                        <Checkbox checked>Chức năng y</Checkbox>
                      </div>
                      <div>
                        <Checkbox checked>Chức năng z</Checkbox>
                      </div>
                    </div>
                    <div className="create-role-content-form-right-title-item">
                      <span>Nhóm chức năng B</span>
                    </div>
                    <div className="create-role-content-form-item">
                      <div>
                        <Checkbox>Tất cả</Checkbox>
                      </div>
                      <div>
                        <Checkbox>Chức năng x</Checkbox>
                      </div>
                      <div>
                        <Checkbox>Chức năng y</Checkbox>
                      </div>
                      <div>
                        <Checkbox>Chức năng z</Checkbox>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row justify="center" align="middle" style={{ margin: "24px" }}>
            <Space size="large">
              <Button
                className="btn-cancel"
                onClick={() => navigate("/manage-role")}
              >
                Huỷ bỏ
              </Button>
              <Button className="btn-add" onClick={handleOnClickUpdateRole}>
                Cập nhật
              </Button>
            </Space>
          </Row>
        </div>
      </div>
    </div>
  );
}

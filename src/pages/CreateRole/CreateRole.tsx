import { Button, Checkbox, Input, Row, Space } from "antd";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { vaiTroCreator } from "../../redux";
import "./CreateRole.scss";
export default function CreateRole() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const { addItem } = bindActionCreators(vaiTroCreator, dispatch);
  const handleOnClickCreateRole = () => {
    addItem({
      role: role,
      description: description,
    });
    navigate("/manage-role");
  };
  const handleOnChangeRole = (e: ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };
  const handleOnChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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
                      onChange={(e) => handleOnChangeDescription(e)}
                      placeholder="Nhập mô tả"
                      style={{ resize: "none" }}
                      className="create-role-content-form-item-left-input-area"
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
              <Button className="btn-add" onClick={handleOnClickCreateRole}>
                Thêm
              </Button>
            </Space>
          </Row>
        </div>
      </div>
    </div>
  );
}

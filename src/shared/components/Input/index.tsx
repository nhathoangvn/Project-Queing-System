import { Input } from "antd";
import React, { CSSProperties, ReactNode } from "react";

interface InputProps {
  iconRender?: ReactNode;
  type?: InputType;
  styles?: CSSProperties;
  value: string;
  cName?: string;
  status?: Status;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type InputType = "password" | "number" | "radio" | "search";
type Status = "error" | "warning";
const CInput: React.FC<InputProps> = ({
  styles,
  value,
  cName,
  onChangeValue,
  type,
  iconRender,
  status,
}) => {
  const handleOnChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event);
  };

  return (
    <Input
      type={type}
      size="large"
      status={status}
      style={styles}
      className={cName}
      value={value}
      onChange={handleOnChangeValue}
      suffix={iconRender}
    />
  );
};
export default CInput;

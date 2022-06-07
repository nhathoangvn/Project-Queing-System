import { Input } from "antd";
import React, { CSSProperties } from "react";

interface InputProps {
  styles?: CSSProperties;
  value: string;
  cName?: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CInputPassword: React.FC<InputProps> = ({
  styles,
  value,
  cName,
  onChangeValue,
}) => {
  const handleOnChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event);
  };

  return (
    <Input.Password
      size="large"
      style={styles}
      className={cName}
      value={value}
      onChange={handleOnChangeValue}
    />
  );
};
export default CInputPassword;

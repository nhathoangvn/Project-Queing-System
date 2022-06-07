import { Button } from "antd";
import React, { CSSProperties, ReactNode } from "react";

type SizeType = "large" | "middle" | "small";

interface ButtonProps {
  styles?: CSSProperties;
  text: string;
  size?: SizeType;
  disable?: boolean;
  icon?: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cName?: string;
}

const CButton: React.FC<ButtonProps> = ({
  text,
  size,
  disable,
  icon,
  onClick,
  styles,
  cName,
}) => {
  return (
    <Button
      className={cName}
      style={styles}
      size={size}
      disabled={disable}
      icon={icon}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
    >
      {text}
    </Button>
  );
};
export default CButton;

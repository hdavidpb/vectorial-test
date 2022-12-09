import React from "react";
import { IconType } from "react-icons";

import "./styles.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: IconType;
  placeholder: string;
  type: "text" | "password" | "email" | "number";
  name: string;
  value: string;
}
const CustomInput = ({
  onChange,
  Icon,
  placeholder,
  type,
  name,
  value,
}: Props) => {
  return (
    <div className="input-icon-container">
      <Icon />
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;

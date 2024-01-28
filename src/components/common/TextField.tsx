import React from "react";

type Props = {
  label?: string;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  label,
  id,
  type,
  name,
  placeholder,
  value,
  required,
  onChange,
}: Props) {
  const alert = required && !value;

  const className = `shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
    alert && "border-red-700"
  }`;

  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label>{label}</label>}
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {alert && (
        <label className="text-orange-700">Please insert {label}</label>
      )}
    </div>
  );
}

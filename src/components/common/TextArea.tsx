import React from "react";

type Props = {
  label?: string;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  label,
  id,
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
      <textarea
        className={className}
        id={id}
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

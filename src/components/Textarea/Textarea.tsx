import React from "react";

interface TextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ name, placeholder, value, onChange, cols, rows }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
      className="bg-brand-secondary text-white rounded-md px-4 py-2 w-full outline-none"
    />
  );
};

export default Textarea;

interface InputProps {
  placeholder: string;
  value: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  name,
  type,
}) => {
  return (
    <input
      className="bg-brand-secondary font-Poppins text-white rounded-md px-4 py-2 w-full outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;

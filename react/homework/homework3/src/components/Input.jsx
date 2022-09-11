const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      className="w-full p-2 rounded-lg bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

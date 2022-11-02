const TextArea = ({
  type,
  name,
  id,
  value,
  onChange,
  text,
  placeholder,
  rows,
  requreed,
  error,
  cClassName,
  className,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {text && (
        <label htmlFor={id} className="text-sm text-neutral-300">
          {text}
        </label>
      )}
      <textarea
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={requreed}
        className={className}
      />
    </div>
  );
};

export default TextArea;

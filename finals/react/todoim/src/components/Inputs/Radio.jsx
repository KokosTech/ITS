const Radio = ({
  type,
  name,
  id,
  value,
  onChange,
  text,
  min,
  max,
  iText,
  requreed,
  error,
  cClassName,
  className,
}) => {
  return (
    <div className="w-full flex flex-col items-start space-y-1">
      <label htmlFor={id} className="text-neutral-400">
        {text}
      </label>
      <div className="w-full flex items-center justify-start space-x-2">
        {Array.from({ length: max - min + 1 }, (_, index) => (
          <label
            htmlFor={id + index}
            key={index}
            className={`px-3 py-3 text-neutral-400 flex items-center space-x-2 border border-slate-800 rounded-full ${
              value
                ? parseInt(value) === min + index
                  ? "bg-slate-800 border-slate-700 text-white"
                  : ""
                : index === min - 1
                ? "bg-slate-800 border-slate-700 text-white"
                : ""
            }`}
          >
            <input
              type={type}
              name={name}
              id={id + index}
              value={min + index}
              onChange={onChange}
              className={className}
              requreed={requreed}
              checked={
                value ? parseInt(value) === min + index : index === min - 1
              }
            />
            {console.log(value, min + index, value === min + index)}

            {iText[index]}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
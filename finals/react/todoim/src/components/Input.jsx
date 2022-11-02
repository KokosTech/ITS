const Input = ({
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
  className,
}) => {
  if (!className) {
    className = `p-2 rounded-xl
                  bg-slate-900 hover:bg-slate-800 focus:bg-slate-800 
                  border border-slate-800 hover:border-slate-700 focus:border-slate-700
                  focus:outline-none focus:ring-none`;
  }

  if (type === "textarea") {
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
  }

  return (
    <div className="flex flex-col space-y-1">
      {text && (
        <label className="text-neutral-400" htmlFor={id}>
          {text}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={requreed}
        className={className}
        border
        border-slate-800
      />
    </div>
  );
};

export default Input;

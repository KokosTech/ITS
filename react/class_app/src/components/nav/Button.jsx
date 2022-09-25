const Button = ({ name, handleClick, disabled }) => {
  return (
    <button
      onClick={handleClick}
      class="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;

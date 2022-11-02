const Button = ({ icon, text, onClick, className }) => {
  if (!className) {
    className = `flex items-center justify-center 
                bg-slate-900 hover:bg-slate-800 focus:bg-slate-800
                border border-slate-800 hover:border-slate-700 focus:border-slate-700
                focus:outline-none focus:ring-none
                rounded-xl
                ${icon === true && "h-10 w-10 aspect-square rounded-full"}`;
  }
  return (
    <button className={className} onClick={onClick}>
      {icon && <i className="material-icons">{icon}</i>}
      {text}
    </button>
  );
};

export default Button;

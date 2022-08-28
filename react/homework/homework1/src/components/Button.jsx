const Button = ({ text, onClick, isDisabled }) => (
    <button 
        onClick={onClick} 
        disabled={isDisabled}
    >
        {text}
    </button>
);

export default Button;
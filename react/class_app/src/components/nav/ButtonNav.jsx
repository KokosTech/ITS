import Button from "./Button";

const ButtonNav = ({ current, size, setPages, disabled }) => {
  const handlePrev = () => {
    if (current > 0) {
      setPages((prev) => {
        return {
          ...prev,
          current: prev.current - 1,
        };
      });
    }
  };

  const handleNext = () => {
    if (current < size - 1) {
      setPages((prev) => {
        return {
          ...prev,
          current: prev.current + 1,
        };
      });
    }
  };
  return (
    <div className="button-nav font-black pb-5">
      <Button 
        name="<" 
        handleClick={handlePrev} 
        disabled={!(current > 0) || disabled} 
      />

      {current + 1} / {size}
      
      <Button
        name=">"
        handleClick={handleNext}
        disabled={!(current < size - 1) || disabled}
      />
    </div>
  );
};

export default ButtonNav;

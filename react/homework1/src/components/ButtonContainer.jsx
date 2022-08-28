import { useState } from "react";

import Count from "./Count";
import Button from "./Button";

const ButtonContainer = () => {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const increment = () => {
        console.log("Increment");
        setCount(count => count + 1);
    }

    const decrement = () => {
        console.log("Decrement");
        setCount(count => count - 1);
    }

    const disableButtons = () => { setIsDisabled(!isDisabled); }

    return (
        <div>
            <Count count={count} />
            <Button text="+" onClick={increment} isDisabled={count >= 10 || isDisabled} />
            <Button text="-" onClick={decrement} isDisabled={count <= 0 || isDisabled} />
            <Button text={isDisabled ? "Activate" : "Deactivate"}  onClick={disableButtons} />
        </div>
    );
}

export default ButtonContainer;
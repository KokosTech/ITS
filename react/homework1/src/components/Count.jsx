import { useEffect } from "react";

const Count = ({ count }) => {
    useEffect(() => {
        console.log("Count changed: ", count);
    } , [count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Count;
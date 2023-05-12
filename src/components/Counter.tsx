import { useState } from "react";
import classes from "./Counter.module.scss";

export default function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev => prev + 1)
    };

    return (
        <div className={classes.btn}>
            <div>{count}</div>
            <button onClick={increment}>Нажми меня</button>
        </div>
    );
};
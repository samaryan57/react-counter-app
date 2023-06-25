
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index.js";

const App = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(actions.increment());
    };

    const decrement = () => {
        dispatch(actions.decrement());
    };

    const addByTen = () => {
        dispatch(actions.addByTen(20));
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addByTen}>Add By 10</button>
        </div>
    );
};

export default App;

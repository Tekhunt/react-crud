import React, { useContext } from "react";
import { useCounter } from "../Context/ContextApi";

export const Assemble = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment} class="ui inverted brown button">
        Add
      </button>
      <button onClick={decrement} class="ui inverted brown button">
        Sub
      </button>
      {/* <button onClick={increment}>Add</button>
     <button onClick={decrement}>Sub</button> */}
    </div>
  );
};

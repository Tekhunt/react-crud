import React, { useContext } from "react";
// import { CountContext } from "../Context/ContextApi";
import { useCounter } from "../Context/ContextApi";

export const Increment = () => {
const { increment } = useCounter();
  return (
    <div>
      {/* <button onClick={increment}>Add</button> */}
      <button onClick={increment} class="ui inverted brown button">
        Add
      </button>
    </div>
  );
};

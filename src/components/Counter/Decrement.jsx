import React, { useContext } from "react";
import { useCounter } from "../Context/ContextApi";
import styled from "styled-components";

export const BtnWrapper = styled.div`
  
  button.ui.inverted.brown.button {
  color: red;
  border: none;
}
`;

export const Decrement = () => {
  const { decrement } = useCounter();
  return (
    <div>
      {/* <button onClick={decrement}>Sub</button> */}
      <BtnWrapper>
        <button onClick={decrement} class="ui inverted brown button">
          Sub
        </button>
      </BtnWrapper>
    </div>
  );
};

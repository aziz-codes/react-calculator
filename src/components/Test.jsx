import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return {
        sum: action.num + action.num1,
      };
    case "-":
      return {
        sum: action.num - action.num1,
      };
    case "*":
      return {
        sum: action.num * action.num1,
      };
    case "/":
      return {
        sum: action.num / action.num1,
      };
    default:
      return state;
  }
};
const Test = () => {
  const [num1, setNum1] = useState(3);
  const [num, setNum] = useState(4);
  const [state, dispatch] = useReducer(reducer, { sum: 0 });
  return (
    <div className="my-20 mx-40 flex flex-col gap-4">
      <label>{state.sum}</label>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "+", num1, num });
        }}
      >
        +
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "-", num1, num });
        }}
      >
        -
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "*", num1, num });
        }}
      >
        *
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "/", num1, num });
        }}
      >
        /
      </button>
    </div>
  );
};

export default Test;

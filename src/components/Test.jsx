import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "+") {
    console.log(state.num1 + state.num2);
  }
};
const Test = () => {
  const [state, dispatch] = useReducer(reducer, { num1: 30, num2: 30 });
  return (
    <div className="my-20 mx-40 flex flex-col gap-4">
      {/* <label>{state.age}</label> */}
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "+" });
        }}
      >
        +
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "-" });
        }}
      >
        -
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "*" });
        }}
      >
        *
      </button>
      <button
        className="bg-sky-500 p-1 rounded-md"
        onClick={() => {
          dispatch({ type: "/" });
        }}
      >
        /
      </button>
    </div>
  );
};

export default Test;

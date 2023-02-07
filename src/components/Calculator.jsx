import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case action.type === "+":
      return num + 2;
    case action.type === "-":
      return num - 1;
    case action.type === "x":
      return num * 1;
    case action.type === "/":
      return num / 1;
    default:
      return state;
  }
};
const Calculator = () => {
  let initialValue = "";
  const [operator, dispatch] = useReducer(reducer, initialValue);
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const items = [
    "%",
    "C",
    "CE",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
  ];
  console.log(operator);
  const handleValue = (val) => {
    if (+val) {
      setNum(num);
    } else {
      dispatch({ type: val });
    }
  };

  return (
    <section className="flex justify-center my-20 w-full container">
      <div className="border shadow-md rounded-sm flex flex-col flex-wrap w-64 justify-center items-center pb-2">
        <label>{operator}</label>
        <div className="w-full px-1">
          <input
            type="text"
            defaultValue={0}
            className="outline-none font-semibold tracking-tight p-1 px-1 border w-full  mt-2"
          />
        </div>
        <div className="relative flex flex-row flex-wrap gap-2 mt-2 justify-center">
          {items.map((item) => (
            <button
              key={item}
              className="p-1 border w-14 h-10 rounded-md font-bold hover:ring-1"
              onClick={() => {
                handleValue(item);
              }}
            >
              {item}
            </button>
          ))}
          <button className="px-2 relative w-full rounded-sm border mx-2 hover:ring-1">
            ==
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

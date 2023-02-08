import React, { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");

  const items = [
    "%",
    "C",
    "CE",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
  ];
  const handleValue = (val) => {
    if (val === "C") {
      handleClear();
    } else if (val === "CE") {
      setText(text.slice(0, -1));
    } else setText(text.concat(val));
  };
  const handleClear = () => {
    setText("");
  };

  const claculateResult = () => {
    try {
      setText(eval(text).toString());
    } catch (err) {
      setText("Error");
    }
  };

  return (
    <section className="flex justify-center my-20 w-full container">
      <div className="border shadow-md rounded-sm flex flex-col flex-wrap w-64 justify-center items-center pb-2">
        <div className="w-full px-1">
          <input
            type="text"
            className="outline-none font-semibold tracking-tight p-1 px-1 border w-full  mt-2 text-right"
            readOnly
            value={text}
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
          <button
            className="px-2 relative w-full rounded-sm border mx-2 hover:ring-1"
            onClick={claculateResult}
          >
            ==
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

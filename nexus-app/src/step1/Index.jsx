import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";
import Division from "./Division";
import { useState } from "react";

let Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
          <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">
            Calculator App
          </h1>
          <div className="flex">
            <input
              type="number"
              className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md"
              placeholder="num1"
              onChange={(e) => setNum1(Number(e.target.value))}
            />
            <input
              type="number"
              className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md"
              placeholder="num2"
              onChange={(e) => setNum2(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2 m-2">
            <Addition num1={num1} num2={num2} />
            <Subtraction num1={num1} num2={num2} />
            <Multiplication num1={num1} num2={num2} />
            <Division num1={num1} num2={num2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

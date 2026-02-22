import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";
import Division from "./Division";

let Calculator = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
          <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">
            Calculator App
          </h1>
          <div className="flex">
            <input
              type="text"
              className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md"
              placeholder="num1"
            />
            <input
              type="text"
              className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md"
              placeholder="num2"
            />
          </div>
          <h1>Calculator </h1>
          <Addition />
          <Subtraction />
          <Multiplication />
          <Division />
        </div>
      </div>
    </>
  );
};

export default Calculator;

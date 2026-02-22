import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";
import Division from "./Division";

let Calculator = () => {
  return (
    <>
      <h1>Calculator </h1>
      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </>
  );
};

export default Calculator;

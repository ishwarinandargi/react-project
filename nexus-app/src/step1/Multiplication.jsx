import Button from "./Button";

let Multiplication = ({ num1, num2 }) => {
  function handleMultiplication() {
    if (!num1 || !num2) alert("Enter values here!!");
    console.log(num1 * num2);
    alert("The output is " + num1 * num2);
  }

  return <Button label={"Multiplication"} fn={handleMultiplication} />;
};

export default Multiplication;

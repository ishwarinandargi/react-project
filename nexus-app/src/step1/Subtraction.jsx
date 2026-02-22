import Button from "./Button";

let Subtraction = ({ num1, num2 }) => {
  function handleSubtraction() {
    if (!num1 || !num2) alert("Enter values here!!");
    console.log(Number(num1) - Number(num2));
    alert("The output is", Number(num1) - Number(num2));
  }

  return <Button label={"Subtraction"} fn={handleSubtraction} />;
};
export default Subtraction;

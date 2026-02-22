import Button from "./Button";

let Addition = ({ num1, num2 }) => {
  function handleAddition() {
    console.log(Number(num1) + Number(num2));
    alert("The output is", Number(num1) + Number(num2));
  }

  return <Button label={"Addition"} fn={handleAddition} />;
};
export default Addition;

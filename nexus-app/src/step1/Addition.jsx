import Button from "./Button";

let Addition = ({ num1, num2 }) => {
  function handleAddition() {
    if (!num1 || !num2) {
      alert("Enter values here!!");
      return;
    }
    console.log(Number(num1) + Number(num2));
    alert("The output is " + (num1 + num2));
  }

  return <Button label={"Addition"} fn={handleAddition} />;
};
export default Addition;

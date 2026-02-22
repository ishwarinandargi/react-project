import Button from "./Button";

let Division = ({ num1, num2 }) => {
  function handleDivision() {
    if (!num1 || !num2) alert("Enter values here!!");
    console.log(num1 / num2);
    alert("The output is " + num1 / num2);
  }

  return <Button label={"Division"} fn={handleDivision} />;
};

export default Division;

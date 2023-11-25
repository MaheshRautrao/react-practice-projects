import Button from "./Button";
const ColorMenu = ({ bgSetter }) => {
  const buttons = ["red", "blue", "green", "orange"];

  function buttonGenerator(button, ind) {
    return <Button key={ind} color={button} bgSetter={bgSetter} />;
  }
  return <div className="buttonContainer">{buttons.map(buttonGenerator)}</div>;
};

export default ColorMenu;

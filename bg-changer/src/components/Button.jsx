const Button = ({ color, bgSetter }) => {
  function clickHandler(event) {
    bgSetter(event.target.innerHTML);
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={(event) => clickHandler(event)}
    >
      {color}
    </button>
  );
};

export default Button;

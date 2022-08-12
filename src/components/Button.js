import "./Button.css";
const Button = ({ type }) => {
  return (
    <button className="button">
      {type === "buy" && <img src="/arrow.png" />}
      {type === "buy" && "Buy"}
      {type === "request" && "Request"}
      {type === "request" && (
        <img src="/arrow.png" style={{ transform: "rotate(-90deg)" }} />
      )}
    </button>
  );
};

export default Button;

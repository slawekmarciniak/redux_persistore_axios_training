import "./styles.css";

const Message = ({ type, message }) => {
  const color = (type) => {
    if (type === "info") {
      return "#2ecc71";
    } else if (type === "warning") {
      return "#f1c40f";
    } else if (type === "danger") {
      return "#e74c3c";
    }
  };

  return (
    <div className="messageContainer">
      <div style={{ backgroundColor: color(type) }}>{message}</div>
    </div>
  );
};

export default Message;

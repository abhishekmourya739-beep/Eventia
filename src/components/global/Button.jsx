const Btn = ({
  text = "Click",
  textColor = "#ffffff",
  bgColor,
  border = "2px solid transparent",
  bRadius = "8px",
  className,
  width,
}) => {
  return (
    <>
      <button
        className={`fw-bolder ${className}`}
        style={{
          border: border,
          background: bgColor,
          color: textColor,
          padding: "16px 28px",
          fontSize: "16px",
          borderRadius: bRadius,
          width,
        }}
      >
        {text}
      </button>
    </>
  );
};
export default Btn;

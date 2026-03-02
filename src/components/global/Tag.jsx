const Tag = ({
  text = "Some text here...",
  textColor = "#22d3ee",
  bgColor = "color-mix(in srgb,#22d3ee, transparent 85%)",
  border = "1px solid color-mix(in srgb, #22d3ee, transparent 70%)",
  letterSpace = "1.5px",
  fontSize = "14px",
  marginBottom = "24px",
  padding = "8px 20px",
  boxShadow = "none",
}) => {
  return (
    <>
      <button
        className=" rounded-pill text-uppercase fw-bolder"
        style={{
          border: border,
          color: textColor,
          fontSize: fontSize,
          letterSpacing: letterSpace,
          background: bgColor,
          marginBottom: marginBottom,
          padding: padding,
          boxShadow: boxShadow,
        }}
      >
        {text}
      </button>
    </>
  );
};
export default Tag;

const BtnWithIcon = ({
  className,
  text = "Add to Schedule",
  iconClass = "bi bi-calendar-plus",
  bgColor = "color-mix(in srgb, #22d3ee, transparent 90%)",
  border = "1px solid color-mix(in srgb, #22d3ee, transparent 70%)",
  padding = "12px 16px",
  textColor = "#22d3ee",
  fontSize = "13px",
  fontWeight = "500",
  iconFsize = "13px",
  iconColor = "#22d3ee",
  iconPaddingRight = "8px",
}) => {
  return (
    <>
      <button
        className={className}
        style={{
          background: bgColor,
          border: border,
          borderRadius: "12px",
          padding: padding,
          color: textColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
      >
        <i
          style={{
            fontSize: iconFsize,
            color: iconColor,
            paddingRight: iconPaddingRight,
          }}
          className={iconClass}
        ></i>
        {text}
      </button>
    </>
  );
};

export default BtnWithIcon;

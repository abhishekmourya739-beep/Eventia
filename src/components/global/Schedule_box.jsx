const Schedue_box = ({
  date = "date",
  day = "day",
  bgColor = "#1f283d",
  border = "2px solid color-mix(in srgb,#f5f5f5, transparent 85%)",
  textColor = "#f5f5f5",
}) => {
  return (
    <>
      <div
        className="schedule_box"
        style={{
          backgroundColor: bgColor,
          border: border,
        }}
      >
        <p style={{ color: textColor, margin: "0" }}>{date}</p>
        <p style={{ color: textColor, margin: "0" }}>{day}</p>
      </div>
    </>
  );
};

export default Schedue_box;

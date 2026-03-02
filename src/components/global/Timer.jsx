const Timer = ({ text1 = "00", text2 = "text" }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          background: "color-mix(in srgb, #22d3ee, transparent 92%)",
          borderRadius: "12px",
          padding: " 20px 8px",
        }}
        className="time_block"
      >
        <h3
          className="m-1 fw-bolder"
          style={{ color: "#22d3ee", fontSize: "35px" }}
        >
          {text1}
        </h3>
        <p>{text2}</p>
      </div>
    </>
  );
};

export default Timer;

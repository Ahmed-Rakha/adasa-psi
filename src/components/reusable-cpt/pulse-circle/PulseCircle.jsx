import classes from "./PulseCircle.module.css";
export default function PulseCircle(props) {
  // Dev need to pass size and bgColor props and text as children, circleNumbers
  const customStyle = {
    width: props.size || 15,
    height: props.size || 15,
    backgroundColor: props.bgColor || "oklch(70.5% 0.213 47.604)",
    borderRadius: "50%",
  };

  const numOfCircles = Array.from(
    { length: props.numOfCircles || 1 },
    (_, i) => i + 1,
  );
  return (
    <>
      <div className={classes["pulse-container"]}>
        {numOfCircles.map((num) => (
          <div
            key={num}
            className={`${classes["pulse-circle"]} ms-1`}
            style={{
              ...customStyle,
              width: `calc(${customStyle.width / num}px)`,
              height: `calc(${customStyle.height / num}px)`,
            }}
          ></div>
        ))}

        <p className="mb-0 me-2 text-sm text-main-color">{props.children}</p>
      </div>
    </>
  );
}

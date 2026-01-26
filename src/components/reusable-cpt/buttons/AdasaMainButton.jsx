import classes from "./AdasaMainButton.module.css";
export default function AdasaMainButton(props) {
  // console.log(props.markup.toString() === "Link");
  const Markup = props.markup || "button";
  const customStyle = {
    backgroundColor: props.bgColor || "#ed5c0e",
    color: props.color || "#fff",
    border: props.border || "none",
    padding: props.padding || "10px 20px",
    borderRadius: props.borderRadius || "5px",
    cursor: props.cursor || "pointer",
    fontSize: props.fontSize || "16px",
    fontWeight: props.fontWeight || "bold",
    transition: "all 0.3s ease-in-out",
  };
  return (
    <Markup
      {...(props.path ? { to: props.path } : null)}
      style={customStyle}
      className={`${classes.adasaMainButton} d-flex align-items-center gap-2 justify-content-center`}
    >
      {props.children}
    </Markup>
  );
}

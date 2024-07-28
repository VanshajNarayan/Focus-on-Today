import FocusField from "../FocusFieldFolder/FocusField";
import "./FocusBox.css";

function FocusBox() {
  return (
    <>
      <section className="focus_box">
        <h1 className="focus_title">
          Focus on <span className="today"> Today </span>{" "}
        </h1>
        <FocusField/>
      </section>
    </>
  );
}

export default FocusBox;

import { useState } from "react";
import "./Input.css";
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from "../ContextApi/ContextOne";

function Input({ data, length, inputArr }) {
  const [onOff, setOnOff] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function handleOnOff() {
    if (inputValue !== "") {
      setOnOff(true);
      dispatch({
        type: "Action_checkbox",
        payload: { data: data, length: length, inputArr: inputArr },
      });
    }
  }
  return (
    <>
      <form>
        <div className="form_field">
          {/* checkbox:- */}
          <div
            className={onOff ? "checkBox clicked_checkbox" : "checkBox"}
            onClick={handleOnOff}>
            <FaCheck className="click_sign" />
          </div>

          {/* input-field */}
          <input
            type="text"
            name="text"
            value={inputValue}
            autoComplete="off"
            placeholder="Add new goal..."
            className={onOff ? "text text_green" : "text"}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default Input;

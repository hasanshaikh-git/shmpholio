import React from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isChecked, setChecked] = useState(isDark);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={}
        onChange={() => {
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default Toggle;

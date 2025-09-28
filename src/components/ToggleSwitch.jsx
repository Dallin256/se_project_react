import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

import "../blocks/tempSwitch.css";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="tempSwitch">
      <label className="tempSwitch__style">
        <input
          onChange={handleToggleSwitchChange}
          className="tempSwitch__input"
          type="checkbox"
        ></input>
        <span
          className={`tempSwitch__circle ${
            currentTemperatureUnit === "F"
              ? "tempSwitch__circle_l"
              : "tempSwitch__circle_r"
          }`}
        ></span>
        <span className="tempSwitch__letter tempSwitch__letter_f">F</span>
        <span className="tempSwitch__letter tempSwitch__letter_c tempSwitch__letter_blk">
          C
        </span>
      </label>
    </div>
  );
}

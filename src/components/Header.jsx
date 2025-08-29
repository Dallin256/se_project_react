import "../blocks/Header.css";
import "../blocks/tempSwitch.css";
import profileLogo from "../assets/profileLogo.png";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({ currentLoc, openModal }) {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <header className="header">
      <div className="header__logo">wtwr°</div>
      <div className="header__dateLoc">
        {currentDate}, {currentLoc}
      </div>
      <div className="header__group">
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
        <button
          id="addItemButton"
          className="header__button"
          onClick={() => {
            openModal();
          }}
        >
          + Add Clothes
        </button>
        <div className="header__profile-name">Terrence Tegegne</div>
        <img
          className="header__profile-pic"
          src={profileLogo}
          alt="Profile Logo Image"
        />
      </div>
    </header>
  );
}

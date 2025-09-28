import "../blocks/Header.css";
import profileLogo from "../assets/profileLogo.png";

import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({ currentLoc, openModal }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <div className="header__logo">wtwr°</div>
      </Link>
      <div className="header__dateLoc">
        {currentDate}, {currentLoc}
      </div>
      <div className="header__group">
        <ToggleSwitch />
        <button
          id="addItemButton"
          className="header__button"
          onClick={() => {
            openModal();
          }}
        >
          + Add Clothes
        </button>

        <Link className="header__link" to="/profile">
          <div className="header__profile-name">Terrence Tegegne</div>
        </Link>

        <Link to="/profile">
          <img
            className="header__profile-pic"
            src={profileLogo}
            alt="Profile Logo Image"
          />
        </Link>
      </div>
    </header>
  );
}

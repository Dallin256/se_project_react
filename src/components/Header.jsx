import { Link } from "react-router-dom";

import "../blocks/Header.css";

import HeaderLogin from "./HeaderProfile";

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
      <HeaderLogin />
    </header>
  );
}

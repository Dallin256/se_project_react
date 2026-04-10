import { Link } from "react-router-dom";

import "../blocks/Header.css";

import HeaderButtons from "./HeaderButtons";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({
  currentLoc,
  openSignUpModal,
  openItemModal,
  openSignInModal,
}) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <div className="header__logo">wtwr°</div>
      </Link>
      <div className="header__dateLoc">
        {currentDate}, {currentLoc}
      </div>
      <HeaderButtons
        openSignUpModal={openSignUpModal}
        openItemModal={openItemModal}
        openSignInModal={openSignInModal}
      />
    </header>
  );
}

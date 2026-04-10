import { useContext } from "react";
import { Link } from "react-router-dom";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import ToggleSwitch from "./ToggleSwitch";

export default function HeaderButtons({
  openSignUpModal,
  openItemModal,
  openSignInModal,
}) {
  const { currentUser, isLoading } = useContext(CurrentUserContext);
  if (isLoading) {
    return (
      <div className="header__group">
        <ToggleSwitch />
        <p>LOADING</p>
      </div>
    );
  } else if (!currentUser) {
    return (
      <div className="header__group">
        <ToggleSwitch />
        <button
          id="signUpButton"
          className="header__button header__signUp"
          onClick={() => {
            openSignUpModal();
          }}
        >
          Sign Up
        </button>
        <button
          id="signInButton"
          className="header__button header__signIn"
          onClick={() => {
            openSignInModal();
          }}
        >
          Login
        </button>
      </div>
    );
  }
  return (
    <div className="header__group">
      <ToggleSwitch />
      <button
        id="addItemButton"
        className="header__button"
        onClick={() => {
          openItemModal();
        }}
      >
        + Add Clothes
      </button>

      <Link className="header__link" to="/profile">
        <p>{currentUser.name}</p>
      </Link>
      <Link to="/profile">
        <img
          className="header__profile-pic"
          src={currentUser.avatar}
          alt="Profile Logo Image"
        />
      </Link>
    </div>
  );
}

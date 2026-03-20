import { useContext } from "react";
import { Link } from "react-router-dom";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import ToggleSwitch from "./ToggleSwitch";

//import { profileLogo } from "..\assets\profileLogo.png";

export default function HeaderLogin() {
  const { handleSignIn, currentProfile } = useContext(CurrentUserContext);
  let signedIn = false;
  !currentProfile ? (signedIn = false) : (signedIn = true);
  if (signedIn === false) {
    return (
      <div className="header__group">
        <ToggleSwitch />
        <button
          id="signUpButton"
          className="header__button header__signUp"
          onClick={() => {
            console.log("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          id="signInButton"
          className="header__button header__signIn"
          onClick={() => {
            console.log("Sign In");
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
          openModal();
        }}
      >
        + Add Clothes
      </button>

      <Link className="header__link" to="/profile">
        <p>Terrence Tegegne</p>
      </Link>

      <Link to="/profile">
        <img
          className="header__profile-pic"
          //src={profileLogo}
          alt="Profile Logo Image"
        />
      </Link>
    </div>
  );
}

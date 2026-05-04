import useForm from "../hooks/useForm";
import { useRef } from "react";
import { openOther } from "../utils/globalFunctions";

export default function SignUpModal({
  altOpen,
  isOpen,
  closeAllModals,
  submitForm,
}) {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const registerNewUser = (e) => {
    e.preventDefault();
    const newUser = { _id: Date.now().toString(), ...values };
    submitForm(newUser).then(handleReset).catch(console.error);
  };
  const popupRef = useRef(null);
  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals(isOpen);
        }
      }}
      id="signUp"
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      ref={popupRef}
    >
      <div className="popup__block popup__block-signUp">
        <div className="popup__header">
          <p className="popup__title">Sign Up</p>
          <button
            onClick={() => {
              closeAllModals();
            }}
            className="popup__close-button"
          ></button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerNewUser(e).then(closeAllModals()).catch(console.error);
          }}
          className="popup__body"
        >
          <label className="popup__input-label">
            Email*
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>

          <label className="popup__input-label">
            Password*
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>

          <label className="popup__input-label">
            Name*
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>

          <label className="popup__input-label">
            Avatar URL*
            <input
              name="avatar"
              type="url"
              value={values.avatar}
              onChange={handleChange}
              placeholder="Avatar URL"
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>
          <div>
            <button type="submit" className="popup__submit">
              Sign Up
            </button>
            <button
              onClick={() => {
                openOther(altOpen, closeAllModals);
              }}
              className="popup__alternateButton"
            >
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

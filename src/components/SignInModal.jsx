import useForm from "../hooks/useForm";
import { useRef } from "react";
import { openOther } from "../utils/globalFunctions";

export default function SignInModal({
  altOpen,
  isOpen,
  closeAllModals,
  submitForm,
}) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const popupRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    const user = { ...values };
    submitForm(user);
  };
  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals(isOpen);
        }
      }}
      id="signIn"
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      ref={popupRef}
    >
      <div className="popup__block popup__block-signIn">
        <div className="popup__header">
          <p className="popup__title">Log In</p>
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
            signIn(e);
            closeAllModals();
          }}
          className="popup__body"
        >
          <label className="popup__input-label">
            Email
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>

          <label className="popup__input-label">
            Password
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="popup__input popup__input-text popup__inputSignUp"
              required
            ></input>
          </label>

          <div>
            <button type="submit" className="popup__submit">
              Log in
            </button>
            <button
              onClick={() => {
                openOther(altOpen, closeAllModals);
              }}
              className="popup__alternateButton"
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

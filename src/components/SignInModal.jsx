import useForm from "../hooks/useForm";
import { useRef, useEffect } from "react";
import { openOther } from "../utils/globalFunctions";
import ModalWithForm from "./ModalWithForm";

export default function SignInModal({
  altOpen,
  isOpen,
  closeAllModals,
  submitForm,
}) {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });
  const popupRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    const user = { ...values };
    submitForm(user);
  };
  const secondaryButton = (
    <button
      type="button"
      onClick={() => {
        openOther(altOpen, closeAllModals);
      }}
      className="popup__alternateButton"
    >
      or Sign Up
    </button>
  );

  useEffect(() => {
    if (isOpen) {
      handleReset(values.email, values.password);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeAllModals={closeAllModals}
      titleText={"Sign In"}
      buttonText={"Log In"}
      submitForm={signIn}
      popupClass={"popup__block popup__block-signIn"}
      secondaryButton={secondaryButton}
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
    </ModalWithForm>
  );
}

import useForm from "../hooks/useForm";
import { useRef } from "react";
import { openOther } from "../utils/globalFunctions";
import ModalWithForm from "./ModalWithForm";

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
  const secondaryButton = (
    <button
      onClick={() => {
        openOther(altOpen, closeAllModals);
      }}
      className="popup__alternateButton"
    >
      or Log In
    </button>
  );
  return (
    <ModalWithForm
      isOpen={isOpen}
      closeAllModals={closeAllModals}
      titleText={"Register"}
      buttonText={"Sign Up"}
      submitForm={registerNewUser}
      popupClass={"popup__block popup__block-signUp"}
      secondaryButton={secondaryButton}
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
    </ModalWithForm>
  );
}

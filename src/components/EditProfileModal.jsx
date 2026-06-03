import useForm from "../hooks/useForm";
import { useRef, useContext, useEffect } from "react";
import "../blocks/editProfile.css";
import "../blocks/popup.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";

export default function EditProfileModal({
  submitForm,
  isOpen,
  closeAllModals,
}) {
  const popupRef = useRef(null);
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, handleReset } = useForm({
    name: currentUser?.name || "",
    avatar: currentUser?.avatar || "",
  });

  useEffect(() => {
    if (isOpen) {
      handleReset(currentUser.name, currentUser.avatar);
    }
  }, [isOpen]);

  const handlePatchuser = (e) => {
    e.preventDefault();
    const patchedUser = { ...values };
    submitForm(patchedUser).then(handleReset).catch(console.error);
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      closeAllModals={closeAllModals}
      titleText={"Change Profile Data"}
      buttonText={"Save Changes"}
      submitForm={handlePatchuser}
      popupClass={"popup__block popup__block-signIn"}
    >
      <label className="popup__input-label">
        Name*
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="popup__input popup__input-text editProfile__input"
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
          className="popup__input popup__input-text editProfile__input"
          required
        ></input>
      </label>
    </ModalWithForm>
  );
}

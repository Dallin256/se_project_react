import useForm from "../hooks/useForm";
import { useRef } from "react";
import "../blocks/editProfile.css";
import "../blocks/popup.css";

export default function EditProfileModal({
  submitForm,
  isOpen,
  closeAllModals,
}) {
  const popupRef = useRef(null);
  const { values, handleChange, handleReset } = useForm({
    name: "",
    avatar: "",
  });

  const handlePatchuser = (e) => {
    e.preventDefault();
    const patchedUser = { ...values };
    submitForm(patchedUser).then(handleReset()).catch(console.error);
  };
  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals(isOpen);
        }
      }}
      id="edit profile"
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      ref={popupRef}
    >
      <div className="popup__block editProfile">
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
            handlePatchuser(e);
            closeAllModals();
          }}
          className="popup__body"
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
          <button type="submit" className="popup__submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

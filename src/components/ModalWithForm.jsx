import { useRef } from "react";
import "../blocks/popup.css";

export default function ModalWithForm({
  buttonText,
  titleText,
  isOpen,
  closeAllModals,
  children,
  submitForm,
}) {
  const popupRef = useRef(null);
  const popupInstance = useRef(null);

  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals(isOpen);
        }
      }}
      id="newGarmet"
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      ref={popupRef}
    >
      <div className="popup__block">
        <div className="popup__header">
          <p className="popup__title">{titleText}</p>
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
            submitForm(e);
            closeAllModals();
          }}
          className="popup__body"
        >
          {children}
          <button type="submit" className="popup__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

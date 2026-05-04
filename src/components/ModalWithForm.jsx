import { useRef } from "react";
import "../blocks/popup.css";

export default function ModalWithForm({
  buttonText,
  titleText,
  isOpen,
  closeAllModals,
  children,
  submitForm,
  secondaryButton,
}) {
  const popupRef = useRef(null);

  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals(isOpen);
        }
      }}
      id="newGarment"
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
            submitForm(e).then(closeAllModals()).catch(console.error());
          }}
          className="popup__body"
        >
          {children}
          <div>
            <button type="submit" className="popup__submit">
              {buttonText}
            </button>
            {secondaryButton}
          </div>
        </form>
      </div>
    </div>
  );
}

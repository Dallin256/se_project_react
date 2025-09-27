import { useRef } from "react";
import "../blocks/confirmDelete.css";
import "../blocks/popup.css";

export default function DeleteConfirmModal({
  isOpen,
  closeAllModals,
  deleteCancel,
  requestDelete,
  item,
}) {
  const popupRef = useRef(null);
  return (
    <div
      onClick={(e) => {
        if (e.target == popupRef.current) {
          closeAllModals();
        }
      }}
      id=""
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      ref={popupRef}
    >
      <div className="confirmDelete">
        <button
          onClick={() => {
            deleteCancel();
          }}
          className="popup__close-button popup__close-button-d"
        ></button>
        <div className="confirmDelete__message">
          Are you sure you want to delete this item? This action is
          irreversible.
        </div>
        <button
          onClick={() => {
            deleteCancel();
            requestDelete();
          }}
          className="confirmDelete__button confirmDelete__buttonConfirm"
        >
          Yes, delete item
        </button>

        <button
          onClick={() => {
            deleteCancel();
          }}
          className="confirmDelete__button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

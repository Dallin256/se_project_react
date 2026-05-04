import "../blocks/popup.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ItemModal({
  item,
  isOpen,
  closeAllModals,
  deleteConfirm,
}) {
  const currentUser = useContext(CurrentUserContext);
  const deleteButton = currentUser ? (
    <button
      onClick={() => {
        deleteConfirm(item);
      }}
      className="popup__itemCard-delete"
    >
      Delete Item
    </button>
  ) : null;
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      {item && (
        <div className="popup__itemCard popup__block">
          <button
            onClick={closeAllModals}
            className="popup__close-button popup__close-button_w"
          />
          <img
            src={item.imageUrl}
            className="popup__itemCard-image"
            alt={item.name}
          />
          <p className="popup__itemCard-title">{item.name}</p>
          <p className="popup__itemCard-feel">Weather: {item.weather}</p>
          {deleteButton}
        </div>
      )}
    </div>
  );
}

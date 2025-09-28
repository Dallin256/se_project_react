import "../blocks/popup.css";

export default function ItemModal({
  item,
  isOpen,
  closeAllModals,
  deleteConfirm,
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      {item && (
        <div className="popup__itemCard popup__block">
          <button
            onClick={closeAllModals}
            className="popup__close-button popup__close-button_w"
          />
          <img
            src={item.url}
            className="popup__itemCard-image"
            alt={item.name}
          />
          <p className="popup__itemCard-title">{item.name}</p>
          <p className="popup__itemCard-feel">Weather: {item.tempType}</p>
          <button
            onClick={() => {
              deleteConfirm(item);
            }}
            className="popup__itemCard-delete"
          >
            Delete Item
          </button>
        </div>
      )}
    </div>
  );
}

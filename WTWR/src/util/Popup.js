export default class Popup {
  constructor(popupSelector) {
    this._popupEl = popupSelector;
    this._popupCloseButton = this._popupEl.querySelector(
      ".popup__close-button"
    );
  }

  open() {
    this._popupEl.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupEl.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}

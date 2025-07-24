import "../blocks/ItemCard.css";
import "../blocks/popup.css";

export default function ItemCard({ item, closeAllModals }) {
  async function openPopup() {
    const itemCardPop = document.querySelector("#itemCardPop");
    itemCardPop.classList.add("popup_opened");
  }

  return (
    <>
      <div id={item.id} className="ItemCard">
        <img
          onClick={openPopup}
          className="ItemCard__img"
          alt="Clothing Item"
          src={item.url}
        ></img>
        <div className="ItemCard__title-box">
          <p className="ItemCard__title">{item.name}</p>
        </div>
      </div>
      {/* <div id="itemCardPop" className="popup">
        <div className="popup__itemCard">
          <button
            onClick={() => {
              closeAllModals();
            }}
            className="popup__close-button popup__close-button_w"
          ></button>
          <img src={item.url} className="popup__itemCard-image" />
          <p className="popup__itemCard-title">{item.name}</p>
          <p className="popup__itemCard-feel">Weather: {item.tempType}</p>
        </div>
      </div> */}
    </>
  );
}

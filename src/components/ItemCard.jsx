import "../blocks/ItemCard.css";

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
    </>
  );
}

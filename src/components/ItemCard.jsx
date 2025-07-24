import "../blocks/ItemCard.css";
import React from "react";

export default function ItemCard({ item, onClick }) {
  return (
    <div id={item.id} className="ItemCard" onClick={() => onClick(item)}>
      <img
        className="ItemCard__img"
        alt="Clothing Item"
        src={item.url}
      />
      <div className="ItemCard__title-box">
        <p className="ItemCard__title">{item.name}</p>
      </div>
    </div>
  );
}

import "../blocks/ItemCard.css";
import React from "react";

export default function ItemCard({ item, clickCard }) {
  return (
    <div
      _id={item._id}
      className="ItemCard"
      onClick={() => {
        clickCard(item);
      }}
    >
      <img className="ItemCard__img" alt={item.name} src={item.url} />
      <div className="ItemCard__title-box">
        <p className="ItemCard__title">{item.name}</p>
      </div>
    </div>
  );
}

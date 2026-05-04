import "../blocks/ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ItemCard({ item, clickCard, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const id = item._id;

  function handleLike() {
    onCardLike({ id, isLiked });
  }
  let isLiked = false;
  if (currentUser) {
    isLiked = item.likes.some((id) => id === currentUser._id);
  }
  const likeButton = currentUser ? (
    <button
      onClick={() => {
        handleLike();
      }}
      className={`itemCard__likeButton ${isLiked ? "itemCard__likeButton_liked" : ""}`}
    />
  ) : null;
  return (
    <div key={item._id} className="ItemCard">
      <img
        onClick={() => {
          clickCard(item);
        }}
        className="ItemCard__img"
        alt={item.name}
        src={item.imageUrl}
      />

      <div className="ItemCard__title-box">
        <p className="ItemCard__title">{item.name}</p>
        {likeButton}
      </div>
    </div>
  );
}

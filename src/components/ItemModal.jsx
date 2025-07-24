
import "../blocks/popup.css";

export default function ItemCard({ item, closeAllModals }) { <div id="itemCardPop" className="popup">
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
      </div>
      }
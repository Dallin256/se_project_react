import { useEffect, useRef } from "react";
import PopupWithForm from "../util/PopupWithForm";
import "../blocks/popup.css";

export default function ModalWithForm({isOpen, closeAllModals}) {
  const popupRef = useRef(null);
  const popupInstance = useRef(null);

  useEffect(() => {
    if (popupRef.current && !popupInstance.current) {
      console.log(popupRef.current)
      popupInstance.current = new PopupWithForm({
        popupSelector: document.querySelector("#newGarmet"),
        handleFormSubmit: (e)=>{
          e.preventDefault();
          console.log("form submitted");
        }      
      });
      popupInstance.current.setEventListeners();
    }
    
  }, []);

    return <div id="newGarmet" className={`popup ${isOpen?"popup_opened":""}`} ref={popupRef}>
        <div className="popup__block">
        <div className="popup__header">

        <p className="popup__title">New Garment</p>        
        <button onClick={()=>{closeAllModals()}} className="popup__close-button"></button>
        </div>

        <form className="popup__body">
        <label className="popup__input-label">Name<input  placeholder="Name"  className="popup__input popup__input-text"/></label>
        <label className="popup__input-label">Image<input placeholder="Image URL" className="popup__input popup__input-text"/></label>
        <label className="popup__input-label popup__input-label_list">

          <label className="popup__list-label">
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Blistering</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Hot</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Warm</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Chilly</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Cold</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Freezing</div></label> 
                    
        </label>
        <button className="popup__submit">Add garment</button>
        </form>

      </div>
    </div>
 
}
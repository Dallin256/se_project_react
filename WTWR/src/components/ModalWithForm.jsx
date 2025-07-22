
import PopupWithForm from "../util/PopupWithForm"
import "../blocks/popup.css"

export default function ModalWithForm(){

    return <div className="popup__background">
      <div className="popup">
        <div className="popup__header">

        <p className="popup__title">New Garment</p>        
        <button onClick={()=>{console.log("amogus")}} className="popup__close-button"></button>
        </div>

        <div className="popup__body">
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
            <span className="popup__list_custom"></span><div className="popup_label-name"> Cold</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Chilly</div></label>
          <label className="popup__list-label">
            
            <input name="temperature" type="radio" className="popup__list"/>
            <span className="popup__list_custom"></span><div className="popup_label-name"> Freezing</div></label>    
                    
        </label>
        <button className="popup__submit">Add garment</button>
        </div>

      </div>
    </div>
 
}
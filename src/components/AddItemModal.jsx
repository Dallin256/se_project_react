import useForm from "../hooks/useForm";
import ModalWithForm from "./ModalWithForm";

export default function AddItemModal({ isOpen, onAddItem, closeAllModals }) {
  const { values, handleChange, handleReset } = useForm({
    name: "",
    url: "",
    tempType: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    const newCard = { _id: Date.now().toString(), ...values };
    onAddItem(newCard);
    handleReset();
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      closeAllModals={closeAllModals}
      titleText={"New Garment"}
      buttonText={"Add Garment"}
      submitForm={submitForm}
    >
      <label className="popup__input-label">
        Name
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          className="popup__input popup__input-text"
          required
        />
      </label>
      <label className="popup__input-label">
        Image
        <input
          name="url"
          type="url"
          placeholder="Image URL"
          value={values.url}
          onChange={handleChange}
          className="popup__input popup__input-text"
          required
        />
      </label>
      <div className="popup__input-label popup__input-label_list">
        {["Blistering", "Hot", "Warm", "Chilly", "Cold", "Freezing"].map(
          (temp) => (
            <label key={temp} className="popup__list-label">
              <input
                name="tempType"
                type="radio"
                value={temp.toLowerCase()}
                checked={values.tempType === temp.toLowerCase()}
                onChange={handleChange}
                className="popup__list"
                required
              />
              <span className="popup__list_custom"></span>
              <div className="popup_label-name">{temp}</div>
            </label>
          )
        )}
      </div>
    </ModalWithForm>
  );
}

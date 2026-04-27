import useForm from "../hooks/useForm";
import ModalWithForm from "./ModalWithForm";

export default function AddItemModal({ isOpen, onAddItem, closeAllModals }) {
  const { values, handleChange, handleReset } = useForm({
    name: "",
    weather: "",
    imageUrl: "",
  });

  const addCard = (e) => {
    e.preventDefault();
    const newCard = { ...values };
    onAddItem(newCard).then(handleReset).catch(console.error);
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      closeAllModals={closeAllModals}
      titleText={"New Garment"}
      buttonText={"Add Garment"}
      submitForm={addCard}
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
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          className="popup__input popup__input-text"
          required
        />
      </label>
      <div className="popup__input-label popup__input-label_list">
        {["Hot", "Warm", "Cold"].map((temp) => (
          <label key={temp} className="popup__list-label">
            <input
              name="weather"
              type="radio"
              value={temp.toLowerCase()}
              checked={values.weather === temp.toLowerCase()}
              onChange={handleChange}
              className="popup__list"
              required
            />
            <span className="popup__list_custom"></span>
            <div className="popup_label-name">{temp}</div>
          </label>
        ))}
      </div>
    </ModalWithForm>
  );
}

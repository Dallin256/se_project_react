import "../blocks/editProfile.css";

export default function EditProfileModal({
  submitForm,
  isOpen,
  closeAllModals,
}) {
  return (
    <div
      onClick={() => {
        closeAllModals();
      }}
      className={`popup ${isOpen ? "popup_opened" : ""}`}
    >
      <div id="edit profile modal" className="editProfile"></div>
    </div>
  );
}

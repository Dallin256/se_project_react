import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile({
  currentCards,
  setCurrentCards,
  selectedItem,

  isAddClothesOpen,

  openItemModal,
  openAddClothesModal,
  openLogOutModal,
  openEditProfileModal,
  closeAllModals,

  handleAddItem,
  deleteFunction,
  onCardLike,
}) {
  return (
    <div className="Profile">
      <Sidebar
        openLogOutModal={openLogOutModal}
        openEditProfileModal={openEditProfileModal}
      />
      <ClothesSection
        currentCards={currentCards}
        setCurrentCards={setCurrentCards}
        openAddClothesModal={openAddClothesModal}
        closeAllModals={closeAllModals}
        handleAddItem={handleAddItem}
        deleteConfirm={deleteFunction}
        openItemModal={openItemModal}
        selectedItem={selectedItem}
        isAddClothesOpen={isAddClothesOpen}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;

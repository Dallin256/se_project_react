import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile({ deleteFunction }) {
  return (
    <div className="Profile">
      <Sidebar />
      <ClothesSection deleteConfirm={deleteFunction} />
    </div>
  );
}

export default Profile;

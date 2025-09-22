import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile() {
  return (
    <div className="Profile">
      <Sidebar />
      <ClothesSection />
    </div>
  );
}

export default Profile;

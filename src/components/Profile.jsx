import Sidebar from "./Sidebar";
import ProfileCards from "./ProfileCards";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile() {
  return (
    <div className="Profile">
      <Sidebar />
      <ProfileCards />
    </div>
  );
}

export default Profile;

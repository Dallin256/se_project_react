import profileLogo from "../assets/profileLogo.png";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          alt="Profile Logo Image"
          className="sidebar__profile-logo"
          src={profileLogo}
        />
        <p>Terrence Tegegne</p>
      </div>
    </div>
  );
}

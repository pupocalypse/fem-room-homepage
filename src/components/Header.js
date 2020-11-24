import menuIcon from "../assets/icons/icon-hamburger.svg";
// import exitIcon from "../assets/icons/icon-close.svg";
import roomLogo from "../assets/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <button className="header__menu-button">
        <img src={menuIcon} alt="" />
      </button>
      <img className="header__logo" src={roomLogo} alt="" />
    </header>
  );
}

export default Header;

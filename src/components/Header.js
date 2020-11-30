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
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-link">home</li>
          <li className="header__nav-link">shop</li>
          <li className="header__nav-link">about</li>
          <li className="header__nav-link">contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

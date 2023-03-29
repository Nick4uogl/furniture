import React, { useState } from "react";
import logo from "../../img/logo.png";
import phone from "../../img/icons/phone.svg";
import basket from "../../img/icons/basket.svg";
import "./Header.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => {
      return !isActive;
    });
  };

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActive]);

  const handleOverlay = () => {
    document.body.style.overflow = "visible";
    if (isActive) {
      setIsActive((isActive) => !isActive);
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <a href="/#" className="header__logo logo">
          <img src={logo} alt="" />
          <p className="logo__title">
            <span>Меблі</span> від дяді Жори
          </p>
        </a>
        <div className={isActive ? "menu-overlay" : ""} onClick={handleOverlay}>
          <ul className={`menu ${isActive ? "menu-active" : ""}`}>
            <li className="menu__item menu__item--active">
              <a href="/#">Головна</a>
            </li>
            <li className="menu__item">
              <a href="/#">Про нас</a>
            </li>
            <li className="menu__item">
              <a href="/#">Товари</a>
            </li>
          </ul>
        </div>
        <div className="header__actions">
          <a href="tel:+380960981783" className="header__phone">
            <img src={phone} alt="" />
            <p>+380960981783</p>
          </a>
          <a href="/#" className="header__basket">
            <img src={basket} alt="" />
          </a>
        </div>
        {!isActive ? (
          <div className="burger" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div className="burger-close" onClick={handleClick}>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

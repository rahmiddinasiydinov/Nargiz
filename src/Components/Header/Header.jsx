import { Link, NavLink } from "react-router-dom";
import './Header.scss';
import { ReactComponent as Search } from "../../Assets/SVG/search.svg";
import { ReactComponent as Phone } from "../../Assets/SVG/phone.svg";
function Header() {
    
    return (
      <header className="header">
        <div className="container">
          <form className="header__filter">
            <Link to="/" className="header__logo">
              nargiz
            </Link>
            <div className="header__form">
              <select className="header__select">
                <option value={"all"}>All categories</option>
              </select>
              <input
                type={"text"}
                className="header__input"
                placeholder="Search anything"
              />
              <button className="header__search">
                <Search />
              </button>
            </div>
            <a href="tel:+998 95 555 55 55" className="header__btn">
              <Phone className="phone" />
              <span>
                {" "}
                +998 95 555 55 55 <br /> Bepul konsultatsiya{" "}
              </span>
            </a>
          </form>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <NavLink className={'header__link'}  to="#">About company</NavLink>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'} to="/">Home page</NavLink>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'} to="#">Contacts</NavLink>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'} to="/products">All Production</NavLink>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'} to="#">Terms and Conditions</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};
export default Header;
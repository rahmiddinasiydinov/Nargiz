import { Link, NavLink } from "react-router-dom";
import './Header.scss';
import { ReactComponent as Search } from "../../Assets/SVG/search.svg";
import { ReactComponent as Phone } from "../../Assets/SVG/phone.svg";
// import {ReactComponent as Logo } from '../../Assets/Images/logo.svg';
function Header() {
  const search = (e) => {
    e.preventDefault();
    const { search } = e.target.elements;
    console.log(search.value);
    alert('Kechirasiz, Qidirish tizimi faol emas, noqulayliklar uchun uzr so\'raymiz');
    search.value=''
    }
    return (
      <header className="header">
        <div className="container">
          <form className="header__filter" onSubmit={search}>
            <Link to="/" className="header__logo">
            Nargiz
            </Link>
            <div className="header__form">
              <select className="header__select">
                <option value={"all"}>All categories</option>
              </select>
              <input
                type={"text"}
                className="header__input"
                placeholder="Search anything"
                name="search"
              />
              <button className="header__search">
                <Search />
              </button>
            </div>
            <a href="tel:+998 95 555 55 55" className="header__btn">
              <Phone className="phone" />
              <span>
                +998 95 555 55 55 
              </span>
            </a>
          </form>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a className={'header__link'}   href="#about">About company</a>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'}  to="/">Home page</NavLink>
              </li>
              <li className="header__item">
              <a  className={'header__link'}  href="#contact">Contacts</a>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'}  to="/products">All Production</NavLink>
              </li>
              <li className="header__item">
              <NavLink  className={'header__link'}  to="/terms">Terms and Conditions</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};
export default Header;
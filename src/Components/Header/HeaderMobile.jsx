import './Header.scss'
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Mobile() {
    const [open, setOpen] = useState(false)
    return (
      <header className="mobile">
            <div className={`menu ${open ? "menu__active" : ""}`} data-id='menu' onClick={(e) => {
            
                if (e.target.dataset.id === 'menu') setOpen(!open);
        }}>
          <ul className={`menu__list ${open?"menu__list--active":""}`} data-id='list'>
            <Hamburger className='menu__burger' toggled={open} toggle={setOpen} color="#fff" size={30}/>{" "}
            <li className="menu__logo">
              {" "}
              <Link to="/" className="menu__logo">
                nargiz
              </Link>
            </li>
            <li className="menu__item">
              <a href="#about" className="menu__link" onClick={()=>setOpen(!open)}> 
                About company
              </a>
            </li>
            <li className="menu__item">
              <NavLink to="/" className="menu__link" onClick={()=>setOpen(!open)}> 
                Home page
              </NavLink>
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link" onClick={()=>setOpen(!open)}> 
                Contact
              </a>
            </li>
            <li className="menu__item">
              <NavLink to="/products" className={"menu__link"}  onClick={()=>setOpen(!open)}>
                All production
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className={"menu__link"}  to="/terms" onClick={()=>setOpen(!open)}>
                Terms and Conditions
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="mobile__wrapper">
            {" "}
            <Link to="/" className="header__logo">
              NARGIZ
            </Link>
            <Hamburger className='menu__burger' toggled={open} toggle={setOpen} />{" "}
          </div>
        </div>
      </header>
    );
}
export default Mobile;
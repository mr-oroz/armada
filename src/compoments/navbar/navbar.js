import React from 'react';
import './navbar.scss';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar__logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className='navbar__menu'>
                        <ul>
                            <li><a href="">Услуги</a></li>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Портфолио</a></li>
                            <li><a href="">Производство</a></li>
                        </ul>
                        <div className="navbar__btn">
                            <button>Скачать прайс</button>
                        </div>
                    </nav>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;
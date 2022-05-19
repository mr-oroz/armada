import React from 'react';
import './header.scss';
const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <h2>Наша сила в вашем успехе !</h2>
                    <div className="header__contact">
                        <a className='header__text' href="">Нужна помощь? Свяжитесь с нашим экспретом</a>
                        <a className='header__number' href="">+996 (553) 993 342</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className='footer__about'>
                        <h3>О компании</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni praesentium at saepe modi, eius error ducimus neque explicabo ex deleniti quos eveniet possimus repellendus quibusdam. Recusandae molestias nemo numquam.</p>
                    </div>
                    <div className='footer__info'>
                        <h3>Информация </h3>
                        <a href="">Услуги</a>
                        <a href="">О нас</a>
                        <a href="">Контакты</a>
                        <a href="">Портфолио</a>
                        <a href="">Производство</a>
                    </div>
                    <div className='footer__contact'>
                        <h3>Контактная информация</h3>
                        <span>Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37</span>
                        <a href="">+996 (0553) 577-575</a>
                        <a href="">Email@gmail.com</a>
                    </div>
                    <div className='footer__social'>
                        <h3>Мы в социальных сетях </h3>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
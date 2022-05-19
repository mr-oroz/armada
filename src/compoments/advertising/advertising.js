import './advertising.scss';
import whats from '../../assets/img/whats.png'
import facebook from '../../assets/img/facebook.png'
import instagramm from '../../assets/img/instagram-sketched.png'

const Advertising = () => {
    return (
        <section className='advertising'>
            <div className="container">
                <div className="advertising__wrapper">
                    <div className='advertising__text'>
                        <h1>Наружная реклама <br/> в Бишкеке </h1>
                        <p>Произдводство наружной рекламы <br/>
                            и создание проектов под ключ</p>
                        <div className='btn'>Оставить заявку</div>
                    </div>
                    <div className='advertising__social'>
                        <img src={whats} alt="" />
                        <img src={instagramm} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertising;
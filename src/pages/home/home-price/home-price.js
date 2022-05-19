import './home-price.scss';
import { home_price } from '../../../data/data';

const HomePrice = () => {
    return (
        <div className='home-price'>
            <div className="container">
                <div className="home-price__wrapper">
                    {
                        home_price.map((elem, index) => (
                            <div key={index} className='home-price__card'>
                                <img src={elem} alt="" />
                                <p>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</p>
                                <span>1990 сом</span>
                            </div>
                        ))
                    }
                </div>
                <div className='home-price__btn'>
                    <a href="">Скачать прайс</a>
                </div>
            </div>
        </div>
    )
}

export default HomePrice;
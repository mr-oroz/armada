import './home-work.scss';
import { home_work } from '../../../data/data';

const HomeWork = () => {
    return (
        <div className='home-work'>
            <div className="container">
                <div className="home-work__wrapper">
                    {
                        home_work.map((elem, index) => {
                            return (
                                <div
                                    style={{
                                        backgroundImage: `url(${elem})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        margin: '40px 0',
                                        width: '368px',
                                        height: '300px',
                                        position: 'relative',
                                        zIndex: '1',
                                        cursor: 'pointer'
                                    }}
                                    key={index}>
                                    <div className='home-work__backround'></div>
                                    <span>Работа на Манаса</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home-work__btn">
                        <a href="">Все работы </a>
                    </div>
            </div>
        </div>
    )
}

export default HomeWork;
import './home-prodoction.scss';
import img1 from '../../../assets/img/prodoction1.png';
import img2 from '../../../assets/img/prodoction2.png';
import img3 from '../../../assets/img/prodoction3.png';

const HomeProdoction = () => {
    return (
        <div className='home-prodoction'>
            <div className="container">
                <div className="home-prodoction__wrapper">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeProdoction;
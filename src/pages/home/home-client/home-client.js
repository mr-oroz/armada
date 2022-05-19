import './home-client.scss';
import nike1 from '../../../assets/img/nike1.png';
import nike2 from '../../../assets/img/nike1.png';
import nike3 from '../../../assets/img/nike1.png';
import nike4 from '../../../assets/img/nike1.png';
import nike5 from '../../../assets/img/nike1.png';
import nike6 from '../../../assets/img/nike1.png';

const HomeClient = () => {
    return (
        <div className='home-client'>
            <div className="container">
                <div className="home-client__wrapper">
                    <img src={nike1} alt="" />
                    <img src={nike2} alt="" />
                    <img src={nike3} alt="" />
                    <img src={nike4} alt="" />
                    <img src={nike5} alt="" />
                    <img src={nike6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeClient;
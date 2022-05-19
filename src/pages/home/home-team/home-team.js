import './home-team.scss';
import team1 from '../../../assets/img/team1.png';
import team2 from '../../../assets/img/team2.png';
import team3 from '../../../assets/img/team3.png';

const HomeTeam = () => {

    return (
        <div className="home-team">
            <div className="container">
                <div className="home-team__wrapper">
                    <div className="home-team__item">
                        <img src={team1} alt="" />
                        <h2>Юля</h2>
                        <p>Соучредитель</p>
                    </div>
                    <div className="home-team__item">
                        <img src={team2} alt="" />
                        <h2>Анна</h2>
                        <p>Дизайнер</p>
                    </div>
                    <div className="home-team__item">
                        <img src={team3} alt="" />
                        <h2>Андрей</h2>
                        <p>Соучредитель</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTeam;
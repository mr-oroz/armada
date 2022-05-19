import Advertising from "../../compoments/advertising";
import Title from "../../compoments/title";
import HomeWork from "./home-work";
import HomeServices from "./home-services";
import HomeProdoction from "./home-prodoction";
import HomePrice from "./home-price";
import HomeClient from "./home-client";
import HomeTeam from "./home-team/home-team";
import Application from "../../compoments/application";
import { home_data } from '../../data/data';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Advertising />
            <Title width="300px" title="Наши услуги" />
            <HomeServices home_data={home_data} />
            <Title width="320px" title="Наши работы" />
            <HomeWork />
            <Title width="350px" title='Производство' />
            <HomeProdoction />
            <Title width='300px' title='Наш прайс' />
            <HomePrice />
            <Title width="350px" title='Наши клиенты' />
            <HomeClient />
            <Title width="360px" title='Наша команда' />
            <HomeTeam />
            <Application />
        </div>
    )
}

export default Home;
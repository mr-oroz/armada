import './home-services.scss';

const HomeServices = (props) => {
    return (
        <div className="home-services">
            <div className="container">
                <div className="home-services__wrapper">
                    {
                        props.home_data.map((elem, index) => (
                            <div className="home-services__card" key={index}>
                                <div className="home-services__images">
                                    <img src={elem.img} alt="" />
                                </div>
                                <div className="home-services__title-group">
                                    <h2>{elem.title}</h2>
                                    <p>{elem.desciption}</p>
                                </div>
                                <div className="home-services__phone">
                                    <a href="">{elem.phone}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeServices;
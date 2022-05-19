import './application.scss';

const Application = () => {
    return (
        <div className='application'>
            <div className="container">
                <div className="application__wrapper">
                    <div className="application__text">
                        <h2>Оставьте бесплатную заявку</h2>
                        <p>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
                    </div>
                    <div className="application__form">
                        <input value={''} placeholder='Ваше Имя' type="text" />
                        <input value={''} placeholder='Ваш телефон' type="text" />
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application;
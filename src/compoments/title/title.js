import './title.scss';

const Title = (props) => {
    return (
        <div className='title-text'>
            <div className="title-text__title">
                <h1
                    style={{ minWidth: props.width }}>
                    {props.title}
                </h1>
            </div>
        </div>
    )
}

export default Title;
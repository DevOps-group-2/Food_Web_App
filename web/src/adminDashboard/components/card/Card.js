import "../card/Card.css";

function Card(prop){
    return(
        <>
            <div className="DataValue">
                <span>{prop.title}</span>
                <span>{prop.value}</span>
                <span>{prop.description}</span>
            </div>
        </>
    )
}

export default Card;
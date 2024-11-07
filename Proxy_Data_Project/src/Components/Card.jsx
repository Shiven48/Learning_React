function Card(props) {
    return(
        <div className="cardContainer">
            <p className="cardName">{props.cardItem.name}</p>
            <p className="cardPrice">{props.cardItem.price}</p>
        </div>
        
    );
}

export default Card;
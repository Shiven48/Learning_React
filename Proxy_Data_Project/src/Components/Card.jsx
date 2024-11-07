function Card(props) {
    return(
    <div className="cardContainer">
        <div className="cardText">
            <div className="cardName">
                <button className="buttonName">{props.cardItem.name}</button>
            </div>
            <div className="cardPrice">
                <button className="buttonPrice">{props.cardItem.price}</button>
            </div>
        </div>
    </div> 
    );
}

export default Card;
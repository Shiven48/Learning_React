import propType from "prop-types"

function List(props,{id = 0, name = "product", price = 0}) {
    const listProducts = props.items;
    const Category = props.category;

    // Sorting the price in ascending order
    listProducts.sort((a,b) => a.price - b.price);

    const item = listProducts.map((item) => <li id={item.id} className="item">
                                                    {item.name}:&nbsp;
                                                    {item.price}
                                                </li>);
    
    return(
    <div className="container">  
        <h3 className="category">{Category}</h3>
        <ul className="itemContainer">
            {item}
        </ul>
    </div>
    );
}
List.propTypes = {
    category : propType.string,
    items : propType.arrayOf(
                    propType.shape({
                            id : propType.number,
                            name : propType.string,
                            price : propType.number
                    })
                    )
}
export default List;
import propType from "prop-types"
import Card from "./Card";

function List(props) {
    const { items: listProducts, category: Category } = props;

    // Sorting the price in ascending order
    listProducts.sort((a,b) => a.price - b.price);

    return(
        <>
            <h2 className="listCategory">{Category}</h2>
            {listProducts.map((item) => (
                <Card
                    cardItem={item} 
                />
            ))}
        </>
    );
}

// Setting defaultProps for List component
List.defaultProps = {
    category: "Category",
    items:[]
};

List.propType = {
    category: propType.string,
    items: propType.arrayOf(
        propType.shape({
            id: propType.number,
            name: propType.string,
            price: propType.number,
        })
    ).isRequired,
};

export default List;

function List() {
    // A proxy Data assuming it is fetched from database
    const Category = "Products";
    const listProducts = [
                            {id:1,productName:"Smartphone",price:5000},
                            {id:2,productName:"Table",price:2000},
                            {id:3,productName:"Chair",price:1000},
                            {id:4,productName:"Headset",price:1500},
                            {id:5,productName:"Laptop",price:60000}
                        ];

    const item = listProducts.map((product) => <li id={product.id}>
                                                    {product.productName}:&nbsp;
                                                    {product.price}
                                                </li>)

    return(
    <>  
        <h3>{Category}</h3>
        <ul>
            {item}
        </ul>
    </>
    );
}

export default List;
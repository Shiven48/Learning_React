import List from "./Components/List"

function App() {
  // A proxy Data assuming it is fetched from database
  const listProducts = [
                          {id:1,name:"Smartphone",price:5000},
                          {id:2,name:"Table",price:2000},
                          {id:3,name:"Chair",price:1000},
                          {id:4,name:"Headset",price:1500},
                          {id:5,name:"Laptop",price:60000}
                      ];

  const listFruits = [
                        {id:6,name:"Apple",price:50},
                        {id:7,name:"Mango",price:200},
                        {id:8,name:"Banana",price:20},
                        {id:9,name:"Grapes",price:40},
                        {id:10,name:"Oranges",price:40}
                    ];


  return (
    <>
      <List items={listProducts} category="Products"/>
      <List items={listFruits} category="Fruits"/>
    </>
  )
}

export default App

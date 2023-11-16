import './App.css'
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",).then((response)=> response.json()).then((data) => setProducts(data));
    console.log("useEffect ended");
  },[]);
const list = products.map((product) => <li key ={product.name}>{product.name}</li>);
  
return (
  <>
  Hello. 
  <div>
    <ul>{list}</ul>
  </div>
  </>
  );
}

export default App;

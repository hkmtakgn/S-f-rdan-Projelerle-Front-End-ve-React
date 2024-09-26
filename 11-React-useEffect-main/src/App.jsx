import { useEffect, useState } from "react";
import SecondExample from "./SecondExample";

const users = ["Hikmet", "User2", "User3"];

export default function App() {
  const [products,setProducts] = useState([]);
  const [showSecondExampleState,setShowSecondExampleState] = useState (false)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
    .then(res => res.json())
    .then(item => setProducts(item))
    .catch(err => console.error(err))
  },[])

  function handleShowSecondExample () {
    setShowSecondExampleState(prev => !prev)
   
  }
  
  return (
    <>
      <h1>React - useEffect</h1>
      <hr />
      <ul>{products?.map(item => <li key={item.id}><span>{item.id}</span> - <span>{item.title}</span></li>)}</ul>
      <hr />
      <p>{`useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
    .then(res => res.json())
    .then(item => setProducts(item))
    .catch(err => console.error(err))
  },[→→→ Parantez içi boş ise ilk render işlemi olduğunda bir kere çalıştır demektir. ←←←])
  Eğer useEffect kullanmasaydık sonsuz döngü ile sürekli fetch ile API 'den veri çekmeye devam edecekti.`}</p>
  <button onClick={handleShowSecondExample}>↓↓↓ get second example ↓↓↓</button>
  <hr />
  {showSecondExampleState ? <SecondExample /> : ""}
    </>
  );
}

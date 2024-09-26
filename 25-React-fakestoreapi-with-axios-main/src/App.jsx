import { useState } from "react";
import { fakeApiAxios } from "./axios/axiosApi";
import { useEffect } from "react";

function App() {
  const [apiData,setApiData] = useState([])
  const [catName,setCatName] = useState("electronics")
  
  useEffect(() => {
    fakeApiAxios.get(`/category/${catName}`)
    .then(res => setApiData(res.data))
    .catch(error => console.error(error));
  },[catName])
console.log(apiData)
  return (
    <>
      <h1>Axios</h1>
      <button onClick={() => setCatName("jewelery")} className="btn btn-info m-1">jewelery</button>
      <button onClick={() => setCatName("electronics")} className="btn btn-info m-1">electronics</button>
      <hr />
      {apiData.map(item => <h3 key={item.id}>{item.title}</h3>)}
      
    </>
  );
}

export default App;

import { useEffect, useState } from "react";


export default function fakeApi () {
const [fetchData,setFetchData] = useState ([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setFetchData(json))
            
},[])

return [fetchData]
    
}

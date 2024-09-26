import { useEffect } from "react"
import { useState } from "react"
const VITE_PRODUCT_API = import.meta.env.VITE_PRODUCT_API


function App() {

  const [productData, setProductData] = useState({})

  //sonsuz döngü olmaması için useEffect ile fetch işlemi yapıldı.
  //useEffect(fonksiyon,[durumu değiştikçe değişecek bilgi])
  //useEffect(() => {} , []) parantez boş bırakılarak site
  //yüklendiğinde sadece bir kez çalışması sağlandı.
  
  useEffect(() => {
    fetch(VITE_PRODUCT_API)
      .then(res => res.json())
      .then(product => setProductData(product))
  }, [])



  return (
    <>
      <h1>App</h1>
      <h2>{productData.title}</h2>
      <img src={productData.image} alt={productData.title} style={{ width: "300px" }} />
    </>
  )
}

export default App

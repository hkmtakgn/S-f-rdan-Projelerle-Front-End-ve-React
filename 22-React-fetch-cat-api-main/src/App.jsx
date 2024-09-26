import { useEffect } from "react"
import { useState } from "react"
import ImgCard from "./img/ImgCard"


function App() {
  const [breedsData,setBreedsData] = useState([])
  const [images,setImages] = useState ([])
  const [breedSelected,setBreedSelected] = useState(false)

    useEffect(() => {
      fetch("https://api.thecatapi.com/v1/breeds")
      .then(res => res.json())
      .then(resData => setBreedsData(resData))
    },[])


    const handleBreedClick = async (breedId) => {
      setBreedSelected(true)
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breedId}`)
        const responseData = await response.json()
        setImages(responseData)

      } catch (error) {
        console.error(error)
      }
    }
  
  
  return (
    <>
      {
      !breedSelected ? 
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {breedsData.map(item => <div onClick={() => handleBreedClick(item.id)} key={item.id}><h3>{item.name}</h3><ImgCard item={item} /></div>)}
      </div> 
      :
      <div>
        {images.map((image, index) => (
          <img style={{width:"200px", margin:"1px"}} key={index} src={image.url} alt={`Cat ${index + 1}`} />
        ))}
      </div>
    }
    </>
  )
}

export default App

import { useFakeStoreApiEndQuery, useSingleCategoryQuery, useSingleProductQuery } from "./store/fakestoreapi/fakeStoreApi"


function App() {
const query = useFakeStoreApiEndQuery()
const singleCategory = useSingleCategoryQuery()
const singleProduct = useSingleProductQuery()

  return (
    <>
      <h1>App</h1>
      <ul className="list-group">
        {query.data?.map((item,index) => <li key={index} className="list-group-item">{item}</li>)}
        <hr />
        {singleCategory.data?.map(item => <li key={item.id}>{item.title}</li>)}
        <hr />
        {singleProduct.data?.title}
        <img src={singleProduct.data?.image} alt={singleProduct.data?.title}  style={{width:"313px"}}/>
      </ul>
    </>
  )
}

export default App

import { v4 as uuidV4 } from "uuid"

function App() {

  const data = {
    users : {
      userInfo : [{id:uuidV4(),name:"Hikmet",eposta:"hikmetakgun@outlook.com"}]
    }
  }


  return (
    <>
      <h1>React - uuid</h1>
      <hr />
      
      {data?.users?.userInfo?.map(item => <li key={item.id}>
      <div>ID : {item.id}</div>
      <div>Name : {item.name}</div>
      <div>Mail Address : {item.eposta}</div>
      </li>
      )}
      
    </>
  )
}

export default App

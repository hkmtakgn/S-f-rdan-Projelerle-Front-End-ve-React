import { userData } from "./data/data"


function App() {


  return (
    <>
      <h1>Optional chain kontrolü</h1>
      <div>
        {
          userData.userName === "Hikmet" && userData.password === 122345 ? userData.users?.map((item,index) => <li key={index}>{item}</li>) : ""
        }
      </div>
      <p>
        {'users?.map((item,index) => <li key={index}>{item}</li>) : ""'}
        <br />
        {' →?←  ile kontrol et var ise map ile işlem yap demek '}
        <br />
        {'Böylece users ile ilgili bir sorun var ise hatadan kaçınılmış olur'}
      </p>
    </>
  )
}

export default App

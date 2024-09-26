

function App() {

  const google = import.meta.env.VITE_URL
  console.log(google)

  const user1 = JSON.parse(import.meta.env.VITE_USER1)
  
  console.log(user1)

  const user1Name = user1.name
  console.log(user1Name)

  const password = user1.password 
  console.log(password) //String görünür ancak bir sayısal değeri temsil eder.

  console.log(password + 1) //Bu nedenle ek bir dönüşüme gerek yoktur.

  const DB_NAME = import.meta.env.DB_NAME
  console.log(DB_NAME) 
  // Undefined dönecektir.
  //Bu yüzden env içinde tanımlarken,
  //Değişken başında büyük harf ile ve alt çizgi ile ayıracak
  //şekilde vite kullanıldığı için  VITE yazılmalı

  const VITE_OBJ_ARR = import.meta.env.VITE_OBJ_ARR
  console.log(VITE_OBJ_ARR)
  const VITE_OBJ_ARR_PARSE = JSON.parse(VITE_OBJ_ARR)
  VITE_OBJ_ARR_PARSE.users.map(item => console.log(item))

  const VITE_ARR_OBJ = import.meta.env.VITE_ARR_OBJ
  console.log(VITE_ARR_OBJ)
  const VITE_ARR_OBJ_PARSE = JSON.parse(VITE_ARR_OBJ)
  VITE_ARR_OBJ_PARSE.map(item => {
    console.log(item)
    console.log(item.name)
  })

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App

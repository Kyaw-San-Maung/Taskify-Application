
import './App.css'

interface UserInfo {
  name: string,
  age: number
}

interface App extends UserInfo{
  store: string 
}

type Dog = UserInfo & {
  dd: string | number
}

let kk: Dog = {
  dd: "kyaw San Maung",
  age: 22,
  name: "Toe Toe"
}

// let y: App = {
//   name: "Kyaw",
//   age: 24,
//   store: "Data is Storing"
// }

function App() {
  return (
    <>
      <h2>Hello World { }</h2>
    </>
  )
}

export default App

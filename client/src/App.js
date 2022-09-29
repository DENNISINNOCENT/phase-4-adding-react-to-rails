import React,{useEffect} from 'react'

function App() {
useEffect(()=>{
  fetch("/movies")
  .then((res)=>res.json())
  .then((movies)=>console.log(movies))
}

)

  return (
    <div>
      <h1>Hello from react,we are proud of you</h1>
    </div>
  )
}

export default App

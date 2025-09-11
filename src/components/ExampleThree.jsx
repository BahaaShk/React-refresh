import { useEffect, useState } from "react"

const ExampleThree = () => {
const [name, setName] = useState(() => {
  const savedName = localStorage.getItem('name');
  return savedName ?  JSON.parse(savedName) : "";
})

useEffect(() => {
localStorage.setItem('name', JSON.stringify(name))
}, [name])

const handleClear = () => {
  setName("")
}

const handleChange = (e) => {
setName(e.target.value)
}

  return (
    <div>
    <h1>Your name is : {name}</h1>
    <input className="border p-1 mt-2"  type="text" name="name" onChange={handleChange}/>
    <button className="border p-1 cursor-pointer" onClick={handleClear}>Clear</button>
    </div>
  )
}

export default ExampleThree
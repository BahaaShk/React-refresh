import { useState } from 'react'

const ToDoList = () => {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')

  const handleAdd = (e) => {
e.preventDefault()
if(input.trim() !== ""){
  setTodo([...todo, input]);
  setInput("")
}
  } 
  return (
    <>
    <form onSubmit={handleAdd}>
<input type="text" name="array" value={input} onChange={(e) => setInput(e.target.value)} placeholder='add a new todo' className='border p-2'/>
<button type='submit' className='border p-2 cursor-pointer'>Add to array</button>
    </form>
<ul>
    {
      todo.map((to,i) => (
  <li key={i}>{to}</li>
))
}
</ul>
    </>
  )
}

export default ToDoList
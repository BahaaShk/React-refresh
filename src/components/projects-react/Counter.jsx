import React from 'react'
import './style.css'
const Counter = () => {

  const [count,setCount] = React.useState(0);

  const increment = () => {setCount(prev => prev + 1)}
  const decrement = () => {
    if(count <= 0){
      setCount(0)
    } else {
      setCount(prev => prev - 1)
    }
  }
  return (
    <div className='container'>
      <div>
      <h1 className='number text-center'>{count}</h1>
      </div>
      <div className="btns-container">
        <div onClick={increment} className="increment">+</div>
        <div onClick={decrement} className="increment">-</div>
      </div>
    </div>
  )
}

export default Counter
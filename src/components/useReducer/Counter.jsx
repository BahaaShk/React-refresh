import {useState, useReducer} from 'react'
import { counterReducer , initialState} from './counterReducer'




const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0)

function handleIncrementByOne(){
  dispatch({type:"incrementByAmount", payload: Number(inputValue)})
  setInputValue(0)
}
function handleDecrementByOne(){
  dispatch({type:"decrementByAmount", payload: Number(inputValue)})
  setInputValue(0)
}
  
  return (
    <div className=' flex flex-col'>
      <h2 className='text-center border rounded-lg p-1 mb-1'>Count : {state.count}</h2>
      <button className='border p-1 mt-1 rounded-sm bg-gray-300 hover:bg-gray-200' onClick={()=> dispatch({type:"increment"})}>Increment</button>
      <button className='border p-1 mt-1 rounded-sm bg-gray-300 hover:bg-gray-200 hover:translate-y-[-2px]'  onClick={()=> dispatch({type:"decrement"})}>decrement</button>

      <div className=' flex flex-col'>
        <input type="number" value={inputValue} className='text-center border p-1 mt-2 rounded-lg' onChange={(e => setInputValue(e.target.value))}
        />
        <button className='border p-1 mt-1 rounded-sm bg-gray-300 hover:bg-gray-200 hover:translate-y-[-2px]' onClick={handleIncrementByOne}>Add</button>
        <button className='border p-1 mt-1 rounded-sm bg-gray-300 hover:bg-gray-200 hover:translate-y-[-2px]' onClick={handleDecrementByOne}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter
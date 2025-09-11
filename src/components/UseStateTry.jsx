import React, { useState } from 'react'

const UseStateTry = () => {
   const [count, setCount] = React.useState(0);
 
   const [movie,setMovie] = useState({
    title: "Unbroken",
    ratings: 7
   })


  const Inc = () => {
    setCount(count + 1)
  }
  const Dec = () => {
    setCount(count- 1)
  }
  return (
    <div className=' border text-center p-4'>
      
        <div className=' p-4 text-center'>
        <h1 className='border '>{count}</h1> 
        <div className=' flex gap-2 mt-2  '>
          
        <button onClick={() => { setCount(count+1)}} className=' border p-2 cursor-pointer hover:bg-green-400'>+</button>
        <button className='border p-2 cursor-pointer hover:bg-red-400' onClick={Dec} >-</button>
        </div>
        </div>

       
             <h1>{movie.title}</h1>
              <h2>Ratings : {movie.ratings}</h2>
              <button className=' border-blue-700 border-2 p-1 mt-2 hover:bg-blue-500' onClick={() => {
                setMovie({...movie, ratings: 5})
              }}>update rating</button>
            
      
    </div>
  )
}

export default UseStateTry
const Person = ({name,age,isMarried, children, count, handler}) => {
   const DecHandler = () => handler()
  
  return (
    <div>
      {
        <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        {isMarried && <h1>{name}</h1>}
        <div>
        {children}
        </div>
                  <p>{count}</p>
      <button onClick={DecHandler}>decrement</button>
        </div>

      }
    </div>
  )
}

export default Person
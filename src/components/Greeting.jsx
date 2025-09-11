const Greeting = ({timeOfDay}) => {

  const message = 'Hello,  and welcome'
  const date = new Date().toLocaleDateString('en-US', {
    year:"numeric",
    month:"short",
    day:"numeric"
  })

  return (
    <div>
      <h1>{message}</h1>
      <p>today is : {date}</p>
      {timeOfDay === 'morning' ? 'Good morning' : "Good Afternoon"}
    </div>
  )
}

export default Greeting
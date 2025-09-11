
const Footer = ({count, handler}) => {

  const IncHandler = () => handler()
  
  return (
    <footer>
      <p>@ 2024 my website</p>
      <p>{count}</p>
      <button onClick={IncHandler}>Increment</button>
    </footer>

  )
}

export default Footer
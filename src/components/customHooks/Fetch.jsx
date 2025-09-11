import useFetch from "./useFetch"

const Fetch = () => {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {
        data && data.map((item) => (
          <li>{item.title}</li>
        ))
      }
    </div>
  )
}

export default Fetch
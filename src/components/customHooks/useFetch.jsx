import { useState, useEffect } from "react";

const useFetch = (url) => {
const [data,setData] = useState([])

useEffect(() => {
  async function fetchData(){
    const res =  await fetch(url)
    const dataTwo = await res.json()
    setData(dataTwo)

  }
  fetchData()
},[url])

return [data]
}

export default useFetch
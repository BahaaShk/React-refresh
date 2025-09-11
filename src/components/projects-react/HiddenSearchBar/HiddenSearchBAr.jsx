import React from 'react'
import './App.css'
import { FaSearch } from 'react-icons/fa';

const HiddenSearchBAr = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('#fff');

  const handleClick = (e) => {
setBgColor("#1a1a1a")
if (e.target.className === 'container') {
  setShowInput(false)
  setBgColor("#fff")
}
  }
  return (
    <section className='container' style={{backgroundColor:bgColor}} onClick={handleClick}>
{showInput ? (<input type='text' placeholder='Search ...' />) : (<FaSearch cursor={'pointer'} color='black' size={50} onClick={() => setShowInput(true)} />)}
    </section>
  )
}

export default HiddenSearchBAr
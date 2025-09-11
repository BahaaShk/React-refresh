import {useRef} from 'react'

const UserefExample = () => {
  const ref = useRef()

  const focusInput = () => {
ref.current.focus()
ref.current.value = 'Bahaa'
  }
  return (
    <div>
    <input className='text-center border p-1 mr-2 rounded-sm' type="text" ref={ref} />
    <button className='border p-1 mt-1 rounded-sm bg-gray-300 hover:bg-gray-200 hover:translate-y-[-2px]' onClick={() => focusInput()}>Focus & Write</button>
    </div>
  )
}

export default UserefExample
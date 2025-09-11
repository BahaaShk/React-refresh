import {useId} from 'react'

const UseIdExample = () => {

  const id = useId();

  return (
    <div className=''>
<label htmlFor={`${id}-email`}>Email : </label>  
<input type="email" id={`${id}-email`} className='border rounded-md' />  
<br />
<label htmlFor={`${id}-password`}>Password : </label>  
<input type="password" id={`${id}-password`} className='border rounded-md' />  
</div>
  )
}

export default UseIdExample
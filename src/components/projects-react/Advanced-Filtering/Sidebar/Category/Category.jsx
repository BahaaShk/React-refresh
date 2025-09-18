import './Category.css'
const Category = () => {
  return (
    <div>
      <h2 className='text-[22px] mb-5'>Category</h2>
      <div className='mt-5'>
        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test' />
          <span className='checkmark'></span>All
        </label>
        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test' />
          <span className='checkmark'></span>Sneakers
        </label>
        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test' />
          <span className='checkmark'></span>Flats
        </label>
        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test' />
          <span className='checkmark'></span>Sandals
        </label>
        <label htmlFor="" className='sidebar-label-container'>
          <input type="radio" name='test' />
          <span className='checkmark'></span>Heels
        </label>
      </div>
    </div>
  )
}

export default Category
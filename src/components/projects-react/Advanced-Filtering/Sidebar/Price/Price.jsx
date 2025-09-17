import './Price.css'
const Price = () => {
  return (
    <div className='ml ml-5 '>
      <h2 className='sidebar-title price-title mt-5 text-[22px] mb-5'>Price</h2>
      <label className='sidebar-label-container'>
        <input type="radio" name='testTwo' />
        <span className="checkmark"></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='testTwo' />
        <span className="checkmark"></span>$0 - $50
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='testTwo' />
        <span className="checkmark"></span>$50 - $100
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='testTwo' />
        <span className="checkmark"></span>$100 - $150
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name='testTwo' />
        <span className="checkmark"></span>$150 + 
      </label>
    </div>
  )
}

export default Price
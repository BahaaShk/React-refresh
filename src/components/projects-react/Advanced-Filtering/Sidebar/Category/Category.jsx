import Input from '../../components/Input'
import './Category.css'
const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='text-[22px] mb-5'>Category</h2>
      <div className='mt-5 '>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
      <Input handleChange={handleChange} value={'sneakers'} name={'test'} title={'Sneakers'}/>
      <Input handleChange={handleChange} value={'flats'} name={'test'} title={'Flats'}/>
      <Input handleChange={handleChange} value={'heels'} name={'test'} title={'Heels'}/>
      <Input handleChange={handleChange} value={'sandals'} name={'test'} title={'Sandals'}/>

      </div>
    </div>
  )
}

export default Category
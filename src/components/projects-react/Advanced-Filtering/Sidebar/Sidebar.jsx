import './Sidebar.css'
import { CgShoppingCart } from 'react-icons/cg'
import Category from './Category/Category';
import Price from './Price/Price'
import Colors from './Colors/Colors'
const Sidebar = ({handleChange}) => {

  return (
    <>
    <section className="sidebar w-[16%] fixed h-full flex flex-col items-center border-r-2 border-[#ededed] z-3 overflow-y-scroll">
      <div className="logo-container mb-[4rem]">
        <h1 className='mt-[2rem]
        '><CgShoppingCart size={22} /></h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
    </>
  )
}

export default Sidebar
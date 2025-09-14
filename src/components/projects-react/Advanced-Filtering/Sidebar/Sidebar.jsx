import React from 'react'
import './Sidebar.css'
import { CgShoppingCart } from 'react-icons/cg'
import Category from './Category/CAtegory'
import Price from './Price/Price'
import Colors from './Colors/Colors'
const Sidebar = () => {
  return (
    <>
    <section className="sidebar w-[15%] fixed h-full flex flex-col items-center border-r-2 border-[#ededed] z-3">
      <div className="logo-container mb-[4rem]">
        <h1 className='mt-[2rem]
        '><CgShoppingCart size={22} /></h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
    </>
  )
}

export default Sidebar
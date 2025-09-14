import React from 'react'
import './Products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'

const Products = () => {
  return (
    <>
    <section className="card-container flex flex-wrap ml-[20rem] mt-[2rem] -z-2">
      <section className='card m-5 border-2 border-[#ededed] p-5 cursor-pointer'>
        <img src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="Shoe
        " className='w-[13rem] mb-[1rem]'/>
        <div className="card-details">
          <h3 className="card-title mb-[1rem]">Shoe</h3>
          <section className='card-reviews flex mb-[1rem]'>
            <AiFillStar className='text-[#d5ab55]' />
            <AiFillStar className='text-[#d5ab55]' />
            <AiFillStar className='text-[#d5ab55]' />
            <AiFillStar className='text-[#d5ab55]' />
            <span className='total-reviews text-[0.9rem] ml-2.5'>4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagFill className='text-[#535353]'/>

            </div>
          </section>
        </div>
         </section>
    </section>
    </>
  )
}

export default Products
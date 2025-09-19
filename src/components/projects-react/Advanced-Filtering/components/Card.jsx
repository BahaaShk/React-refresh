import { AiFillStar } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
const Card = ({img , title, star, reviews , newPrice, prevPrice}) => {
  return (
          <section className='rounded-md shadow-md card m-5 border-2 border-[#ededed] p-5 cursor-pointer'>
            <img src={img} alt={title} className='w-[13rem] mb-[1rem]'/>
            <div className="card-details">
              <h3 className="card-title mb-[1rem]">{title}</h3>
              <section className='card-reviews flex mb-[1rem]'>
            {star}{star}{star}{star}
                <span className='total-reviews text-[0.9rem] ml-2.5'>{reviews}</span>
              </section>
              <section className="card-price flex justify-around items-center">
                <div className="price">
                  <del>{prevPrice}</del> / ${newPrice}
                </div>
                <div className="bag">
                  <BsFillBagFill className='text-[#535353]'/>
    
                </div>
              </section>
            </div>
             </section>
  )
}

export default Card
import './Products.css'

const Products = ({result}) => {
  return (
    <>
    <section className="card-container flex flex-wrap ml-[20rem] mt-[2rem] -z-2">
{result}
    </section>
    </>
  )
}

export default Products
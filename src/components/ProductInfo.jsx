
const ProductInfo = () => {
  const productList = [{
    id:1,
name: "Laptop",
price: 1200,
availability:"In Stock"
  },
{
  id:2,
  name: "Laptop",
price: 1200,
availability:"In Stock"
}
]

  return (
    <div className="flex gap-2 p-2 text-red-500 border animate-bounce">
      
  {
    productList.map(({id,name,price,availability}) => {
      return (
<ul key={id}>
  <li>{name}</li>
  <li>{price}</li>
  <li>{availability}</li>
</ul>
      )
    })
  }
      
    </div>
  )
}

export default ProductInfo
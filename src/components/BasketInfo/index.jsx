import { Link } from "react-router-dom"


const BasketInfo = () => {
  return (
    <div className="text-center fs-4">
     <p>First, add a product to the cart</p>

     <Link className="btn btn-primary" to="/">  Go To Products
     </Link>
    </div>
  )
}

export default BasketInfo

import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'
import { toast } from "react-toastify";
const Total = () => {
 const { basket} = useContext(BasketContext)
//  dizideki toplam ürünlerin toplam fiyatını hesaplayan component
const totalAmount = basket.reduce ((acc,item) => acc + item.amount, 0)

// Toplam fiyatı render eden component
const totalPrice = basket.reduce((acc, item) => acc + item.price*item.amount, 0)
  return (
    <div className='rounded my-5 shadow border p-4 d-flex flex-column justify-content-between'>
     <div className='fs-5'>
     <p>Total of <span className='text-warning fw-bold'>{totalAmount} </span> products in the basket </p>
     <p>Total : <span>{totalPrice.toFixed(2)} </span> $</p>
     </div>
     <button onClick={() => toast.success("your cart has been confirmed")} className='btn btn-success py-2 px-3'>Confirm Basket</button>
    </div>
  )
}

export default Total

import React, { useContext } from 'react'
import { categoryContext } from '../Context/provider'
import { Link } from 'react-router-dom'


const CashOndelivery=()=> {
  const {totalPrice} = useContext(categoryContext)
  return (
    <div className="mt-3 mb-3">
        <p className="ml-5">
            Cash handling charges of ₹ 20 are applicable
        </p>
        <button className="showPayBtn" type="button" style={{ width: "100%" }}>
            Pay ₹{totalPrice}
        </button>
    </div>
  )
}

export default CashOndelivery

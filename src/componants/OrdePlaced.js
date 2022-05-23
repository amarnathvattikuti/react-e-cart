import React from "react";
import { Link } from "react-router-dom";
import SuccessImg from './images/success.gif';

const OrderSuccess = () => {


    return(
        <>
          <div className="container Item-container bg-white mt-5 p-5 shadow-sm"
              style={{height: 530}}
              >
              <div className="row text-center">
                   <h2>
                       Your order has been placed Successfully.. 
                   </h2>
                   <div className="">
                       <img src={SuccessImg} alt="" style={{width: 300}} />
                   </div>
                   <Link to="/">
                   <button className="btn btn-warning text-white p-3">
                       Shop again
                   </button>
                   </Link>
              </div>
          </div>
        </>
    )
}

export default OrderSuccess;
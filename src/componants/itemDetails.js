import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const {id} = useParams();

  const getdata = useSelector((state) => state.Cardreducer.carts);
  
  const[data, setData] = useState([]);
  console.log(data);
 
  //console.log(id)
  const compareData = () => {
    let compareitemData = getdata.filter((e) => {
      // eslint-disable-next-line
      return e.id == id;
    })
    setData(compareitemData);
  }
  
  useEffect(() => {
    compareData();
    // eslint-disable-next-line
  }, [id]);


  return (
    <>
      {data.map((cart) => {
        return (
          <>
            <div className="container mt-4">
              <p>Item Details</p>
            </div>
            <div className="container bg-white p-5">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <img className="w-100" src={cart.imgdata} alt={cart.rname} />
                </div>
                <div className="col-12 col-lg-6 ps-lg-5">
                  <h3>Restaurant: {cart.rname}</h3>
                  <div className="row mt-5">
                    <div className="col-12 col-lg-6">
                      <p><strong>Price:</strong> ₹ {cart.price}</p>
                      <p className="mb-5"><strong>Dishes:</strong> {cart.address}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <p><strong >Rating:</strong> 3.8
                        <span className="fa fa-star checked text-warning ps-1"></span>
                        <span className="fa fa-star checked text-warning"></span>
                        <span className="fa fa-star checked text-warning"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p><strong>Review:</strong> {cart.somedata}</p>
                      <Link to="/cartItems">
                        <button
                          className="btn btn-warning bg-warning w-100 p-3 text-white"
                          style={{ fontWeight: "700", fontSize: "18px" }}
                        >Back to cart</button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )
      })}


    </>
  );

}

export default ItemDetails;
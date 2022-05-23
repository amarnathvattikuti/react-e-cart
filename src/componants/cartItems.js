import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddItem, DLT, RMV, RMVAll } from "../redux/actions/action";
import CartImg from './images/cart.gif';
import { useLocation } from "react-router-dom";


const CartItems = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
  let query = useQuery();
  console.log(query.get("name"));

    let getdata = useSelector((state) => state.Cardreducer.carts);
    // console.log(selectedData);

    const [grandtotal, setGranftotal] = useState(0);
    //console.log(grandtotal)
    const dispatch = useDispatch();

    const send = (e) => {
        //console.log(e);
        dispatch(AddItem(e));
    }
    const qntyRmv = (item) => {
        //console.log(e);
        dispatch(RMV(item));
    }
    const removeAll = (items) => {
        //console.log(e);
        dispatch(RMVAll(items));
    }

    const dlt = (id) => {
        //console.log(e);
        dispatch(DLT(id));
    }

    const grandTotal = () => {
        let price = 0;
        getdata.map((el, k) => {
            return price += el.price * el.qnty;
        })

        setGranftotal(price);
    }

    useEffect(() => {
        grandTotal();
    });

    const Selected = () => {

        return (
            <>
                {
                    getdata.map((ele) => {
                        return (
                            <>
                                <div className="row p-0 pb-4 mb-4 border-bottom">
                                    <div className="col-12 col-md-4 col-lg-4">
                                        <Link to={`/itemDetails/${ele.id}`}>
                                            <img src={ele.imgdata} alt={ele.rname} style={{ width: "200px" }} />
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-5 col-lg-5">
                                        <p className="font-weight-bold"><strong>Name: {ele.rname}</strong></p>
                                        <p>Quantity: <span className="qnty">{ele.qnty}</span></p>
                                        <p>Price: ₹ <span className="price">{ele.price}</span></p>
                                        <p><strong>Total: ₹{ele.qnty * ele.price}</strong></p>
                                        <div
                                            className="incNred p-2 d-flex bg-secondary justify-content-center align-items-ceter">
                                            <div className="text-white"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="fa-solid fa-minus me-2"
                                                    onClick={() => { ele.qnty === 1 ? dlt(ele.id) : qntyRmv(ele) }}
                                                ></i>
                                            </div>
                                            <div className="me-2 text-white">{ele.qnty}</div>
                                            <div className="text-white"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="fa-solid fa-plus"
                                                    onClick={() => send(ele)}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3 d-flex justify-content-end">
                                        <button className="btn"
                                            onClick={() => dlt(ele.id)}
                                        >
                                            <i className="fa-solid fa-trash-can text-danger"></i>
                                        </button>
                                    </div>
                                </div>

                            </>
                        )
                    })

                }

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <p className="bg-info gTotal rounded text-white p-2"><strong>Grand Total: ₹{grandtotal} </strong></p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 PlsOrder">
                        <Link to="/OrderPlaced?name=OrderPlaced">
                            <button 
                            className="btn btn-warning text-white p-2 btnplsOrd" 
                            id="OrdePlaced"
                            onClick={() => removeAll()}
                            >
                                Place order
                            </button>
                        </Link>
                    </div>

                </div>

            </>
        );

    }

    const Empty = () => {
        return (
            <>
                <div className="row ">
                    <h3 className="w-100 text-center pb-2">Your cart is empty
                        <img src={CartImg} alt="cartimg" style={{ width: 60 }} />
                    </h3>
                    <div className="col-12 d-flex justify-content-center">
                        <Link to="/">
                            <button className="btn btn-primary">
                                start shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container Item-container mt-5">
                <p className="w-100">Selected cart items</p>
                <div className="row p-0">
                </div>
            </div>
            <div className="container Item-container bg-white p-5 shadow-sm rounded">
                {getdata.length ? <Selected /> : <Empty />}
            </div>


        </>
    )

}

export default CartItems;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from "@mui/material/Badge";
//import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';


const NavbarHeader = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    // console.log(query.get("name"));

    let getdata = useSelector((state) => state.Cardreducer.carts);

    return (
        <>
            <Navbar bg="white" variant="light" className="shadow-sm">
                <Container>
                    <Link to="/" className="text-decoration-none">
                        e-Cart
                    </Link>
                    <Link to="/cartItems" className="text-decoration-none">
                        {query.get("name") === "OrderPlaced" ? "" :
                            <Badge badgeContent={query.get("name") === "OrderPlaced" ? getdata = "null" : getdata.length} color="primary"
                                style={{ cursor: "pointer" }}
                                id="basic-button"
                            >
                                Cart

                                <i className="fa-solid fa-cart-shopping" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                            </Badge>
                        }
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarHeader;
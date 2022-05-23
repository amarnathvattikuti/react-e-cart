//import { cardActionAreaClasses } from "@mui/material";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import CardData from './ItemsList';
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/actions/action";


const Items = () => {

  const [carditems, setCarditems] = useState([]);

  useEffect(() => {
    setCarditems(CardData);
  }, [])
  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(AddItem(e));
  }

  //console.log(carditems);

  return (
    <>
      <div className="container pt-5">
        <p>Add items to your cart</p>
      </div>
      <div className="container shadow-sm bg-white p-5">
        <div className="row">
          {carditems.map((item, id) => {
            return (
              <>
                <div className="col-12 col-lg-4 mb-4" key={id}>
                  <Card className="card_style" key={item.id}>
                    <Card.Img variant="top" src={item.imgdata} style={{ height: "16rem" }} className="p-3" alt={item.rname} />
                    <Card.Body>
                      <Card.Title>{item.rname}</Card.Title>
                      <Card.Text>
                        Price: ₹ {item.price}
                      </Card.Text>
                      <Button variant="primary"
                        onClick={() => send(item)}
                      >Add to cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          }
          )}

        </div>
      </div>
    </>
  );

}

export default Items;
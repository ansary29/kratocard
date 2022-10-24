import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import CardImg from "react-bootstrap/esm/CardImg";
// import { useCallback } from 'react';

// const URL  = 'https://fakestoreapi.com/products/category/jewelery';

// const getData = async () => {
//     const response = await fetch(URL);

//     const body = await response.json();

//     //console.log(body);
//     return body.url;

// }

function OrderingExample() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  console.log("Data:", data);
  console.log("Category:", category);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      if (res.data) {
        setCategory(res.data);
        console.log(res.data);
      }
      // const url = await getData();
      // setUrl(url);
    };
    fetchCategory();
  }, []);

  const onClickHandler = async (name) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
    if (res.data) {
      setData(res.data);
      console.log(res.data);
    }
    // const url = await getData();
    // setUrl(url);
  };

  // useEffect(() => {
  //   //console.log('hi');

  //   onClickHandler();
  // }, []);

  return (
    <div>
   
        {category.map((item) => {
          return (
            <Col >
              <Card style={{ width: "18rem" }}>
                <Card.Img key={item} variant="top" src="{item}" />
                <Card.Body>
                  <Card.Title>{item}</Card.Title>
                  {/* <Card.Text>Jewellery to shop a gold and</Card.Text> */}
                  
                  <Button
                    variant="primary"
                    onClick={() => onClickHandler(item)}
                  >
                    Add{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}

        {data.map((item) => {
          return (
            <Col key={item.id} xs={{ order: 12 }}>
              <Card style={{ width: "50rem" }}>
                <Card.Img  variant="top" src="{item}"  />
                <Card.Body>
                
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>₹{item.price}</Card.Text>
                  {/* <Button variant="primary" onClick={onClickHandler}>
                    Go somewhere
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {/* <Col xs={{ order: 12 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Electronics</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={onClickHandler}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={{ order: 1 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Mens Clothing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col> */}
        </div>
    
  );
}

export default OrderingExample;



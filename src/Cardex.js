import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardex = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://usa.kaspersky.com/content/en-us/images/repository/isc/2021/safe_shopping_1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardex

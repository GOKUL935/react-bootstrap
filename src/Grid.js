import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GridExample = () => {
    return (
      <div>
        <Container>
          <Row>
            <Col><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://4kwallpapers.com/images/wallpapers/ferrari-f80-3840x2160-19324.jpg" />
              <Card.Body>
                <Card.Title>Ferrari F80</Card.Title>
                <Card.Text>
                  A limited production min-engine, hybrid sports car that serves as the
                  successor to the LaFerrari.
                </Card.Text>
                <Button variant="primary">Showmore</Button>
              </Card.Body>
            </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.motorbeam.com/wp-content/uploads/2015-Kawasaki-Ninja-H2R-Wallpaper-1200x675.jpg" />
              <Card.Body>
                <Card.Title>Kawasaki Ninja H2R</Card.Title>
                <Card.Text>
                  supercharged 998cc inline-four engine track-only hypersport motorcycle 
                  extreme performance
                </Card.Text>
                <Button variant="primary">Showmore</Button>
              </Card.Body>
            </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.boatinternational.com/convert/files/2024/09/497b5b00-706a-11ef-9970-27294a480af2-Kismet-Jarmo-Pohjaniemi-for-Cecil-Wright-and-Lu%CC%88rssen.jpg/r%5Bwidth%5D=1920/497b5b00-706a-11ef-9970-27294a480af2-Kismet-Jarmo-Pohjaniemi-for-Cecil-Wright-and-Lu%CC%88rssen.jpg" />
              <Card.Body>
                <Card.Title>Lady Gulya</Card.Title>
                  <Card.Text>
                    A 95.2-meter motor yacht with steel hull and top speed of 17 knots
                    and crusing speed 14 knots
                  </Card.Text>
                  <Button variant="primary">Showmore</Button>
              </Card.Body>
            </Card></Col>
          </Row>
        </Container>
      </div>
    )
  }

export default GridExample

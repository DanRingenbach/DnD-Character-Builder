import React from 'react';
import { Card, ListGroupItem, ListGroup, Col, Row } from 'react-bootstrap';


const Character = ({ characters }) => {
  if (!characters.length) {
    return <h3>No characters yet</h3>;

  }
  console.log()
  return (
    <div>
      {characters &&
        characters.map((character) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
              {character.background}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Race: {character.race}</ListGroupItem>
              <ListGroupItem>Class: {character.class} </ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};


export default Character;
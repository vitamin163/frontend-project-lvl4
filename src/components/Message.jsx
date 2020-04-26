import React from 'react';
import { Card, Image } from 'react-bootstrap';

export default (props) => {
  const {
    message, author, avatar, date,
  } = props;
  return (
    <Card border="secondary" className="mt-1" style={{ fontSize: '0.8rem' }}>
      <Card.Header className="d-flex p-2 justify-content-between ">
        <div>
          <Image src={avatar} roundedCircle className="mr-2" style={{ height: '2rem', width: '2rem' }} />
          <strong>{author}</strong>
        </div>
        <div>{date}</div>
      </Card.Header>
      <Card.Body className="p-2">
        <Card.Text>{message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

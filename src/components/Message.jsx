import React from 'react';
import { Card } from 'react-bootstrap';

export default (props) => {
  const { message, author } = props;
  return (
    <Card border="secondary" className="mt-1" style={{ fontSize: '0.8rem' }}>
      <Card.Header className="p-2">{author}</Card.Header>
      <Card.Body className="p-2">
        <Card.Text>{message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

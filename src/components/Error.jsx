import React from 'react';
import { Alert } from 'react-bootstrap';

export default ({ children }) => {
  const errorType = children === 'Write message' ? 'warning' : 'danger';
  return <Alert variant={errorType}>{children}</Alert>;
};

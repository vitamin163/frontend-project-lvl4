import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../slices';


export default () => {
  const dispatch = useDispatch();
  const { showModal } = actions;
  const handleShow = () => {
    dispatch(showModal({
      show: true,
      type: 'addChannel',
    }));
  };
  return (
    <Button variant="primary" size="sm" className="mb-2" onClick={handleShow}>
      Add channel
    </Button>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { actions } from '../../slices';
import Input from '../Input';
import routes from '../../routes';

export default () => {
  const dispatch = useDispatch();
  const { closeModal } = actions;

  const modalState = useSelector((state) => state.modalState);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const addChannelHandler = async (text) => {
    const url = routes.channelsPath();
    const data = {
      attributes: {
        name: text,
      },
    };
    await axios.post(url, { data });
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add channel</Modal.Title>
      </Modal.Header>
      <Modal.Body><Input onSubmit={addChannelHandler} /></Modal.Body>
    </Modal>
  );
};

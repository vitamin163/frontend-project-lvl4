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

  const handleClose = () => {
    dispatch(closeModal());
  };
  const modalState = useSelector((state) => state.modalState);

  const renameChannelHandler = async (text) => {
    const url = routes.channelPath(modalState.channelId);
    const data = {
      attributes: {
        name: text,
      },
    };
    await axios.patch(url, { data });
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rename channel</Modal.Title>
      </Modal.Header>
      <Modal.Body><Input onSubmit={renameChannelHandler} /></Modal.Body>
    </Modal>
  );
};

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import Input from '../Input';
import routes from '../../routes';

export default () => {
  const dispatch = useDispatch();
  const { closeModal } = actions;
  const { submitAsyncAction } = asyncActions;

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
    await dispatch(submitAsyncAction('post', data, url));
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

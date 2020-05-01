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
    await dispatch(submitAsyncAction('patch', data, url));
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

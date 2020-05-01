import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import routes from '../../routes';
import Error from '../Error';

export default () => {
  const dispatch = useDispatch();
  const {
    closeModal, setError, removeRequest, removeSuccess, removeFailure,
  } = actions;
  const { submitAsyncAction } = asyncActions;

  const modalState = useSelector((state) => state.modalState);
  const removeState = useSelector((state) => state.removeState);
  const error = useSelector((state) => state.error);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const removeChannelHandler = async () => {
    const { channelId } = modalState;
    const url = routes.channelPath(channelId);
    const data = {
      id: channelId,
    };
    removeRequest();
    try {
      await dispatch(submitAsyncAction('delete', data, url));
      handleClose();
      dispatch(removeSuccess());
    } catch (e) {
      dispatch(setError(e.message));
      dispatch(removeFailure());
      throw (e);
    }
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete channel?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        {removeState === 'REMOVE_CHANNEL_FAILURE' && <Error>{error}</Error>}
        <Button
          variant="primary"
          onClick={removeChannelHandler}
          disabled={removeState === 'REMOVE_CHANNEL_REQUEST'}
        >
          Yes
        </Button>
        <Button
          variant="primary"
          onClick={handleClose}
        >
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

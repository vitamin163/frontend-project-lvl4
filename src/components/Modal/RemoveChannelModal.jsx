import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import routes from '../../routes';
import Error from '../Error';


const mapStateToProps = (state) => {
  const props = {
    modalState: state.modalState,
    submitState: state.submitState,
    currentChannelId: state.currentChannelId,
    error: state.error,
  };
  return props;
};

const mapDispatchToProps = {
  submitAsyncAction: asyncActions.submitAsyncAction,
  closeModal: actions.closeModal,
  setError: actions.setError,
};

const ChannelModal = (props) => {
  const {
    modalState, closeModal, submitAsyncAction, setError, submitState, error,
  } = props;

  const handleClose = () => {
    closeModal();
  };

  const removeChannelHandler = async () => {
    const { channelId } = modalState;
    const url = routes.channelPath(channelId);
    const data = {
      id: channelId,
    };
    try {
      await submitAsyncAction('delete', data, url, 'REMOVE_CHANNEL');
      handleClose();
    } catch (e) {
      setError(e.message);
      throw (e);
    }
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete channel?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        {submitState === 'REMOVE_CHANNEL_FAILURE' && <Error>{error}</Error>}
        <Button
          variant="primary"
          onClick={removeChannelHandler}
          disabled={submitState === 'REMOVE_CHANNEL_REQUEST'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChannelModal);

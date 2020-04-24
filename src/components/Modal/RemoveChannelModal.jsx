import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import routes from '../../routes';


const mapStateToProps = (state) => {
  const props = {
    modalState: state.modalState,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const mapDispatchToProps = {
  submitAsyncAction: asyncActions.submitAsyncAction,
  closeModal: actions.closeModal,
};

const ChannelModal = (props) => {
  const {
    modalState, closeModal,
  } = props;

  const handleClose = () => {
    closeModal();
  };

  const removeChannelHandler = async () => {
    const { submitAsyncAction } = props;
    const { channelId } = modalState;
    const url = routes.channelPath(channelId);
    const data = {
      id: channelId,
    };
    try {
      await submitAsyncAction('delete', data, url);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete channel?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={removeChannelHandler}
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

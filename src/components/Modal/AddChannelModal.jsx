import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import Input from '../Input';
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

const AddChannelModal = (props) => {
  const {
    modalState, closeModal,
  } = props;

  const handleClose = () => {
    closeModal();
  };

  const addChannelHandler = (textInput) => async ({ text }) => {
    const { submitAsyncAction } = props;
    const url = routes.channelsPath();
    const data = {
      attributes: {
        name: text,
      },
    };
    try {
      await submitAsyncAction('post', data, url);
      handleClose();
    } catch {
      textInput.current.focus();
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelModal);

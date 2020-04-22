import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { actions, asyncActions } from '../slices';
import Input from './Input';
import routes from '../routes';


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

  const addChannelHandler = (textInput) => async ({ text }, { resetForm }) => {
    const { submitAsyncAction } = props;
    const url = routes.channelsPath();
    const data = {
      attributes: {
        name: text,
      },
    };
    try {
      await submitAsyncAction('post', data, url, resetForm);
      handleClose();
    } catch {
      textInput.current.focus();
    }
  };

  const renameChannelHandler = (textInput) => async ({ text }, { resetForm }) => {
    const { submitAsyncAction } = props;
    const url = routes.channelPath(modalState.channelId);
    const data = {
      attributes: {
        name: text,
      },
    };
    try {
      await submitAsyncAction('patch', data, url, resetForm);
      handleClose();
    } catch {
      textInput.current.focus();
    }
  };

  const handlers = {
    addChannel: addChannelHandler,
    renameChannel: renameChannelHandler,
  };

  return (
    <Modal show={modalState.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalState.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><Input onSubmit={handlers[modalState.type]} /></Modal.Body>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelModal);

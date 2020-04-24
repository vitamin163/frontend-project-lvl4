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

const RenameChannelModal = (props) => {
  const {
    modalState, closeModal,
  } = props;

  const handleClose = () => {
    closeModal();
  };

  const renameChannelHandler = (textInput) => async ({ text }) => {
    const { submitAsyncAction } = props;
    const url = routes.channelPath(modalState.channelId);
    const data = {
      attributes: {
        name: text,
      },
    };
    try {
      await submitAsyncAction('patch', data, url);
      handleClose();
    } catch {
      textInput.current.focus();
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(RenameChannelModal);

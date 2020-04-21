import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { actions, asyncActions } from '../../slices';
import Input from '../Input';
import routes from '../../routes';


const mapStateToProps = (state) => {
  const props = {
    modalState: state.modalState,
  };
  return props;
};

const mapDispatchToProps = {
  submitMessageAction: asyncActions.submitMessageAction,
  showModal: actions.showModal,
};

const AddChannelModal = (props) => {
  const { modalState, showModal } = props;
  const handleClose = () => {
    showModal(false);
  };
  const addChannelHandler = (textInput) => async ({ text }, { resetForm }) => {
    const { submitMessageAction } = props;
    const url = routes.channelsPath();
    const data = {
      attributes: {
        name: text,
      },
    };
    try {
      await submitMessageAction(data, url, resetForm);
      handleClose();
    } catch {
      textInput.current.focus();
    }
  };
  return (
    <Modal show={modalState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add channel</Modal.Title>
      </Modal.Header>
      <Modal.Body><Input onSubmit={addChannelHandler} /></Modal.Body>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelModal);

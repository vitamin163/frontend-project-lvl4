import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../slices';
import getModal from './Modal';

const mapStateToProps = (state) => {
  const props = {
    modalState: state.modalState,
  };
  return props;
};

const mapDispatchToProps = {
  showModal: actions.showModal,
};

const Modal = getModal('addChannel');

const AddChannel = (props) => {
  const handleShow = () => {
    const { showModal } = props;
    showModal(true);
  };
  return (
    <>
      <Button variant="primary" size="sm" className="mb-2" onClick={handleShow}>
        Add channel
      </Button>
      <Modal />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChannel);

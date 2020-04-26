import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../slices';


const mapStateToProps = (state) => {
  const props = {
    modalState: state.modalState,
  };
  return props;
};

const mapDispatchToProps = {
  showModal: actions.showModal,
};


const AddChannel = (props) => {
  const handleShow = () => {
    const { showModal } = props;
    showModal({
      show: true,
      type: 'addChannel',
    });
  };
  return (
    <Button variant="primary" size="sm" className="mb-2" onClick={handleShow}>
      Add channel
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChannel);

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { actions } from '../../slices';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const MessageList = (props) => {
  const { messages } = props;
  return (
    <ListGroup as="ul">
      {messages.map((message) => message)}
    </ListGroup>
  );
};

export default connect(mapStateToProps)(MessageList);

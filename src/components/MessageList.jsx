import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Message from './Message';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const MessageList = (props) => {
  const { messages, currentChannelId } = props;
  const currentMessages = messages.filter((message) => message.channelId === currentChannelId);
  return (
    <Col className="overflow-auto">
      {currentMessages.map((message) => {
        const {
          id, author, message: content, avatar, date,
        } = message;
        return <Message key={id} message={content} author={author} avatar={avatar} date={date} />;
      })}
    </Col>
  );
};

export default connect(mapStateToProps)(MessageList);

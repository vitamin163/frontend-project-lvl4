import React, { useEffect, useRef } from 'react';
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
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom);
  return (
    <Col className="overflow-auto">
      {currentMessages.map((message) => {
        const {
          id, author, message: content, avatar, date,
        } = message;
        return <Message key={id} message={content} author={author} avatar={avatar} date={date} />;
      })}
      <div ref={messagesEndRef} />
    </Col>
  );
};

export default connect(mapStateToProps)(MessageList);

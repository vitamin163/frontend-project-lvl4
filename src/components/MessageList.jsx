import React, { useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from './Message';


export default () => {
  const messages = useSelector((state) => state.messages);
  const currentChannelId = useSelector((state) => state.currentChannelId);
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

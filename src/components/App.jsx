import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Channels from './Channels';
import Input from './Input';
import UserContext from '../context/UserContext';
import MessageList from './MessageList';
import AddChannel from './AddChannel';
import routes from '../routes';
import getModal from './Modal';

export default () => {
  const modalState = useSelector((state) => state.modalState);
  const currentChannelId = useSelector((state) => state.currentChannelId);
  const context = useContext(UserContext);
  const user = JSON.parse(context);

  const submitMesssageHandler = async (text) => {
    const url = routes.channelMessagesPath(currentChannelId);
    const date = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`;
    const data = {
      attributes: {
        message: text,
        author: user.userName,
        avatar: user.avatar,
        date,
      },
    };
    await axios.post(url, { data });
  };

  const { type } = modalState;

  const userName = `User: ${user.userName}`;
  const Modal = getModal[type];

  return (
    <Container fluid className="overflow-auto">
      <Row className="vh-100 pt-3">
        <Col md={4} className="d-flex flex-column ml-1 h-100">
          <div className="flex-row flex-wrap mb-2">
            <Image src={user.avatar} rounded className="mr-1" />
            {userName}
          </div>
          <AddChannel />
          <div className="overflow-auto mb-3">
            <Channels />
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-between h-100">
          <MessageList />
          <Input onSubmit={submitMesssageHandler} />
        </Col>
        <Modal />
      </Row>
    </Container>
  );
};

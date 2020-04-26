import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Channels from './Channels';
import Input from './Input';
import UserContext from '../context/UserContext';
import MessageList from './MessageList';
import AddChannel from './AddChannel';
import { asyncActions } from '../slices';
import routes from '../routes';
import getModal from './Modal';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    modalState: state.modalState,
  };
  return props;
};

const mapDispatchToProps = {
  submitAsyncAction: asyncActions.submitAsyncAction,
};

class App extends React.Component {
  user = JSON.parse(this.context);

  submitMesssageHandler = async (text) => {
    const { currentChannelId, submitAsyncAction } = this.props;
    const url = routes.channelMessagesPath(currentChannelId);
    const date = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`;
    const data = {
      attributes: {
        message: text,
        author: this.user.userName,
        avatar: this.user.avatar,
        date,
      },
    };
    await submitAsyncAction('post', data, url, 'ADD_MESSAGE');
  };


  render() {
    const { modalState: { type } } = this.props;

    const userName = `User: ${this.user.userName}`;
    const Modal = getModal[type];
    return (
      <Container fluid>
        <Row className="vh-100 mt-2">
          <Col md={4} className="d-flex flex-column ml-1 h-100">
            <div className="flex-row flex-wrap mb-2">
              <Image src={this.user.avatar} rounded className="mr-1" />
              {userName}
            </div>
            <AddChannel />
            <div className="overflow-auto mb-3">
              <Channels />
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-between h-100">
            <MessageList />
            <Input onSubmit={this.submitMesssageHandler} />
          </Col>
          <Modal />
        </Row>
      </Container>
    );
  }
}

App.contextType = UserContext;

export default connect(mapStateToProps, mapDispatchToProps)(App);

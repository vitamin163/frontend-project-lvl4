import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
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
  submitMesssageHandler = (textInput) => async ({ text }, { resetForm }) => {
    const { currentChannelId, submitAsyncAction } = this.props;
    const url = routes.channelMessagesPath(currentChannelId);
    const { userName } = JSON.parse(this.context);
    const data = {
      attributes: {
        message: text,
        author: userName,
      },
    };
    try {
      await submitAsyncAction('post', data, url);
      textInput.current.focus();
      resetForm({});
    } catch (e) {
      textInput.current.focus();
    }
  };


  render() {
    const { modalState: { type } } = this.props;
    const user = JSON.parse(this.context);
    const userName = `User: ${user.userName}`;
    const Modal = getModal[type];
    return (
      <Container fluid>
        <Row className="vh-100 pb-5">
          <Col md={3} className="d-flex flex-column ml-1">
            <div>{userName}</div>
            <div><img src={user.avatar} alt="Avatar" /></div>
            <AddChannel />
            <Channels />
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

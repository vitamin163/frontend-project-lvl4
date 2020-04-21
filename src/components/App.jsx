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

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const mapDispatchToProps = {
  submitMessageAction: asyncActions.submitMessageAction,
};

class App extends React.Component {
  submitMesssageHandler = (textInput) => async ({ text }, { resetForm }) => {
    const { currentChannelId, submitMessageAction } = this.props;
    const url = routes.channelMessagesPath(currentChannelId);
    const userName = this.context;
    const data = {
      attributes: {
        message: text,
        author: userName,
      },
    };
    await submitMessageAction(data, url, resetForm);
    textInput.current.focus();
  };

  render() {
    const userName = this.context;
    return (
      <Container fluid>
        <Row className="vh-100 pb-5">
          <Col md={3} className="ml-1">
            <div>{userName}</div>
            <AddChannel />
            <Channels />
          </Col>
          <Col className="d-flex flex-column justify-content-between h-100">
            <MessageList />
            <Input onSubmit={this.submitMesssageHandler} />
          </Col>
        </Row>
      </Container>
    );
  }
}

App.contextType = UserContext;

export default connect(mapStateToProps, mapDispatchToProps)(App);

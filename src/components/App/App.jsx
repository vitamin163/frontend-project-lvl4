import React from 'react';
// import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from '../Channels/Channels';
import Input from '../Input/Input';
import UserContext from '../UserContext';

export default class App extends React.PureComponent {
  render() {
    const userName = this.context;
    return (
      <Container fluid>
        <Row>
          <Col md={2} className="overflow-auto">
            <div>{userName}</div>
            <Channels />
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
      </Container>
    );
  }
}

App.contextType = UserContext;

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

class Channels extends React.PureComponent {
  render() {
    const { channels, currentChannelId } = this.props;
    const { byId, allIds } = channels;
    return (
      <ListGroup as="ul">
        {allIds.map((id) => (
          <ListGroup.Item active={currentChannelId === id} key={id}>{byId[id].name}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}


export default connect(mapStateToProps)(Channels);

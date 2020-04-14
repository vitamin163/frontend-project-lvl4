import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../../slices';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const mapDispatchToProps = {
  channelSelection: actions.channelSelection,
};

const Channels = (props) => {
  const channelSelectionHandler = (id) => () => {
    const { channelSelection } = props;
    channelSelection({ id });
  };


  cons { channels, currentChannelId } = props;
  const { byId, allIds } = channels;
  return (
    <ListGroup as="ul">
      {allIds.map((id) => (
        <ListGroup.Item
          active={currentChannelId === id}
          key={id}
          onClick={channelSelectionHandler(id)}
        >
          {byId[id].name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Channels);

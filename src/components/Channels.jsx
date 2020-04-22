import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions } from '../slices';
import pencil from '../img/pencil-2x.png';
import trash from '../img/trash-2x.png';


const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const mapDispatchToProps = {
  channelSelection: actions.channelSelection,
  showModal: actions.showModal,
};

const Channels = (props) => {
  const { channelSelection, showModal } = props;

  const channelSelectionHandler = (id) => () => {
    channelSelection({ id });
  };

  const { channels, currentChannelId } = props;
  const { byId, allIds } = channels;

  const handleShow = (title, type, channelId) => () => {
    showModal({
      show: true,
      title,
      type,
      channelId,
    });
  };

  const renderButton = (removable, id) => {
    const isActive = currentChannelId === id ? 'active' : null;
    return removable ? (

      <ButtonGroup key={id}>
        <Button
          className="btn-block"
          variant="secondary"
          active={isActive}
          onClick={channelSelectionHandler(id)}
        >
          {byId[id].name}
        </Button>
        <Button
          variant="secondary"
          onClick={handleShow('Rename channel', 'renameChannel', id)}
        >
          <img src={pencil} alt="Rename channel" title="Rename channel" />
        </Button>
        <Button variant="secondary">
          <img src={trash} alt="Delete channel" title="Delete channel" />
        </Button>
      </ButtonGroup>

    ) : (
      <Button
        active={isActive}
        key={id}
        onClick={channelSelectionHandler(id)}
      >
        {byId[id].name}
      </Button>
    );
  };

  return (
    <ButtonGroup vertical>

      {allIds.map((id) => (
        renderButton(byId[id].removable, id)
      ))}
    </ButtonGroup>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Channels);

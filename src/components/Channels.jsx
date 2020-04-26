import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
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

  const handleShow = (type, channelId) => (e) => {
    e.stopPropagation();
    showModal({
      show: true,
      type,
      channelId,
    });
  };

  return (
    <ListGroup>
      {allIds.map((id) => {
        const { removable } = byId[id];
        const isActive = currentChannelId === id ? 'active' : null;
        return (
          <ListGroup.Item
            key={id}
            className="d-flex align-items-baseline flex-wrap"
            active={isActive}
            action
            variant="secondary"
            onClick={channelSelectionHandler(id)}
          >
            <div className="d-block text-truncate">
              {byId[id].name}
            </div>
            {removable && (
              <div className="ml-auto">
                <Image className="ml-2" onClick={handleShow('renameChannel', id)} src={pencil} alt="Rename channel" title="Rename channel" />
                <Image className="ml-2" onClick={handleShow('removeChannel', id)} src={trash} alt="Remove channel" title="Remove channel" />
              </div>
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);

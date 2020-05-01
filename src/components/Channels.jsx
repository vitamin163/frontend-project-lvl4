import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';
import pencil from '../img/pencil-2x.png';
import trash from '../img/trash-2x.png';

export default () => {
  const dispatch = useDispatch();
  const { channelSelection, showModal } = actions;

  const channelSelectionHandler = (id) => () => {
    dispatch(channelSelection({ id }));
  };

  const channels = useSelector((state) => state.channels);
  const currentChannelId = useSelector((state) => state.currentChannelId);

  const handleShow = (type, channelId) => (e) => {
    e.stopPropagation();
    dispatch(showModal({
      show: true,
      type,
      channelId,
    }));
  };
  return (
    <ListGroup>
      {channels.map((channel) => {
        const { removable, id, name } = channel;
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
              {name}
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

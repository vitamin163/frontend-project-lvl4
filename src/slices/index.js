import { combineReducers } from 'redux';
import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';
import modalState, { actions as modalAction } from './modalState';

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  modalState,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...currentChannelIdActions,
  ...modalAction,
};

export { actions };

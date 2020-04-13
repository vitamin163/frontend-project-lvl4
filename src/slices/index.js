import { combineReducers } from 'redux';
import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions, addMessageActions } from './messages';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...currentChannelIdActions,
};

const asyncActions = {
  addMessageActions,
};

export { actions, asyncActions };

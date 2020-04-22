import { combineReducers } from 'redux';
import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import submitState, { actions as submitActions } from './submitState';
import submitAsyncAction from './submitAsyncAction';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';
import modalState, { actions as modalAction } from './modalState';

export default combineReducers({
  channels,
  messages,
  submitState,
  currentChannelId,
  modalState,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...currentChannelIdActions,
  ...modalAction,
  ...submitActions,
};

const asyncActions = {
  submitAsyncAction,
};

export { actions, asyncActions };

import { combineReducers } from 'redux';
import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import submitState, { actions as submitActions } from './submitState';
import submitAsyncAction from './submitAsyncAction';
import error, { actions as errorActions } from './error';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';
import modalState, { actions as modalAction } from './modalState';

export default combineReducers({
  channels,
  messages,
  submitState,
  currentChannelId,
  modalState,
  error,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...currentChannelIdActions,
  ...modalAction,
  ...submitActions,
  ...errorActions,
};

const asyncActions = {
  submitAsyncAction,
};

export { actions, asyncActions };

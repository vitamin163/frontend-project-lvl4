import { combineReducers } from 'redux';
import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import removeState, { actions as removeActions } from './removeState';
import submitAsyncAction from './submitAsyncAction';
import error, { actions as errorActions } from './error';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';
import modalState, { actions as modalAction } from './modalState';

export default combineReducers({
  channels,
  messages,
  removeState,
  currentChannelId,
  modalState,
  error,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...currentChannelIdActions,
  ...modalAction,
  ...removeActions,
  ...errorActions,
};

const asyncActions = {
  submitAsyncAction,
};

export { actions, asyncActions };

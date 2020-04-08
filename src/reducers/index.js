import { combineReducers } from 'redux';
import channelsReducer from './channelsSlice';
import currentChannelIdReducer from './currentChannelIdSlice';

export default combineReducers({
  channels: channelsReducer,
  currentChannelId: currentChannelIdReducer,
});

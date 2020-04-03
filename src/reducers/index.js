import { combineReducers } from 'redux';
// import _ from 'lodash';
import { handleActions } from 'redux-actions';
// import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelsState = handleActions({
  [actions.initState](state, { payload: { channels } }) {
    const allIds = channels.map((channel) => channel.id);
    const byId = channels.reduce((acc, channel) => ({ ...acc, [channel.id]: channel }), {});
    return { byId, allIds };
  },
}, { byId: {}, allIds: [] });

export default combineReducers({ channelsState });

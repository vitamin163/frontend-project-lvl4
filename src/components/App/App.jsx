import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channelsState,
  };
  return props;
};

class App extends React.PureComponent {
  render() {
    const { channels } = this.props;
    const { byId, allIds } = channels;
    return (
      <ul>
        {allIds.map((id) => (
          <li key={id}>{byId[id].name}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(App);

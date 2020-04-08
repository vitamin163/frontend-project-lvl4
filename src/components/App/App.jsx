import React from 'react';
// import { connect } from 'react-redux';
import Channels from '../Channels/Channels';


export default class App extends React.PureComponent {
  render() {
    return (
      <div className="overflow-auto">
        <Channels />
      </div>
    );
  }
}

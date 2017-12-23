import React from 'react';
import { View } from 'react-native';

class VibrancyView extends React.Component {
  render() {
    console.error("VibrancyView is not implemented for the DOM");
    return <View {...this.props} />;
  }
}

module.exports = VibrancyView;
import React from 'react';
import { View } from 'react-native';

class BlurView extends React.Component {
  render() {
    console.error("BlurView is not implemented for the DOM");
    return <View {...this.props} />;
  }
}

module.exports = BlurView;
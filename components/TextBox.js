import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

class FriendBox extends React.Component {
  state = {
    active: false
  };
  render() {
    const { name } = this.props;

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          padding: 20,
          paddingTop: 20,
          paddingBottom: 20,
          width: 300,
          marginTop: 10,
          marginBottom: 10,
          alignSelf: 'center'
        }}
        onPress={() => this.setState({ active: !this.state.active })}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            opacity: !this.state.active ? 0 : 0.5,
            borderRadius: 8
          }}
        />
        <Text style={{ color: 'white' }}>{this.props.note}</Text>
      </TouchableOpacity>
    );
  }
}

export default FriendBox;

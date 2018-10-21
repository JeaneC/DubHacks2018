import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { updateMessage, increaseCounter } from '../store/actions';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in'

    // Hiding the header will also need proper margin displacement (for the iPhone X top )
    // header: null
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Button
          title="Sign in!"
          onPress={() => this.props.navigation.navigate('App')}
        />
        <Button title="Change Message" onPress={this.props.updateMessage} />
        <Button
          title="Redux Counter Increase"
          onPress={this.props.increaseCounter}
        />
        <Text>The message is : {this.props.message} </Text>
        <Text>The counter is : {this.props.counter}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ main }, ownProps) => {
  console.log(main);
  return main;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMessage: () => {
      dispatch(updateMessage('Hello World'));
    },
    increaseCounter: () => {
      dispatch(increaseCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);

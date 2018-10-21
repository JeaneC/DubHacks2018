import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Textarea } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../assets/homeIcons/Back.png';
import GoNextIcon from '../assets/GoNextIcon.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import ActionItem from '../components/ActionItem';
import BotRight from '../assets/BotRight.png';

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    marginTop: 20
  },
  paragraph: {
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  header: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 60,
    paddingLeft: 25,
    paddingRight: 25
  },
  bold: {
    fontWeight: 'bold'
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10
  }
};

class Settings extends Component {
  static navigationOptions = {};

  state = {
    height: 40
  };

  updateSize = height => {
    this.setState({
      height
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#676767', '#CECECE']}
          style={styles.gradientContainer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-start',
              marginBottom: 20,
              padding: 20
            }}
            onPress={() => this.props.navigation.navigate('DubHome')}
          >
            <Image source={Back} />
          </TouchableOpacity>
          <ActionItem
            note="Language Settings"
            move={() => this.props.navigation.navigate('Languages')}
          />
          <ActionItem
            note="Location Sharing"
            move={() => console.log('Nothing')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Settings;

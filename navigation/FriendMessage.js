import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../assets/homeIcons/Back.png';
import GoNextIcon from '../assets/GoNextIcon.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import TextBox from '../components/TextBox';

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
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40
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

class NewReport extends Component {
  static navigationOptions = {};

  processMessage = () => {
    this.props.navigation.navigate('DubHome');
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#FF6363', '#E966FE']}
          style={styles.gradientContainer}
        />
        <TouchableOpacity
          style={{
            marginTop: 25,
            alignSelf: 'flex-start',
            marginBottom: 30,
            padding: 20,
            paddingBottom: 0
          }}
          onPress={() => this.props.navigation.navigate('ContactFriend')}
        >
          <Image source={Back} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          <Text style={styles.header}>I'd like to tell my friends...</Text>
          <TextBox note="Hey, please pick me up at this location as soon as you can." />
          <TextBox note="Hey, please call me and pretend it is an emergency. I need to leave as soon as possible." />
          <TextBox note="Custom Message" />
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginTop: 40, marginRight: 40 }}
            onPress={this.processMessage}
          >
            <Image source={GoNextIcon} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default NewReport;

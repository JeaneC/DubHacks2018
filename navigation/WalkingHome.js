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
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
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
  },
  miniH: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20
  },
  miniP: { color: 'white', paddingLeft: 25, paddingRight: 25, marginBottom: 35 }
};

class Where1 extends Component {
  static navigationOptions = {};

  state = {
    height: 40
  };

  updateSize = height => {
    this.setState({
      height
    });
  };

  moveOn = val => {
    this.props.navigation.navigate('Where2');
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#8AE1FF', '#8FA6FF']}
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
              marginTop: 20,
              alignSelf: 'flex-start',
              padding: 20
            }}
            onPress={() => this.props.navigation.navigate('PastReports')}
          >
            <Image source={Back} />
          </TouchableOpacity>
          <Text style={styles.header}>
            Walking home after work on August 18th, 2018
          </Text>

          <Text style={styles.miniH}>When</Text>
          <Text style={styles.miniP}>August 18th, 2018, 12:00am</Text>

          <Text style={styles.miniH}>Where</Text>
          <Text style={styles.miniP}>52nd ST & Brooklyn Ave, Seattle WA</Text>

          <Text style={styles.miniH}>Describe The Incident</Text>
          <Text style={styles.miniP}>
            I was finishing up my closing shift at work and a man followed me
            home from work. He touched my shoulder but I had pepper spray. After
            seeing my pepper spray, he immediately left and I rushed into my
            building.
          </Text>

          <Text style={styles.miniH}>Did you contact anyone?</Text>
          <Text style={styles.miniP}>
            Yes, I contacted the National Sexual Assault line.
          </Text>

          <ActionItem
            note="Yes"
            move={() => this.props.navigation.navigate('DubHome')}
          />
          <ActionItem
            note="No"
            move={() => this.props.navigation.navigate('DubHome')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Where1;

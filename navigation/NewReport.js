import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../assets/homeIcons/Back.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    color: '#5C5C5C',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
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
    fontSize: 24,
    color: 'white'
  },
  info: {
    marginTop: 10,
    color: 'white',
    fontSize: 16
  },
  bold: {
    fontWeight: 'bold'
  }
};

class NewReport extends Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#FF6363', '#E966FE']}
          style={styles.gradientContainer}
        />
        <TouchableOpacity
          style={{ marginTop: 15, alignSelf: 'flex-start', marginLeft: -15 }}
          onPress={() => this.props.navigation.navigate('DubHome')}
        >
          <Image source={Back} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.paragraph}>
            <Text style={styles.header}>
              National Sexual Assault Telephone Hotline
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NewReport;

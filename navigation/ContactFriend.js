import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../assets/homeIcons/Back.png';
import GoNextIcon from '../assets/GoNextIcon.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import FriendBox from '../components/FriendBox';

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
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
    fontSize: 32,
    color: 'white',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
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
            marginBottom: 10,
            padding: 20,
            paddingBottom: 0
          }}
          onPress={() => this.props.navigation.navigate('ReportNow')}
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
          <Text style={styles.header}>Select Friends</Text>
          <View style={styles.row}>
            <FriendBox name="Henry Smith" />
            <FriendBox name="Michelle Lin" />
          </View>
          <View style={styles.row}>
            <FriendBox name="Ella Simpson" />
            <FriendBox name="Molly Baker" />
          </View>
          <View style={styles.row}>
            <FriendBox name="Sam Lincoln" />
            <FriendBox name="Johnson Ho" />
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginTop: 40, marginRight: 40 }}
            onPress={() => this.props.navigation.navigate('FriendMessage')}
          >
            <Image source={GoNextIcon} />
            {/* <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
              Continue
            </Text> */}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default NewReport;

import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import NewReport from '../assets/homeIcons/NewReport.png';
import ReportNow from '../assets/homeIcons/ReportNow.png';
import Friends from '../assets/homeIcons/Friends.png';
import Settings from '../assets/homeIcons/Settings.png';
import PastReports from '../assets/homeIcons/PastReports.png';
import Resources from '../assets/homeIcons/Resources.png';

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

class ResourcesScreen extends Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#8CBEF9', '#6DF67A']}
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
            <Text style={styles.info}>
              <Text style={styles.bold}>800.656.HOPE (4673) </Text>
              {'\n'}
              Call to be connected with a trained staff member from a sexual
              assault service provider in your area.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.header}>
              National Sexual Violence Resource Center
            </Text>
            <Text style={styles.info}>
              <Text style={styles.bold}>https://www.nsvrc.org/</Text>
              {'\n'}
              The NSVRC offers up-to-date research and resources on
              sexual-violence recovery, including news, projects, special
              collections, publications, and a library.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.header}>
              National Domestic Violence Hotline
            </Text>
            <Text style={styles.info}>
              <Text style={styles.bold}>1-800-799-7233</Text>
              {'\n'}
              The National Domestic violence hotline is free, confidential, and
              available 24/7/365 in English and Spanish.
            </Text>
          </View>

          <View style={styles.paragraph}>
            <Text style={styles.header}>Safe Horizon</Text>
            <Text style={styles.info}>
              <Text style={styles.bold}>1-800-621-HOPE (4673)</Text>
              {'\n'}
              Safe Horizon has a free, 24/7/365, confidential national hotline
              in English and Spanish for domestic violence survivors; rape,
              incest, abuse, and sexual assault survivors; and victims of other
              violent crimes.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.header}>1in6</Text>
            <Text style={styles.info}>
              <Text style={styles.bold}>https://1in6.org/</Text>
              {'\n'}
              1in6 is a resource for men who have experienced unwanted or
              abusive sexual experiences. They offer recovery information for
              men, men’s stories of trauma and recovery, 24/7/365 online chat
              support with trained advocates through their website, and
              anonymous online support groups facilitated by a professional
              counselor.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ResourcesScreen;

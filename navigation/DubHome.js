import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import NewReport from '../assets/homeIcons/NewReport.png';
import ReportNow from '../assets/homeIcons/ReportNow.png';
import Friends from '../assets/homeIcons/Friends.png';
import Settings from '../assets/homeIcons/Settings.png';
import PastReports from '../assets/homeIcons/PastReports.png';
import Resources from '../assets/homeIcons/Resources.png';

import { createStackNavigator } from 'react-navigation';

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
};

class DubHome extends Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Haven</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('When1')}
          >
            <Image source={NewReport} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ReportNow')}
          >
            <Image source={ReportNow} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={Friends} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Resources')}
          >
            <Image source={Resources} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={PastReports} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}
          >
            <Image source={Settings} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(DubHome);

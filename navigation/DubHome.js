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
import { connect } from 'react-redux';

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
    const {
      uFriends,
      uNewReport,
      uPastReports,
      uReportNow,
      uResources,
      uSettings
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Haven</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('When1')}
          >
            <Image source={uNewReport} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ReportNow')}
          >
            <Image source={uReportNow} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={uFriends} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Resources')}
          >
            <Image source={uResources} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PastReports')}
          >
            <Image source={uPastReports} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}
          >
            <Image source={uSettings} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { language } = state.main;
  let uNewReport = NewReport;
  let uReportNow = ReportNow;
  let uFriends = Friends;
  let uSettings = Settings;
  let uPastReports = PastReports;
  let uResources = Resources;

  if (language == 1) {
    console.log('Speaking English');
  } else if (language == 2) {
    uNewReport = require('../assets/Spanish/NewReport.png');
    uFriends = require('../assets/Spanish/Friends.png');
    uPastReports = require('../assets/Spanish/PastReports.png');
    uResources = require('../assets/Spanish/Resources.png');
    uSettings = require('../assets/Spanish/Settings.png');
    uReportNow = require('../assets/Spanish/ReportNow.png');
    console.log('Speaking Spanish');
  } else if (language == 3) {
    console.log('Speaking French');
    uNewReport = require('../assets/French/NewReport.png');
    uFriends = require('../assets/French/Friends.png');
    uPastReports = require('../assets/French/PastReports.png');
    uResources = require('../assets/French/Resources.png');
    uSettings = require('../assets/French/Settings.png');
    uReportNow = require('../assets/French/ReportNow.png');
  }

  return {
    language,
    uNewReport,
    uFriends,
    uPastReports,
    uResources,
    uSettings,
    uReportNow
  };
};

export default connect(mapStateToProps)(DubHome);

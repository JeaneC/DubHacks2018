import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../assets/homeIcons/Back.png';
import PhoneHelp from '../assets/PhoneHelp.png';
import OnlineHelp from '../assets/OnlineHelp.png';
import FriendHelp from '../assets/FriendHelp.png';
import ActionItem from '../components/ActionItem';

import { createStackNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import { LinearGradient } from 'expo';

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
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 20
  },
  info: {
    marginTop: 10,
    color: 'white',
    fontSize: 16
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
  imageText: {
    color: 'white',
    fontSize: 17,
    width: 150
  },
  helpImage: {
    marginRight: 40
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
            marginTop: 20,
            alignSelf: 'flex-start',
            marginBottom: 20,
            padding: 20
          }}
          onPress={() => this.props.navigation.navigate('DubHome')}
        >
          <Image source={Back} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%'
          }}
        >
          <Text style={styles.header}>{this.props.header1}</Text>

          <View style={styles.paragraph} />

          <View style={styles.contact}>
            <TouchableOpacity>
              <Image source={PhoneHelp} style={styles.helpImage} />
            </TouchableOpacity>
            <Text style={styles.imageText}>
              {'Seattle Police\nDepartment\n(206) 543-0507'}
            </Text>
          </View>
          <View style={styles.contact}>
            <TouchableOpacity>
              <Image source={OnlineHelp} style={styles.helpImage} />
            </TouchableOpacity>
            <Text style={styles.imageText}>
              {'National Sexual\nAssault Online\nHotLine'}
            </Text>
          </View>
          <View style={styles.contact}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ContactFriend')}
            >
              <Image source={FriendHelp} style={styles.helpImage} />
            </TouchableOpacity>
            <Text style={styles.imageText}>{'Contact A Friend'}</Text>
          </View>
          <Text style={[styles.header, { marginTop: 20, marginBottom: 20 }]}>
            {this.props.header2}
          </Text>
          <ActionItem
            note="October 21, 2018"
            move={() => this.props.navigation.navigate('ReportTo')}
          />
          <ActionItem
            note="September 27, 2018"
            move={() => this.props.navigation.navigate('ReportTo')}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { language } = state.main;
  let header1 = 'Immediate Help';
  let header2 = 'Report Past Entries';

  if (language == 1) {
    console.log('Speaking English');
  } else if (language == 2) {
    console.log('Speaking Spanish');
    header1 = 'Ayuda Inmediata';
    header2 = 'Reportar Entradas Pasadas';
  } else if (language == 3) {
    console.log('Speaking French');
    header1 = 'Aide Immédiate';
    header2 = 'Signaler les entrées passées';
  }

  return {
    language,
    header1,
    header2
  };
};

export default connect(mapStateToProps)(NewReport);

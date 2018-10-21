import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Textarea } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Back from '../../assets/homeIcons/Back.png';
import GoNextIcon from '../../assets/GoNextIcon.png';

import { createStackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';
import BotRight from '../../assets/BotRight.png';

import ActionItem from '../../components/ActionItem';

import { connect } from 'react-redux';
import { updateFeelsBefore } from '../../store/actions';

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

class People1 extends Component {
  static navigationOptions = {};

  state = {
    height: 40
  };

  updateSize = height => {
    this.setState({
      height
    });
  };

  moveOn = () => {
    this.props.navigation.navigate('Where2');
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#5D8CFD', '#ED8DFE']}
          style={styles.gradientContainer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          <Text style={styles.header}>
            How did you feel during the incident
          </Text>

          <View
            style={{
              borderColor: 'white',
              borderWidth: 2,
              marginLeft: 40,
              marginRight: 40,
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10
            }}
          >
            <Textarea
              bordered
              placeholder=""
              bordered={false}
              style={{
                height: this.state.height,
                color: 'white',
                fontSize: 16
              }}
              onContentSizeChange={e =>
                this.updateSize(e.nativeEvent.contentSize.height)
              }
              onChangeText={value => this.setState({ value })}
              value={this.state.value}
            />
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginRight: 30,
              marginTop: 50
            }}
            onPress={async () => {
              await this.props.updateFeelsBefore(this.state.value);
              this.props.navigation.navigate('Feels2');
            }}
          >
            <Image source={BotRight} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFeelsBefore: val => {
      dispatch(updateFeelsBefore(val));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People1);

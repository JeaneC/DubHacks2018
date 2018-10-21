import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class LayoutExample extends Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <Container>
        <Header />
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

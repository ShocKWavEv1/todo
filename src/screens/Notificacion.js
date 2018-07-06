import React, { Component } from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Platform} from 'react-native';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;
var type= '';
export default class Notificacion extends React.Component {

  componentWillMount(){
    type = this.props.type;
  }

  componentDidMount(){
  }

  render() {
    return (
      <View style={{ height: Platform.OS === 'ios' ? height/10 : height/14, width: width, elevation: 6,  alignItems: 'center', justifyContent: 'center', shadowOpacity: 0.4, shadowRadius: 5, shadowOffset: { height: 4, width: 0 }, backgroundColor: this.props.type === 'success' ? '#4CAF50' : '#FF1744' }}>
        <Text style={styles.content}>{this.props.descripcion}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold'
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    fontSize: height/45,
    fontFamily: 'Montserrat-Regular',
    marginTop: Platform.OS === 'ios' ? 0 : 0
  },
});

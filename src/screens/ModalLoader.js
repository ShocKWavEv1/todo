import React, { Component } from 'react';
import { AppRegistry, Animated, StyleSheet, Text, View, Alert, Dimensions, TouchableHighlight, Image, ScrollView, UIManager, LayoutAnimation, TouchableOpacity, TextInput, Platform, DatePickerAndroid, DatePickerIOS, resizeMode, ToastAndroid, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;

export default class ModalLoader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      damping: 1-0.7,
      tension: 300,
    };
  }

  static navigatorStyle = {
      navBarHidden: true, // make the nav bar hidden
  };

  getActivity(){
      if(Platform.OS === 'android'){
          return(
              <ActivityIndicator size={80} color="#FF2D78" />
          );
      }
      else{
          return(
              <ActivityIndicator size="large" color="#FF2D78" />
          );
      }
  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.container}>
          {this.getActivity()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

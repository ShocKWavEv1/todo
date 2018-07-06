import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform, ToastAndroid } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, List, ListItem, Fab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;
export default class LightBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReport: false,
      storagePermission: ''
    }
  }

  closeLightBox(){
    this.props.navigator.dismissLightBox();
  }

  showNotification(texto, type){
    this.props.navigator.showInAppNotification({
    screen: "Notifications", // unique ID registered with Navigation.registerScreen
    passProps: { titulo: '', descripcion: texto, type: type }, // simple serializable object that will pass as props to the in-app notification (optional)
    autoDismissTimerSec: 1 // auto dismiss notification in seconds
    });
  }

  componentDidMount(){
    //alert(this.props.idMiPerfil + '  ' + this.props.onUnmount)
  }

  componentWillUnmount(){
    //this.props.onUnmount();
  }

  render() {
    return (
      <View style={styles.container}>
          <Grid>
              <Row size={20} style={{ height: height, width: width, backgroundColor: '#E91E63', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: '#fff' }} >
                  <Text style={{ color: '#fff', fontSize: height/32 }} >Crea una nueva Tarea</Text>
              </Row>
              <Row size={64} style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                  <Col style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: '#212121', fontSize: height/48, textAlign: 'center', marginLeft: 20, marginRight: 20 }} >Ingresa aquí el nombre que describa tu tarea a realizar.</Text>
                  </Col>
              </Row>
              <Row size={16} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#b22222' }}>
                  <Col size={50} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#C2185B' }} >
                    <Text style={{ color: '#fff', fontSize: height/34 }}>Cancelar</Text>
                  </Col>
                  <Col size={50} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#E91E63' }} >
                    <Text style={{ color: '#fff', fontSize: height/34 }}>Crear</Text>
                  </Col>
              </Row>
          </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height/2,
    width: width/1.1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  content: {
    marginTop: 8,
  },
});
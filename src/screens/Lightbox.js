import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, Platform, ToastAndroid, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, List, ListItem, Fab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;
export default class LightBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReport: false,
      promoText: 'Ingresa aquí el nombre que describa tu tarea a realizar.',
      tarea: ''
    }
  }

  closeLightBox(){
    this.props.navigator.dismissLightBox();
  }

  showNotification(texto, type){
    this.props.navigator.showInAppNotification({
    screen: "Notificacion", // unique ID registered with Navigation.registerScreen
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

  showStatus(err){
    Alert.alert(
    'Error',
    `${err}`,
    [
        {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: false }
    )
  }

  handleTarea(){
      if(this.state.tarea == ''){
          this.showStatus('Debes agregar una descripción para la tarea');
      }
      else if(this.state.tarea.length <= 4 ){
          this.showStatus('La descripción de la tarea debe ser mayor a 4 caracteres');
      }
      else{
          this.closeLightBox();
          this.props.onUnmount({tarea: this.state.tarea, estatus: 'Pendiente'})
      }
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
                    <Text style={{ color: '#212121', fontSize: height/38, textAlign: 'center', marginLeft: 20, marginRight: 20 }} >{this.state.promoText}</Text>
                    <TextInput underlineColorAndroid='transparent' placeholder="Correo eléctronico" placeholderTextColor='#212121' keyboardType='email-address'
                      returnKeyType="done"
                      autoCapitalize = 'none'
                      onChangeText={(text) => this.setState({tarea: text})}
                      style={{marginTop: height/18, fontFamily: 'BarlowCondensed-Regular', elevation: 4, shadowOpacity: 0.3, shadowRadius: 5, shadowOffset: { height: 4, width: 0 }, height: height/15, width: width/1.3, borderColor: '#fff', paddingLeft: 20, borderWidth: 1, backgroundColor: '#fff', borderRadius: 5, color:'#757575', fontSize: height/48  }}
                    />
                  </Col>
              </Row>
              <Row size={16} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#b22222' }}>
                  <TouchableNativeFeedback onPress={() => this.closeLightBox()} >
                    <Col size={50} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#C2185B', height: height }} >
                        <Text style={{ color: '#fff', fontSize: height/34 }}>Cancelar</Text>
                    </Col>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={() => this.handleTarea()} >
                    <Col size={50} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#E91E63', height: height }} >
                        <Text style={{ color: '#fff', fontSize: height/34 }}>Crear</Text>
                    </Col>
                  </TouchableNativeFeedback>
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
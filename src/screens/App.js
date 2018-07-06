/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, resizeMode, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      this.state = {
          errorText: 'Parece que aún no tienes ninguna tarea',
          data: [],
          isEmpty: true,
      }
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'add') { // this is the same id field from the static navigatorButtons definition
        this.showLightBox();
      }
    }
  }

  showLightBox(){
    this.props.navigator.showLightBox({
    screen: "Lightbox", // unique ID registered with Navigation.registerScreen
    passProps: {}, // simple serializable object that will pass as props to the lightbox (optional)
    style: {
    backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
    backgroundColor: "rgba(0,0,0,.7)", // tint color for the background, you can specify alpha here (optional)
    tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
    },
    adjustSoftInput: "resize", // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
    });
  }

  renderNoData(){
      return(
        <View style={styles.container}>
            <View style={{ width: width/1.4, height: height/3, alignItems: 'center', justifyContent: 'center', marginTop: -height/6 }} >
                <Image source={require('../assets/to-do-list.png')} style={{ resizeMode: Image.resizeMode.contain, width: width/2 }}/>
            </View>
            <Text style={{ fontSize: height/22, textAlign: 'center', color: '#212121', marginVertical: height/40 }} >{this.state.errorText}</Text>
        </View>
      );
  }

  _renderItem = ({item, index}) => (
      <Lista
          item={item}
          index={index}
          onUnmount={() => this.handleRefresh()}
      />
  );

  shouldComponentUpdate(){
    return true;
  }

  renderData(){
      return(
        <FlatList style={{ borderColor: 'transparent', backgroundColor: '#f8f8f8', marginTop: 0 }}
          data={this.state.data}
          renderItem={this._renderItem}
          ref="listRef"
          disableVirtualization={true}
          removeClippedSubviews={true}
          shouldComponentUpdate={true}
          keyExtractor={(item, index) => index + " "}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={7}
        />   
      );
  }

  render() {
    return (
        this.state.isEmpty === true ? this.renderNoData() : this.renderData()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
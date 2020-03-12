/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RNEasyTopNavBar from 'react-native-easy-top-nav-bar';

export default class App extends Component{
  getLeftButton() {
    return <View style={{paddingLeft: 10}}>
      <Text style={{color: '#fff'}}>back</Text>
    </View>
  }
  getRightButton() {
    return <View style={{paddingRight: 10}}>
      <Text style={{color: '#fff'}}>more</Text>
    </View>
  }
  render(){
    return(
        <RNEasyTopNavBar
            title={'this is title'}
            backgroundTheme={'#008489'}
            leftButton={this.getLeftButton()}
            rightButton={this.getRightButton()}
            ellipsizeModeType={'tail'}
        />
    )
  }
}
const styles = StyleSheet.create({

})

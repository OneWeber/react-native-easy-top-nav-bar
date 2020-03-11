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
    return <View>
      <Text style={{color: '#fff'}}>返回</Text>
    </View>
  }
  getRightButton() {
    return <View>
      <Text style={{color: '#fff'}}>筛选</Text>
    </View>
  }
  render(){
    return(
        <RNEasyTopNavBar
            title={'标题标题标题标题标题标题标题标题标题标题标题'}
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

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
  getTitleDialog(){
    return <View>
      <Text>这里是自定义内容区域</Text>
    </View>
  }
  getTitleView() {
    return <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color: '#fff', fontSize:16,fontWeight: 'bold'}}>筛选</Text>
    </View>
  }
  render(){
    return(
        <RNEasyTopNavBar
            title={'this is title'}
            backgroundTheme={'#008489'}
            titleDialog={this.getTitleDialog()}
            titleView={this.getTitleView()}
            leftButton={this.getLeftButton()}
            rightButton={this.getRightButton()}
            ellipsizeModeType={'tail'}
        />
    )
  }
}
const styles = StyleSheet.create({

})

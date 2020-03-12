
# react-native-easy-top-nav-bar

![GitHub set up](https://github.com/OneWeber/react-native-easy-top-nav-bar/raw/master/img/git1.jpg)
![GitHub set up](https://github.com/OneWeber/react-native-easy-top-nav-bar/raw/master/img/navdialog.jpg)

## Getting started

`$ npm install react-native-easy-top-nav-bar --save`

### Mostly automatic installation

`$ react-native link react-native-easy-top-nav-bar`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-top-nav-bar` and add `RNEasyTopNavBar.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEasyTopNavBar.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNEasyTopNavBarPackage;` to the imports at the top of the file
  - Add `new RNEasyTopNavBarPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-top-nav-bar'
  	project(':react-native-easy-top-nav-bar').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-top-nav-bar/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-top-nav-bar')
  	```
    
## Show some message    
  ```js
  import React, {Component} from 'react';
  import {
    View,
    Text,
  } from 'react-native';
  import RNEasyTopNavBar from 'react-native-easy-top-nav-bar';
  class EasyBar extend Component{
  getLeftButton() {
    return <View>
      <Text style={{color: '#fff'}}>back</Text>
    </View>
  }
  getRightButton() {
    return <View>
      <Text style={{color: '#fff'}}>more</Text>
    </View>
  }
    render() {
      return(
        <View style={{flex: 1}}>
           <RNEasyTopNavBar
            title={'this is title'}
            backgroundTheme={'#008489'}
            leftButton={this.getLeftButton()}
            rightButton={this.getRightButton()}
            ellipsizeModeType={'tail'}
        />
        </View>
      )
    }
  }
```  
    
    
## Props

Property | Default | Description
--------- | ------------- | ------------
title | "" | Navigation title
titleColor | "#fff" | Color of title
backgroundTheme | "#999" | The dominant color of the navigation
ellipsizeModeType | "head" | The omission of words,including "tail","clip","head","middle"
leftButton | | Navigation custom left area content
rightButton| | Navigation custom right area content
style| | Custom style


## Usage
```javascript
import RNEasyTopNavBar from 'react-native-easy-top-nav-bar';

// TODO: What to do with the module?
RNEasyTopNavBar;




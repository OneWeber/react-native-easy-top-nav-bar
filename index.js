import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ViewPropTypes, Platform, StatusBar} from 'react-native'
import {PropTypes} from 'prop-types'
const NAV_BAR_HEIGHT_IOS = 44;//导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 50;//导航栏在Android中的高度
const NAV_BAR_HEIGHT = Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID;
export default class RNEasyTopNavBar extends Component{
    static propTypes = {
        style: ViewPropTypes.style,
        title: PropTypes.string,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        titleColor: PropTypes.string,
        backgroundTheme: PropTypes.string,
    }
    static defaultProps = {
        titleColor: '#fff',
        backgroundTheme: '#999',
        statusBar: {
            barStyle: 'light-content',
            hidden: false,
        }
    }
    getButtonElement(data) {
        return(
            <View style={styles.navBarButton}>
            {data ? data : null}
            </View>
    )
    }
    render() {
        let statusBar = !this.props.statusBar.hidden?
    <View>
        <StatusBar
        {...this.props.statusBar}
        />
        </View> : null
        let titleView = <Text ellipsizeMode="head" numberOfLines={1} style={[styles.title, {color: this.props.titleColor}]}>
        {this.props.title}
    </Text>
        let content = <View style={styles.navBar}>
            {this.getButtonElement(this.props.leftButton)}
            <View style={styles.navBarTitle}>
            {titleView}
            </View>
        {this.getButtonElement(this.props.rightButton)}
    </View>
        return(
            <SafeAreaView style={{backgroundColor: this.props.backgroundTheme, width: '100%'}}>
    <View style={[this.props.style, {backgroundColor: this.props.backgroundTheme}]}>
        {statusBar}
        {content}
    </View>
        </SafeAreaView>
    )
    }
}
const styles = StyleSheet.create({
    navBarButton: {
        alignItems: 'center'
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        height: NAV_BAR_HEIGHT,
    },
    title: {
        fontSize: 20
    },
    navBarTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
})



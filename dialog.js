import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableOpacity,
    DeviceInfo,
    ViewPropTypes
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {PropTypes} from 'prop-types'
export default class RNEasyDialog extends Component{
    static propTypes = {
        layoutVal: PropTypes.number,
        content: PropTypes.element,
        interval: PropTypes.number,
        backdropColor: PropTypes.string,
        style: ViewPropTypes.style,
        arrowSize: PropTypes.number,
        paddingInterval: PropTypes.number,
        maxWidth: PropTypes.number,
        contentPadding: PropTypes.number,
        positionStyle: PropTypes.string
    }
    static defaultProps = {
        layoutVal: 0,
        interval: 5,
        backdropColor: 'rgba(0,0,0,.1)',
        arrowSize: 36,
        paddingInterval: 0,
        maxWidth: 200,
        contentPadding: 5,
        positionStyle: 'center'
    }
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            arrowPosition: 'center'
        }
    }
    show() {
        this.setState({
            visible: true
        })
    }
    close() {
        this.setState({
            visible: false
        })
    }
    getContent(data) {
        return <View>
            {data ? data : null}
        </View>
    }
    render(){
        const {onClose} = this.props
        return(
            <View>
                <TouchableOpacity
                    onPress={() => this.show()}
                >
                    {this.props.children}
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={this.state.visible}

                    onRequestClose={() => onClose}
                >
                    <TouchableOpacity
                        style={[styles.container, {
                            backgroundColor: this.props.backdropColor,
                            position: 'relative'
                        }]}
                        onPress={() => this.close()}
                    >
                        <View style={{
                            position: 'absolute',
                            top: this.props.layoutVal ? (this.props.layoutVal + this.props.interval) : this.props.interval,
                            left:0,
                            right:0,
                            justifyContent:this.props.positionStyle === "center" ? 'center' : this.props.positionStyle === 'left' ? 'flex-start' : 'flex-end',
                            alignItems: this.props.positionStyle === "center" ? 'center' : this.props.positionStyle === 'left' ? 'flex-start' : 'flex-end',
                            paddingLeft: this.props.paddingInterval,
                            paddingRight: this.props.paddingInterval
                        }}>
                            <View style={[styles.arrowCon, {
                                justifyContent:this.props.positionStyle === "center" ? 'center' : this.props.positionStyle === 'left' ? 'flex-start' : 'flex-end'
                            }]}>
                                <MaterialIcons
                                    name={'arrow-drop-up'}
                                    size={this.props.arrowSize}
                                    style={[styles.arrow,{
                                        marginLeft: 0,
                                        marginRight: 0
                                    }]}
                                />
                            </View>

                            <View
                                style={[this.props.style,styles.diaLoginContent, {maxWidth: this.props.maxWidth, padding: this.props.contentPadding}]}
                            >
                                {this.getContent(this.props.content)}
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop:DeviceInfo.isIphoneX_deptrcated ? 30 : 0
    },
    arrow: {
        color: '#fff',
        padding: 0,
        margin: -15,
        marginTop: 0
    },
    diaLoginContent: {
        backgroundColor: '#fff',
        borderRadius: 3,
        marginRight: 3,
    },
    arrowCon: {
        width:'100%',
        height:20,
        alignItems: 'center',
        flexDirection:'row'
    }
})

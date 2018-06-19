import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableHighlight,
    Text,
    Image,
    StatusBar,
    AsyncStorage,
    ToastAndroid,
    WebView
} from 'react-native';
import io from 'socket.io-client';
import styles from './detailMainStyles';
export default class detail extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {
            userName: 'null',
            userPwd: 'null',
            userId: 'null',
            userType: 'null'
        }
    }   
    render() {
        return (                       
                        <View style={{ width:'100%',height:'100%' }}>
                        <WebView
                            automaticallyAdjustContentInsets={false}
                            style={{ width:'100%',height:'100%' }}
                            allowsInlineMediaPlayback={true}
                            source={{ uri: "https://react-native-webrtc.herokuapp.com" }}
                            // source={{ uri: "https://www.baidu.com" }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            decelerationRate="normal"
                            startInLoadingState={true}
                        />
                        </View>
        )
    }
}
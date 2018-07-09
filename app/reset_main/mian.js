import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    LayoutAnimation,
    AsyncStorage,
    Alert,
    Fetch,
    NativeModules,
} from 'react-native';
import { styles, win } from './mainStyle'
import init from 'react_native_mqtt';
import Bottom from '../tabNavigation/tabNavigator'
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class Main extends Component {
    constructor(props) {
        super(props);
        // StatusBar.setBackgroundColor('#222', true);
        StatusBar.setHidden(true)
        this.state = {
            client: new Paho.MQTT.Client('47.101.60.213', 10010, 'Client1'),
            userName: null,
            userPwd: null,
            userId: null,
            userType: null,
            s1: '',
            s2: '',
            s3: '',
            s4: '',
            s5: 80,
            s6: '',
            loadS: 0,
            width: win.height * 0.18,
            height: win.height * 0.18,
            top: win.height * ((1 / 4) - 0.18) / 2,
            left: win.height * 0.035,
            borderRadius: win.height * 0.18 / 2,
        }
    }
    changeSize = () => {
        this.setState({
            width: win.height * 0.16,
            height: win.height * 0.16,
            top: win.height * ((1 / 4) - 0.16) / 2,
            left: win.height * 0.04,
            borderRadius: win.height * 0.16 / 2,
        })
        LayoutAnimation.spring();
        setTimeout(() => {
            this.setState({
                width: win.height * 0.18,
                height: win.height * 0.18,
                top: win.height * ((1 / 4) - 0.18) / 2,
                left: win.height * 0.035,
                borderRadius: win.height * 0.18 / 2,
            })
            LayoutAnimation.spring();
        }, 10)
        return;
    }
    componentWillMount() {
        setInterval(this.changeSize, 800)
    }
    componentDidMount() {

        this.state.client.connect({
            onSuccess: () => {
                s2: data.BloodHData,                // Alert.alert('success');
                    this.state.client.subscribe("IMUT_CaiNiaoLab", {
                        qos: 0, onSuccess: (payload) => {

                            console.log(payload);
                        }
                    })
            }, useSSL: false
        });
        let self = this;
        this.state.client.onMessageArrived = (message) => {
            console.log("onMessageArrived:" + message.payloadString);
            let data = JSON.parse(message.payloadString);
            self.setState({
                s1: data.BodyData,
                s2: data.BloodHData,
                s3: data.BloodLData,
                s4: data.EnvTData,
                s5: 80,
                s6: data.GASData
            })
        }
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.topArea} >
                    <View style={styles.userData} >
                        <Text style={styles.topAreaWord} >Name:Ashes</Text>
                    </View>
                    <View style={styles.heartbeatData} >
                        <Text style={styles.topAreaWord} >Evaluate:Heath </Text>
                    </View>
                    <View style={[styles.heartbeat, { borderRadius: this.state.borderRadius, height: this.state.height, width: this.state.width, top: this.state.top, left: this.state.left, backgroundColor: 'rgba(219, 74, 85,.45)' }]} ></View>
            
                    <TouchableOpacity style={styles.heartbeat} onPress={()=>this.props.navigation.navigate('Market')} >
                        <Text style={{ color: '#fff', fontSize: 30 }} >{this.state.s5}</Text>
                        <Text style={{ color: '#fff', fontSize: 10, }} >bit/min</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.midArea} >
                
                    <Text style={styles.doctor} >Attending doctor:Berlin</Text>
                    <TouchableOpacity style={styles.vedioButton} onPress={()=>this.props.navigation.navigate('Vedio')} >
                        <Image style={{height:25,width:25}} source={require('../img/vedio.png')} />
                        <Text style={{ color: '#fff', fontSize: 10, marginLeft:3}} >Call him</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomArea} >
                <Bottom/>
                </View>
            </View>
        )
    }
}
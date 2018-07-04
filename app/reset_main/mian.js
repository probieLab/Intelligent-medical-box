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
import init from 'react_native_mqtt'
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
        StatusBar.setBackgroundColor('#222', true);
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
                    <View style={styles.heartbeat} >
                        <Text style={{ color: '#fff', fontSize: 30 }} >{this.state.s5}</Text>
                        <Text style={{ color: '#fff', fontSize: 10, }} >bit/min</Text>
                    </View>
                </View>
                <View style={styles.midArea} >
                    <Text>success</Text>
                </View>
                <View style={styles.bottomArea} >
                    <View style={styles.bodyDataItem} >
                        <View style={styles.bodyDataItemIconBox}>
                            <Image style={{ height: 30, width: 30 }} source={require('../img/tw.png')} />
                        </View>
                        <View style={styles.bodyDataItemDataBox}>
                            <View style={styles.bodyDataItemDataDirection}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Body temperature</Text>
                                <Text style={{ color: '#777', fontSize: 12,}}>Expectation Vaule 36°C~36.8°C</Text>
                            </View>
                            <View style={styles.bodyDataItemData}>
                                <Text style={styles.bodyDataItemDataWord}>36°C</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyDataItem} >
                        <View style={styles.bodyDataItemIconBox}>
                            <Image style={{ height: 30, width: 30 }} source={require('../img/sw.png')} />
                        </View>
                        <View style={styles.bodyDataItemDataBox}>
                            <View style={styles.bodyDataItemDataDirection}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Indoor temperature</Text>
                                <Text style={{ color: '#777', fontSize: 12 }}>Expectation Vaule 26°C~28.8°C</Text>
                            </View>
                            <View style={styles.bodyDataItemData}>
                                <Text style={styles.bodyDataItemDataWord}>26°C</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyDataItem} >
                        <View style={styles.bodyDataItemIconBox}>
                            <Image style={{ height: 30, width: 30 }} source={require('../img/sww.png')} />
                        </View>
                        <View style={styles.bodyDataItemDataBox}>
                            <View style={styles.bodyDataItemDataDirection}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Outdoor temperature</Text>
                                <Text style={{ color: '#777', fontSize: 12 }}>Expectation Vaule 25°C~30°C</Text>
                            </View>
                            <View style={styles.bodyDataItemData}>
                                <Text style={styles.bodyDataItemDataWord}>26°C</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyDataItem} >
                        <View style={styles.bodyDataItemIconBox}>
                            <Image style={{ height: 30, width: 30 }} source={require('../img/qt.png')} />
                        </View>
                        <View style={styles.bodyDataItemDataBox}>
                            <View style={styles.bodyDataItemDataDirection}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Gas concentration</Text>
                                <Text style={{ color: '#777', fontSize: 12 }}>Expectation Vaule 7~12 g/CM^3</Text>
                            </View>
                            <View style={styles.bodyDataItemData}>
                                <Text style={styles.bodyDataItemDataWord}>8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyDataItem} >
                        <View style={styles.bodyDataItemIconBox}>
                            <Image style={{ height: 30, width: 30 }} source={require('../img/xy.png')} />
                        </View>
                        <View style={styles.bodyDataItemDataBox}>
                            <View style={styles.bodyDataItemDataDirection} >
                                <Text style={{ color: '#fff', fontSize: 18 }}>Blood pressuree</Text>
                                <Text style={{ color: '#777', fontSize: 12 }}>Expectation Vaule 80~110</Text>
                            </View>
                            <View style={styles.bodyDataItemData}>
                                <Text style={styles.bodyDataItemDataWord}>90~110</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
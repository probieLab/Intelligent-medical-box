
import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar,
} from 'react-native';
import {
    styles
} from './loginStyle';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground style={styles.photo} source={require('../img/WD000006LR1.png')}>
            <View style={styles.container}>
            {/* <Image style={styles.photo} source={require('../img/WD000006LR1.png')} /> */}
                <StatusBar/>
                <View style={styles.topArea}>
                    <Image style={styles.header} source={require('../img/header.png')} />
                </View>
                <View style={styles.midArea} >
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(29,156,232,1)' placeholderTextColor='rgba(251,251,251,1)' placeholder='用户名' />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(29,156,232,1)' placeholderTextColor='rgba(251,251,251,1)' placeholder='密码' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight underlayColor='rgba(0,54,164,0.6)' style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={{ color: 'rgba(251,251,251,1)' }}>登录</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='rgba(0,54,164,0.6)' style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{ color: 'rgba(251,251,251,1)' }}>注册</Text>
                        </TouchableHighlight>
                        <TouchableOpacity style={{ height: 20}}>
                            <Text style={{color: 'rgba(29,156,232,1)'}}>忘记密码?</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.bottomArea} >
                    <Text style={{ textAlign:'center',height: 45,color:'rgba(251,251,251,1)'}}>登录即代表阅读并同意</Text>
                    <TouchableHighlight underlayColor='rgba(0,54,164,1)' style={{ height: 45}} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={{ color: 'rgba(29,156,232,1)'}}>服务条款</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

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
    Alert
} from 'react-native';
import {
    styles
} from './loginStyle';

export default class Login extends Component {
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
            <ImageBackground style={styles.photo} source={require('../img/medical.jpg')}>
            <View style={styles.container}>
                <StatusBar/>
                <View style={styles.topArea}>
                    <Image style={styles.header} source={require('../img/WD000006LR1.png')} />
                </View>
                <View style={styles.midArea}>
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(29,156,232,1)' 
                                                            placeholderTextColor='rgba(251,251,251,1)' placeholder='用户名'
                                                            onChangeText={(text) => 
                                                            this.setState({
                                                                userName: text
                                                                })
                                                            } 
                                                             />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(29,156,232,1)'
                                                            placeholderTextColor='rgba(251,251,251,1)' placeholder='密码'
                                                            secureTextEntry
                                                            onChangeText={(text) => 
                                                            this.setState({
                                                                userPwd: text
                                                                })
                                                            }
                                                             />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight underlayColor='rgba(0,54,164,0.6)' style={styles.buttonItem} onPress={()=> 
                            fetch('http://qx.litop.top/userLogin?userName='+this.state.userName+'&userPwd='+this.state.userPwd+'', {
                            })   
                            .then((response) => response.json())
                            .then((responseData) => {  
                                // userId = responseData.userId,
                                // userType  = responseData.userType    // 获取到的数据处理
                                Alert.alert(JSON.stringify(responseData));
                            })
                            .then(() => this.props.navigation.navigate('Main'))
                            .catch((error) => { // 错误处理
                                // alert(this.state.userName+'and'+this.state.userPwd);
                                Alert.alert(error)
                            })
                            .done()

                        }>   
                            <Text style={{ color: 'rgba(251,251,251,1)' }}>登录</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='rgba(0,54,164,0.6)' style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Doctor')}>
                            <Text style={{ color: 'rgba(251,251,251,1)' }}>注册</Text>
                        </TouchableHighlight>
                        <TouchableOpacity style={{ height: 20}}>
                            <Text style={{ color: 'rgba(29,156,232,1)'}}>忘记密码?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomArea} >
                    <Text style={{ textAlign:'center',height: 45,color:'rgba(251,251,251,1)'}}>登录即代表阅读并同意</Text>
                    <TouchableOpacity underlayColor='rgba(0,54,164,1)' style={{ height: 45}} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={{ color: 'rgba(29,156,232,1)'}}>服务条款</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        );
    }
}
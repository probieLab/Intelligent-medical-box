
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
    SectionList,
    Alert
} from 'react-native';
import {
    styles
} from './doctorStyle.js';

export default class Doctor extends Component {
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
           <View style={styles.container}>
                
           </View>
        );
    }
}

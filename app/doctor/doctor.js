
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
                <View>
                <TouchableHighlight>
                    <Text>眼科医生</Text>
                </TouchableHighlight>
                </View>
                {/* <TouchableHighlight>
                    
                </TouchableHighlight>
                <TouchableHighlight>
                    
                </TouchableHighlight>
                <TouchableHighlight>
                    
                </TouchableHighlight>
                <TouchableHighlight>
                    
                </TouchableHighlight>
                <TouchableHighlight>
                    
                </TouchableHighlight> */}
           </View>
        );
    }
}
// {title:'眼科医生',data:['Devin']},
//                 {title:'耳鼻喉科医生',data:['Jackson','james','Jillian','joel','Julie']}
//                 // {title:'口腔科医生',data:['Tommy','John','Ham']}
//                 // {title:'皮肤科医生',data:['Aaron','Cary']}
//                 // {title:'心血管内科医生',data:['Gabriel','George','Paul','peiqi']}
//                 // {title:'内分泌科医生',data:['Spike','Timothy','William','Philip','Julie']}
//             ]}
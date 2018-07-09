import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { styles, win } from './markStyles';
export default class ListItem extends Component {
    
    render() {
        return (
            <TouchableOpacity style={styles.container} >
                <View style={styles.title}>
                    <View style={styles.head} >
                        <Image style={{ height: 30, width: 30, borderRadius: 15 }} source={require('../img/header.jpg')} />
                    </View>
                    <Text style={styles.titleWord} >{this.props.username}</Text>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.word}>科室:{this.props.subject}</Text>
                    <Text style={styles.word}>职称:{this.props.title}</Text>
                    <Text style={styles.word}>工龄:{this.props.workTime}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.word}>价格:{this.props.sell}</Text>
                    <Text style={styles.word}>状态:{this.props.workState}</Text>
                    <Text style={styles.word}></Text>
                </View>
            </TouchableOpacity>
        )
    }
}
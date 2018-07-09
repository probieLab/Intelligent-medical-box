import React, { Component } from 'react';
import {
    ListView,
    View
} from 'react-native';
import ListItem from './marketListItem';
import td from './testData.json';
// import View from 'react-native-webrtc/RTCView';
export default class Market extends Component {
    constructor(props) {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        super(props);
        this.state = {
            ds: ds.cloneWithRows(td)
        }
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor:'#333'
        },
        headerTintColor:'#999',
        title:'Doctor Market'
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#333'}} >
                <ListView
                    dataSource={this.state.ds}
                    renderRow={(rowData) =>
                        <ListItem
                            username={rowData.username}
                            subject={rowData.subject}
                            title={rowData.title}
                            workTime={rowData.workTime}
                            sell={rowData.sell}
                            workState={rowData.workState}
                            navagition={this.props.navagition}
                        />
                    }
                />
            </View>
        )
    }
}

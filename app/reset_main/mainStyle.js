import {
    Dimensions,
    StyleSheet,
} from 'react-native';
export const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333',
    },
    topArea:{
        flex:3,
        borderBottomWidth:1,
        borderBottomColor:'#666',
    },
    midArea:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#666',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomArea:{
        flex:8,
        justifyContent:'flex-start'
    },
    userData:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#e44855',
        justifyContent:'flex-end',
        paddingLeft:win.height*0.25,
        paddingBottom:6,
    },
    topAreaWord:{
        color:'#c0c0c0',
        fontSize: 20,
    },
    heartbeatData:{
        flex:1,
        paddingTop:6,
        justifyContent:'flex-start',
        paddingLeft:win.height*0.25,
    },
    heartbeat:{
        position:'absolute',
        height:win.height*0.15,
        width:win.height*0.15,
        top: win.height*((1/4)-0.15)/2,
        left: win.height* 0.05,
        backgroundColor:'#db4a55',
        borderRadius:win.height*0.15/2,
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    bodyDataItem:{
        flex:1,
        flexDirection:'row',
    },
    bodyDataItemIconBox:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#666',
        justifyContent:'center',
        alignItems:'center',
    },
    bodyDataItemDataBox:{
        flex:4,
        borderBottomWidth:1,
        borderBottomColor:'#666',
        flexDirection:'row'
        
    },
    bodyDataItemDataDirection:{
        flex:4,
        paddingLeft:10,
        justifyContent:'center',

    },
    bodyDataItemData:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    bodyDataItemDataWord:{
        color: '#2abe45', 
        fontSize: 14,
    },
    doctor:{
        flex:4,
        color:'#c0c0c0',
        justifyContent:'center',
        paddingLeft:12
    },
    vedioButton:{
        flex:1,
        height:30,
        paddingLeft:2.5,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginRight:5
    }
})

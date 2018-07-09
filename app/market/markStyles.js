import {
    Dimensions,
    StyleSheet,
} from 'react-native';
// import { width } from 'window-size';
export const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height:win.height*0.20,
        width:win.width,
        borderBottomWidth:2,
        borderBottomColor:'#444',
        paddingLeft:15,
        paddingTop:8,
        paddingBottom:8
    },
    title:{
        flex:1,
        flexDirection:'row',
        paddingTop:6
    },
    titleWord:{
        flex:3,
        color:'#999'
    },
    head:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center'
    },
    mid:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    word:{
      flex:1,
    //   textAlign:'center',
      fontSize:18,
      color:'#999'  
    },
    bottom:{
        flex:1,
        flexDirection:'row'
    },
    
});
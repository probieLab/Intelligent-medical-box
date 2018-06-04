import { 
    StyleSheet,
    Dimensions
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height:win.height-20,
        width:win.width,
        flex:0,
        // backgroundColor:'#fff',
    },
    photo:{
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    height:win.height-20,
    width:win.width,
    backgroundColor:'rgba(0,0,0,0)',
     },
    topArea:{
        flex:2,
        opacity:0.4,
        justifyContent:'center',
        alignItems:'center',
    },
    header:{
        height:140,
        width:140,
        borderRadius:70,
        // borderWidth:1,
        marginTop:10,
        // borderColor:'rgba(34,34,34,.25)',
        padding:10
    },
    midArea:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    bottomArea:{
        flex:2,
        paddingRight:80,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    inputGroup:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        width:win.width*0.8
    },
    inputItem:{
        marginTop:10,
        width:win.width*0.8
    },
    buttonGroup: {
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    buttonItem: {
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        height: 37,
        width: win.width*0.8,
        marginTop:10,
        backgroundColor:'rgba(29,156,232,0.6)',
        borderRadius:8
    }
});
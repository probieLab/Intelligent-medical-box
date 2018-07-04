import {
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height:win.height,
        width:win.width,
        flex:0,
    },
    header:{
        flex:1,
        backgroundColor:'#222',
        borderBottomWidth:1,
        borderBottomColor:'rgba(50,50,50,1)',
        flexDirection : 'row',
    },
    headerTitle:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    headerTitleWord:{
        color:'#9f9fa0',
        //fcfcfc
        fontSize:15
    },
    Personal:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    a:{
        flex : 1
    },
    top:{
        flex:4,
        backgroundColor:'#222',
        borderColor: '#bb0b0b',
        borderBottomWidth:1,
        flexDirection: 'row',
    },
    bottom:{
        flex:7,
        backgroundColor:'#222',
        flexDirection: 'row',
    },
    down:{
        flex:3,
        backgroundColor:'#222',
        borderTopWidth:1,
        borderColor: '#bb0',
        flexDirection: 'row',
    },
    floatCom:{
        width:win.height*0.18,
        height:win.height*0.18,
        borderRadius: win.height*0.18/2,
        backgroundColor:'rgba(187,11,11,.45)',
        position:'absolute',
        alignItems:'center',
        flex:0,
        justifyContent:'center',
        top:win.height*(5/12)-win.height*0.09,
        left:(win.width-win.height*0.18)/2,
    },
    floatBottom:{
        width:win.height*0.20,
        height:win.height*0.20/2,
        borderTopLeftRadius: win.height*0.20/2,
        borderTopRightRadius: win.height*0.20/2,
        borderWidth:4,
        borderColor: '#bb0b0b',
        position:'absolute',
        bottom:0,
        left:(win.width-win.height*0.20)/2,
        backgroundColor:'#222'
    }
});
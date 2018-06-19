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
    Personal:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    a:{
        flex : 6
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
        width:win.height*0.25,
        height:win.height*0.25,
        borderRadius: win.height*0.25/2,
        backgroundColor:'rgba(187,11,11,.25)',
        position:'absolute',
        alignItems:'center',
        flex:0,
        justifyContent:'center',
        top:win.height*(5/12)-win.height*0.125,
        left:(win.width-win.height*0.25)/2,
    },
    floatBottom:{
        width:win.height*0.28,
        height:win.height*0.28/2,
        borderTopLeftRadius: win.height*0.28/2,
        borderTopRightRadius: win.height*0.28/2,
        borderWidth:4,
        borderColor: '#bb0b0b',
        position:'absolute',
        bottom:0,
        // marginBottom:this.state.marginBottom,
        left:(win.width-win.height*0.28)/2,
        backgroundColor:'#222'
    }
});
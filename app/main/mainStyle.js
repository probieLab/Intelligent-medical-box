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
        flex : 12
    },
    top:{
        flex:3,
        backgroundColor:'#222',
        borderColor: '#bb0b0b',
        borderBottomWidth:2,
        flexDirection: 'row',
    },
    bottom:{
        flex:5,
        backgroundColor:'#222',
        borderTopWidth:1,
        borderColor: '#bb0b0b',
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
        width:win.height*0.20,
        height:win.height*0.20,
        borderRadius: win.height*0.20/2,
        borderWidth:4,
        // background-image:'../img/timg.png',
        borderColor: '#bb0b0b',
        position:'absolute',
        alignItems:'center',
        top:win.height*0.34,
        left:(win.width-win.height*0.20)/2,
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
        backgroundColor:'#ccc'
    }
});
import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    LayoutAnimation
} from 'react-native';
export default class mainMedical extends Component {
    constructor(props){
        super(props);
        StatusBar.setBackgroundColor('#222',true);
    }
    static navigationOptions = {
        header:null
    }
   
    render(){
        return(
            <View style={styles.container} >
                
                <View style={styles.header} >
                    {/* <Text style={styles.headerTitle}>智能医疗</Text> */}
                    <View style={styles.a}></View>
                    <View style={styles.Personal}>
                    <TouchableOpacity style={{flex:1,height:30,width:30}}>
                        <Image style={{height:30,width:30}} source={require('./img/defaultHeader.png')}/>
                    </TouchableOpacity>
                    </View>
                
                </View>                
                <View style={styles.top} >
                    <View style={{flex:1,borderRightWidth:4,borderRightColor:'#bb0b0b',alignItems:'center',justifyContent:'center'}} >
                        <Image style={{height:50,width:50,borderRadius:15,marginTop:40}} source={require('./img/医疗_medical14.png')} />
                        <View style={{flex:1,marginTop:10}}>
                            <Text style={{fontSize:28,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:2,height:2}}}>脉搏</Text>
                            <Text style={{fontSize:18,color:'#fff',marginTop:5}}>85/Min</Text>
                        </View>
                    
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:50,width:50,borderRadius:15,marginTop:40}} source={require('./img/thermometer.png')} />
                        <View style={{flex:1,marginTop:10}}>
                            <Text style={{fontSize:28,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:2,height:2}}}>体温</Text>
                            <Text style={{fontSize:18,color:'#fff',marginTop:5}}>37*C</Text>
                        </View>
                    
                    </View> 
                </View>
                <View style={styles.bottom}>
                    <View style={{flex:1,borderRightWidth:4,borderRightColor:'#bb0b0b',alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:50,width:50,borderRadius:15,marginTop:120}} source={require('./img/医疗抢救.png')} />
                        <View style={{flex:1,marginTop:15}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:28,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:2,height:2}}}>血糖</Text>
                            </View>
                            <Text style={{fontSize:18,color:'#fff',marginTop:5}}>7.8-11.1mmoL/L</Text>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:50,width:50,borderRadius:15,marginTop:120}} source={require('./img/医疗健康.png')} />
                        <View style={{flex:1,marginTop:15}}>
                            <Text style={{fontSize:28,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:2,height:2}}}>心率</Text>
                            <Text style={{fontSize:18,color:'#fff',marginTop:5}}>90/MIN</Text>
                        </View>
                    </View>  
                </View>
                <View style={styles.floatCom} ></View>
                <View style={styles.floatBottom}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={{height:40,width:40,borderRadius:15,marginTop:15}} source={require('./img/视频.png')} />
                </View>
                </View>
            </View>
        )
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
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
        flex : 8
    },
    top:{
        flex:3,
        backgroundColor:'#222',
        borderColor: '#bb0b0b',
        borderBottomWidth:2,
        flexDirection: 'row',
    },
    bottom:{
        flex:6,
        backgroundColor:'#222',
        borderTopWidth:1,
        borderColor: '#bb0b0b',
        flexDirection: 'row',
    },
    floatCom:{
        width:win.height*0.18,
        height:win.height*0.18,
        borderRadius: win.height*0.18/2,
        borderWidth:4,
        borderColor: '#bb0b0b',
        position:'absolute',
        top:win.height*0.31,
        left:(win.width-win.height*0.18)/2,
        backgroundColor:'#ccc',
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
})
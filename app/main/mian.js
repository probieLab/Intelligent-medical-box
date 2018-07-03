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
    LayoutAnimation,
    AsyncStorage,
    Alert,
    Fetch,
    NativeModules,
} from 'react-native';
import{
    styles
} from './mainStyle';
import init from 'react_native_mqtt'
import { StackNavigator } from 'react-navigation';
import Vedio from '../videoCalls/videoCall';
import Doctor from '../doctor/doctor';
import Detail from '../detailMain/detailMain';
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
const {UIManager} = NativeModules;
const win = Dimensions.get('window'); 
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class MainMedical extends Component {
    constructor(props){
        super(props);
        StatusBar.setBackgroundColor('#222',true);
        this.state = {
            client: new Paho.MQTT.Client('47.101.60.213',10010,'Client1'),
            userName: null,
            userPwd: null,
            userId: null,
            userType: null,
            s1: '',
            s2: '',
            s3: '',
            s4: '',
            s5: '',
            s6: '',
            loadS: 0,
            flag:1,
            width:win.height*0.20,
            height:win.height*0.20,
            top:win.height*(5/12)-win.height*0.10,
            left:(win.width-win.height*0.20)/2,
            borderRadius: win.height*0.20/2,
        }
        
    }
    changeSize=()=>{
        // console.log(this.state.height==win.height*0.20&&this.state.flag== 0)        
        // if(this.state.height==win.height*0.25){
            this.setState({
                width:this.state.width+win.height*0.03,
                height:this.state.height+win.height*0.03,
                top:win.height*(5/12)-win.height*0.115,
                left:(win.width-win.height*0.23)/2,
                borderRadius: (this.state.width+win.height*0.03)/2,
                
            })
            LayoutAnimation.spring();
            setTimeout(()=>{
                this.setState({
                    width:this.state.width-win.height*0.03,
                    height:this.state.height-win.height*0.03,
                    top:win.height*(5/12)-win.height*0.10,
                    left:(win.width-win.height*0.20)/2,
                    borderRadius: (this.state.width-win.height*0.03)/2,
                    
                })
                LayoutAnimation.spring();
            },10)
            return;
        // }
        // if(this.state.height==win.height*0.25&&(this.state.flag == 1)){
        //     this.setState({
        //         width:this.state.width-win.height*0.05,
        //         height:this.state.height-win.height*0.05,
        //         top:win.height*(5/12)-win.height*0.10,
        //         left:(win.width-win.height*0.20)/2,
        //         borderRadius: (this.state.width-win.height*0.05)/2,
        //         flag:0
        //     })
        //     LayoutAnimation.spring();
        //     return;            
        // }
        
    }
    componentWillMount(){
        setInterval(this.changeSize,800)            

    }
    componentDidMount(){
        
        this.state.client.connect({
            onSuccess: () => {
                s2:data.BloodHData,                // Alert.alert('success');
                this.state.client.subscribe("IMUT_CaiNiaoLab", {
                    qos: 0, onSuccess: (payload) => {
                        
                        console.log(payload);
                    }
                })
            }, useSSL: false
        });
        let self = this;
        this.state.client.onMessageArrived = (message) => {          
            console.log("onMessageArrived:" + message.payloadString);
            let data =  JSON.parse(message.payloadString);
            self.setState({  
                s1:data.BodyData,
                s2:data.BloodHData,
                s3:data.BloodLData,
                s4:data.EnvTData,
                s5:data.EnvHData,
                s6:data.GASData
            })//!!!!!!!!

            }
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
                    <TouchableOpacity style={{flex:1,height:30,width:30}} onPress={()=>this.props.navigation.navigate('Doctor')}>
                        <Image style={{height:30,width:30}} source={require('../img/defaultHeader.png')} />
                    </TouchableOpacity>
                    </View>
                
                </View>                
                <View style={styles.top} >
                    <View style={{flex:1,borderRightWidth:1,borderRightColor:'#bb0b0b',alignItems:'center',justifyContent:'center'}} >
                        <Image style={{height:30,width:30,borderRadius:15,marginTop:40}} source={require('../img/医疗_medical14.png')} />
                        <View style={{flex:1,marginTop:10}}>
                            <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>体温</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s1}/*C</Text>
                           
                        </View>
                    
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:30,width:30,borderRadius:15,marginTop:40}} source={require('../img/thermometer.png')} />
                        <View style={{flex:1,marginTop:10}}>
                            <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>血压高压</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s2}*C</Text>
                            <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>血压低压</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s3}*C</Text>
                        </View>
                    
                    </View> 
                </View>
                <View style={styles.bottom}>
                    <View style={{flex:1,borderRightWidth:1,borderRightColor:'#bb0b0b',alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:30,width:30,borderRadius:15,marginTop:40}} source={require('../img/医疗抢救.png')} />
                        <View style={{flex:1,marginTop:15}}>
                            <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>室内温度</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s4}/MIN</Text>
                            <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>室内湿度</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s5}/MIN</Text>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:30,width:30,borderRadius:15,marginTop:40}} source={require('../img/医疗健康.png')} />
                        <View style={{flex:1,marginTop:15}}>
                        <Text style={{fontSize:15,color:'#fff',textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>室内危险气体</Text>
                            <Text style={{fontSize:15,color:'#fff',marginTop:5}}>{this.state.s6}g/CM^3</Text>
                        </View>
                    </View>  
                    {/* <View style={styles.down}>
                    
                    </View>   */}
                </View>
                <View style={[styles.floatCom,{height:this.state.height,width:this.state.width,top:this.state.top,left:this.state.left,borderRadius:this.state.borderRadius}]} >
                    
                </View>
                <View style={[styles.floatCom,{backgroundColor:'rgba(143,3,3,1)',elevation:4}]} >
                <Text style={{flex:1, fontSize:15,color:'#fff',marginTop:-85,textShadowColor:'#cc3333',textShadowOffset:{width:1,height:1}}}>心率</Text>
                    <Text style={{flex:1,fontSize:15,color:'#fff',marginTop:5,justifyContent:'center',alignItems:'center'}}>{this.state.s5}g/CM^3</Text>
                </View>
                <TouchableOpacity style={styles.floatBottom} onPress={()=>this.props.navigation.navigate('Vedio')}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={{height:40,width:40,borderRadius:15,marginTop:15}} source={require('../img/视频.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

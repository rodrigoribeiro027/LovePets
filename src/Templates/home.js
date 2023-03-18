
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'

const Home = ({navigation}) => {
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            <View style={styles.container}>
                <StatusBar/>
                <TouchableOpacity style={styles.VoltarButon}  onPress={()=>navigation.navigate("Login")} >
                    <Text style={styles.loginButonText}>Voltar</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight'  style={styles.TextPrincipaltextobv}>Seja Bem-Vindo(a)</Animatable.Text>
                <Animatable.Image  animation='fadeInUp' source={require("../assets/Welcome.png")} style={styles.imgpets}/>
                <Animatable.View animation='fadeInRight' style={styles.divButton}>
                    <TouchableOpacity style={styles.menuUsuario} >
                            <Text style={styles.menuUsuarioText}  onPress={()=>navigation.navigate("AgendarConsulta")}>Agendar Consulta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuUsuario} >
                            <Text style={styles.menuUsuarioText}  onPress={()=>navigation.navigate("MeusPets")}>Meus Pets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuUsuario} >
                            <Text style={styles.menuUsuarioText}  onPress={()=>navigation.navigate("Home")}>Historico de Agendamentos</Text>
                    </TouchableOpacity>
                    <View style={styles.espaco}></View>
                </Animatable.View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};
const styles = StyleSheet.create({
    VoltarButon:{
        width:'100%',
        backgroundColor:"#399fff",
        height:50,
        justifyContent:'center',
        alignItems:"center",
    },
    containerStart:{
        width:"100%",
    },
    espaco:{
        width:'90%',
        marginTop:170
    },
    divButton:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
    },
    imgpets:{
        width:'100%',
        height:410,
    },
    menuUsuario:{
        width:'90%',
        marginTop:'5%',
        backgroundColor:"#399fff",
        height:42,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5
    },
    menuUsuarioText:{
        color:"#FFF",
        fontSize:17
    },
    TextPrincipaltextobv:{
        fontfamily: 'Inter',
        fontWeight:800,
        fontSize:30,
        border: '3px solid #000000',
    },
    container:{
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        
    }

});

export default Home;

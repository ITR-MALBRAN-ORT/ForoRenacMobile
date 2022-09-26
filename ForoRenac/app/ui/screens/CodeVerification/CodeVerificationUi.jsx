import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function CodeVerificationUi({verifyCode, handlePin, refs, error}) {
    const {pin1Ref, pin2Ref,pin3Ref,pin4Ref} =refs
    const {handlePin1,handlePin2,handlePin3,handlePin4} = handlePin
  return (
    <View style={style.cont} >
        <Text style={style.text}>Ingrese codigo de Verificacion</Text>
        <View style={style.contInput}>
            <View style={style.input}>
                <TextInput  
                    ref={pin1Ref}
                    keyboardType={'number-pad'} 
                    maxLength={1}  
                    style={style.inputText}
                    onKeyPress={key =>handlePin1(key.nativeEvent.key)}
                />
            </View>
            <View style={style.input}>
                <TextInput  
                    ref={pin2Ref}
                    keyboardType={'number-pad'} 
                    maxLength={1}  
                    style={style.inputText}
                    onKeyPress={key =>handlePin2(key.nativeEvent.key)}
                />
            </View>
            <View style={style.input}>
                <TextInput 
                    ref={pin3Ref} 
                    keyboardType={'number-pad'} 
                    maxLength={1}  
                    style={style.inputText}
                    onKeyPress={key =>handlePin3(key.nativeEvent.key)}
                    />
            </View>
            <View style={style.input}>
                <TextInput  
                    ref={pin4Ref} 
                    keyboardType={'number-pad'} 
                    maxLength={1}  
                    style={style.inputText}
                    onKeyPress={key =>handlePin4(key.nativeEvent.key)}
                    />
            </View>
        </View>
        <View style={style.contBtn}>
            {error && <Text style={{color:'red', fontSize:12, marginBottom:20}} >{error}</Text>}
            <TouchableOpacity onPress={verifyCode} style={style.btn}>
                <Text style={{color:'#ffffff', fontSize:20}}>Verificar Code</Text>
            </TouchableOpacity>
            <Pressable>
                <Text style={{color:'#ffffff', fontSize:15, marginTop:15}}>Reenviar email</Text>
            </Pressable>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'#1C4670',
    },
    text:{
        textAlign:'center',
        fontSize:25,
        color:'#ffffff',
        padding:50,
    },
    contInput:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:5,
    },
    input:{
        borderBottomWidth:1,
        width:50,
        borderBottomColor:'#ffffff'
    },
    inputText:{
        fontSize:40,
        textAlign:'center',
        color:'#ffffff'
    },

    contBtn:{
        marginVertical:50,
        alignItems:'center'
    },
    btn:{
        backgroundColor:'#1DC690',
        width:150,
        height:40,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    }
})
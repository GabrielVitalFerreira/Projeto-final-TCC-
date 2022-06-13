import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-web';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    const [useEmail, setEmail] = useState("")
    const [useSenha, setSenha] = useState("")

    let data = {
        email: useEmail,
        senha: useSenha
    }

    const login = (body) => {
        fetch("http://10.87.207.15:3000/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }) 
        .then(resp => { 
            return resp;
        })
        .then(data  => {
            console.log(data.status);
            
            if(data.status == 200) {
               //login certo
               data.json().then( result => {
                    navigation.navigate('Home')
                    console.log(result);
               })
            }else if(data.status == 401) {
                //senha tiver errada
    
                alert('senha errada')
            }
        });
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" deley={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Digite um email"
                onChangeText={setEmail}
                value={useEmail}
                style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Sua senha"
                onChangeText={setSenha}
                secureTextEntry={true}
                value={useSenha}
                style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={() => login(data)} >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fle: 1,
        backgroundColor:"#9CD4F3",
        height: "100%",
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: "5%",
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#9CD4F3",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: "#a1a1a1",
    }
})
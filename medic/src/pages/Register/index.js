import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-web';

import { useNavigation } from '@react-navigation/native';

export default function Register() {

    const [useEmail, setEmail] = useState("")
    const [useSenha, setSenha] = useState("")
    const [useCpf, setCpf] = useState("")
    const [useName, setName] = useState("")
    const [useTelefone, setTelefone] = useState("")
    
    let userdata = {
        email: useEmail,
        senha: useSenha,
        cpf: useCpf,
        telefone: useTelefone,
        nome_completo: useName,
        data_nascimento: null,
    }
    
    const cadastro = (body) => {
        fetch("http://10.87.207.15:3000/func", {
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
                    navigation.navigate('Signin')
                    console.log(result);
               })
            }else if(data.status == 400) {
                //email ja cadastrado
    
                alert('email ja existente')
            }
        });
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={1000} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Seu e-mail"
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

                <Text style={styles.title}>CPF</Text>
                <TextInput
                placeholder="Digite seu CPF"
                onChangeText={setCpf}
                value={useCpf}
                style={styles.input}
                />

                <Text style={styles.title}>Telefone</Text>
                <TextInput
                placeholder="Telefone"
                onChangeText={setTelefone}
                value={useTelefone}
                style={styles.input}
                />

                <Text style={styles.title}>Nome</Text>
                <TextInput
                placeholder="Nome do seu Hospital"
                onChangeText={setName}
                value={useName}
                style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={() => cadastro(userdata)} >
                    <Text style={styles.buttonText}>Confirmar</Text>
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
        color: "#FFF",
    }
})
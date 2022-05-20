import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-web';

export default function Register() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" deley={1000} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Digite um email"
                style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Sua senha"
                style={styles.input}
                />

                <Text style={styles.title}>CPF</Text>
                <TextInput
                placeholder="Digite seu CPF"
                style={styles.input}
                />

                <Text style={styles.title}>Nome</Text>
                <TextInput
                placeholder="Nome do seu Hospital"
                style={styles.input}
                />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} >
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
        color: "#FFF",
    }
})
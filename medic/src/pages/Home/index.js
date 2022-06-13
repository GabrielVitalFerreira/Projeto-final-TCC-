import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { ScrollView, TextInput } from 'react-native-web';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        animation="flipInY"
                        source={require('../../assets/logotcc.png')}
                        style={{ width: 600, height: 150,}}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.containerTxts}>
                    <Animatable.Text delay={600} animation="fadeInLeft" style={styles.txt}>Organize seu estoque como nunca</Animatable.Text>
                    <Animatable.Text delay={1000} animation="fadeInLeft" style={styles.txtTitle}>Medic Control</Animatable.Text>
                </View>
            </View>
           <View style={styles.containerTool}>
               <Text style={styles.txtMore}>Mais sobre a MediC</Text>
               <Animatable.View animation="zoomIn" style={styles.line}></Animatable.View>
               <Animatable.Image style={styles.imgMedico} 
               source={require('../../assets/foto.jpg')}/>
                <Text style={styles.txt2}>Seu estoque com a Medic Controll.</Text>
           </View>
        </ScrollView>
        
       
    )
}

const styles = StyleSheet.create({
    container: {
        fle: 1,
        backgroundColor:"#9CD4F3",
        height: 550,
        alignSelf: 'center',
    },
    containerLogo: {
        alignItems: 'center',
        marginTop: 150
    },
    containerTxts:{
        alignItems: "center",
    },
    txt: {
        fontSize: 20,
        fontWeight: "bold",
    },
    txtTitle: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 25
    },
    containerTool: {
        backgroundColor: "#FFF",
        width: "100%",
        height: 550,
        alignItems: "center",
    },
    txtMore: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 50
    },
    line: {
        backgroundColor: "#9CD4F3",
        width: "40%",
        height: 3,
        marginTop: 6
    },
    imgMedico: {
        width: "80%",
        height: 220,
        marginTop: 20,
        borderRadius: 15,
    },
    txt2:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
})
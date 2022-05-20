import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
import Fundo from "../assets/fundo.jpg";
import Logo from "../assets/logotcc.png"

export default function Login({navigation }) {

    return (
        <ScrollView>
             <ImageBackground 
                    source={{uri:Fundo}}
                    style={styles.fundin}
                >
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={{uri:Logo}} style={styles.logoimg} />
                </View>
                <View style={styles.box}>

                </View>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    fundin: { width: "100%", height: 1000},
    logoimg: {width: 340, height: 230},
    box: {width: "80%", 
          height: 500,
          backgroundColor: "#ACACAC", 
          borderRadius: 30,
          shadowOffset: {width: 6, height: 6},
          shadowOpacity: 0.9,
          shadowRadius: 20
        },
});
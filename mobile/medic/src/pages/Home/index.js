import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
                    <Animatable.Text 
                    animation="fadeInLeft"
                    deley = {600}
                    style={styles.txt}>
                        Organize seu estoque como nunca
                        </Animatable.Text>
                    <Animatable.Text 
                    animation="fadeInLeft"

                    style={styles.txtTitle}>
                        Medic Control
                        </Animatable.Text>
                </View>
            </View>
           <View style={styles.containerTool}>
               <Text>oi</Text>
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
        height: 550
    },
})
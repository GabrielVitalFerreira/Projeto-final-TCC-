import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-web';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
             <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logotcc.png')}
                    style={{ width: 600, height: 150,}}
                    resizeMode="contain"
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fle: 1,
        backgroundColor:"#9CD4F3",
        height: "100%",
        alignSelf: 'center',
        
    },
})
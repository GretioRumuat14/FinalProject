import React, { memo } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { BgSplashScreen } from "../../assets";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={BgSplashScreen} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Coffe so good, your taste buds will love it</Text>
                <Text style={styles.text2}>The best grain, the finest roast, the powerful flavour</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        width: 321,
        alignItems: 'center',
        marginTop: 350
    },
    text: {
        color: 'white',
        fontSize: 34,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontFamily: 'Sora-SemiBold'
    },
    text2: {
        color: 'white',
        fontFamily: 'Sora-Regular',
        fontSize: 14,
        paddingHorizontal: 50,
        textAlign: 'center',
        marginTop: 12
    },
    button: {
        backgroundColor: '#D06C10',
        width: 308,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora-Bold'
    }
})

export default SplashScreen;
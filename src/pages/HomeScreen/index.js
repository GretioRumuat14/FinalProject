import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { ProfilePicture, IconSearch, IconFilter, BgPromo } from "../../assets";

const HomeScreen = () => {
    return (
        <View
         style={styles.container}>
            <View style={styles.secondScreen}></View>
            <View style={styles.header}>
                <View>
                    <Text style={{color: '#ffffff', fontFamily: 'Sora-Light', fontSize: 14}}>Location</Text>
                    <Text style={{color: '#ffffff', fontFamily: 'Sora-Bold', fontSize: 15, marginTop: 4}}>Manado, Sulawesi Utara</Text>
                </View>
                <Image source={ProfilePicture} style={{width: 44, height: 44, borderRadius: 14, marginRight: 9}} />
            </View>
            <View style={{alignItems: 'center', marginTop: 21}}>
                <TouchableOpacity style={styles.promo} activeOpacity={0.8}>
                    <Image source={IconSearch} style={{marginRight: 5}} />
                    <Text style={{fontFamily: 'Sora-Medium', color: '#5A5A5A', fontSize: 15}}>Search Coffee</Text>
                    <Image source={IconFilter} style={{marginLeft: 100}} />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 38}}>
                <Image source={BgPromo} style={{position: "absolute"}} />
                <View>
                    <View style={{
                        width: 210, 
                        height: 30, 
                        backgroundColor: '#000000', 
                        position: "absolute",
                        marginTop: 85,
                        marginLeft: -125
                    }}></View>
                    <View style={{
                        width: 160, 
                        height: 30, 
                        backgroundColor: '#000000', 
                        position: "absolute",
                        marginTop: 133,
                        marginLeft: -125
                    }}></View>
                </View>
                <View style={{width: '70%', paddingTop: 14,}}>
                    <Text style={{
                        backgroundColor: '#ED5151', 
                        color: '#ffffff', 
                        fontFamily: 'Sora-Medium',
                        fontSize: 12,
                        padding: 12,
                        borderRadius: 10,
                        width: 70
                    }}>Promo</Text>
                    <Text style={{
                        color: '#ffffff',
                        fontFamily: 'Sora-Medium',
                        fontSize: 32,
                        paddingHorizontal: 20
                    }}>Buy one Get</Text>
                    <Text style={{
                        color: '#ffffff',
                        fontFamily: 'Sora-Medium',
                        fontSize: 32,
                        paddingHorizontal: 20
                    }}>one FREE</Text>
                </View>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    secondScreen: {
        backgroundColor: 'black',
        height: 250,
        width: '100%',
        position: "absolute",
    },
    header: {
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promo: {
        backgroundColor: '#1D1B1B',
        width: 300,
        height: 55,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13
    }
})

export default HomeScreen;
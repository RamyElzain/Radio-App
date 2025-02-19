import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import Header from './header';

const Prod = () => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function togglePlayPause() {
        if (isPlaying && sound) {
            await sound?.pauseAsync();
            setIsPlaying(false);
        } else {
            const { sound } = await Audio.Sound.createAsync(
                { uri: 'https://eu1.reliastream.com/proxy/recordfm977?mp=/stream.mp3' },
                { shouldPlay: true }
            );
            setSound(sound);
            setIsPlaying(true);
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                sound?.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.contentContainer}>
                <Image source={require('@/assets/images/image 2.png')} style={styles.img} />
            <View style={styles.textcontainer}>
            <Text style={styles.text}>Live Radio Stream</Text>
            <Text style={styles.text1}>Record FM 97.7</Text>
            </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={togglePlayPause} style={styles.button}>
                        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 50,
        backgroundColor: '#171717',
    },
    textcontainer:{
        height:50,
        alignItems:'center',
        marginTop:20
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',  
    },
    text1: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',  
    },
    img: {
        width: '80%',
        height: '60%',
        resizeMode: 'cover',
        borderRadius: 20,
        marginTop: 15,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FE6245',
        padding: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Prod;

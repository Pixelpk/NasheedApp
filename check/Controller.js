import React, {useEffect, useState, useRef} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
    usePlaybackState,
} from 'react-native-track-player';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";


export default function Controller({onNext, onPrv}) {
    const playbackState = usePlaybackState();
    const isPlaying = useRef('paused'); //paused play loading

    useEffect(() => {

        if (playbackState === 'playing' || playbackState === 3) {
            isPlaying.current = 'playing';
        } else if (playbackState === 'paused' || playbackState === 2) {
            isPlaying.current = 'paused';
        } else {
            isPlaying.current = 'loading';
        }
    }, [playbackState]);

    const returnPlayBtn = () => {
        switch (isPlaying.current) {
            case 'playing':
                return <View>
                    <View  style={{
                        marginRight: wp("2%"),

                        justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: 20
                    }}>
                        <Foundation name={"pause"} color={"white"} size={40}/>
                    </View>
                </View>;
            case 'paused':
                return <View>
                    <View style={{
                        marginRight: wp("2%"),

                        justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: 20
                    }}>
                        <Entypo name={"controller-play"} color={"white"} size={40}/>

                    </View>
                </View>;
            default:
                return <ActivityIndicator size={45} color="#fff"/>;
        }
    };

    const onPlayPause = () => {
        if (isPlaying.current === 'playing') {
            TrackPlayer.pause();
        } else if (isPlaying.current === 'paused') {
            TrackPlayer.play();
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPrv}>
                <Icon color="#fff" name="skip-previous" size={45}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlayPause}>
                {returnPlayBtn()}
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext}>
                <Icon color="#fff" name="skip-next" size={45}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 250,
    },
});

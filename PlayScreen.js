import React, {useRef, useEffect, useState, useContext} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
    View,
    SafeAreaView,
    Text,
    Dimensions,
    Animated,
    StyleSheet,
} from 'react-native';

import TrackPlayer, {
    Capability,

    usePlaybackState,
} from 'react-native-track-player';

import Controller from "./check/Controller";
import SliderComp from "./check/SliderComp";



const {width, height} = Dimensions.get('window');
const TRACK_PLAYER_CONTROLS_OPTS = {

    waitforBuffer: true,
    stopWithApp: true,
    alwaysPauseOnInterruption: false,
    capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
    ],

    compactCapabilities:[
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
    ]

}

const PlayScreen =({index1, pk})=> {

    // const {pk,index1,img} = route.params
    const scrollX = useRef(new Animated.Value(0)).current;
    const refRBSheet = useRef();
    const slider = useRef(null);
    const isPlayerReady = useRef(false);
    const index = useRef(index1);
    const[state, newState] = useState(null)
    const [songIndex, setSongIndex] = useState(index1);
    const isItFromUser = useRef(true);
    const position = useRef(Animated.divide(scrollX, width)).current;
    const playbackState = usePlaybackState()



    const skipTo = async (trackId)=>{
        await TrackPlayer.skip((trackId))
    }
    useEffect(() => {


        TrackPlayer.setupPlayer().then(async () => {

            await TrackPlayer.reset()
            await TrackPlayer.add(pk);
            await TrackPlayer.skip((index1))
            isPlayerReady.current = true;
            await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);
            await TrackPlayer.play()

            scrollX.addListener(({value}) => {
                const val = Math.round(value / width);
                skipTo(val)
                setSongIndex(val);
            });
        });

        return () => {
            scrollX.removeAllListeners();


            // exitPlayer();
        };
    }, [scrollX]);

    const GoNxt =()=>{
        slider.current.scrollToOffset(
            {
                offset:(songIndex+1)*width
            }

        )
    }
    const GoPrev =()=>{
        slider.current.scrollToOffset(
            {
                offset:(songIndex-1)*width
            }

        )
    }

    const renderItem = ({index, item}) => {
        return (
            <Animated.View
                style={{
                    alignItems: 'center',
                    width: width,
                    transform: [
                        {
                            translateX: Animated.multiply(
                                Animated.add(position, -index),
                                -100,
                            ),
                        },
                    ],
                }}>
                <Animated.Image
                    source={{uri:pk[songIndex].thumbnail_url}}
                    style={{width: 250, height: 250, borderRadius: 10, marginTop:hp("8%")}}
                />
            </Animated.View>
        );
    };

    return (

        <SafeAreaView style={{ backgroundColor: "black"}}>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: hp("5%")}}>


                <View style={{width: hp("27%"), flexDirection: "row", justifyContent: "center", alignItems: "center"}}>

                </View>

            </View>

            <SafeAreaView style={styles.container}>
                <SafeAreaView style={{height: 320}}>
                    <Animated.FlatList
                        ref={slider}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        data={pk}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: true},
                        )}

                    />
                </SafeAreaView>
                <View>
                    <Text style={styles.title}>{pk[songIndex].title}</Text>
                    <Text style={styles.artist} >{pk[songIndex].artist}</Text>
                </View>

                <SliderComp />
                <Controller onNext={GoNxt} onPrv={GoPrev} />
            </SafeAreaView>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    title: {
        fontSize:hp("2%"),
        textAlign: 'center',
        marginHorizontal:wp("15%"),

        color: '#ffffff',
    },
    artist: {
        fontSize: 18,
        textAlign: 'center',
        color: '#ffffff',
        textTransform: 'capitalize',
    },
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: height,
        maxHeight: 600,
    },
});


export default PlayScreen

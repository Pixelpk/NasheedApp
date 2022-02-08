import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Platform,
    UIManager,
    LayoutAnimation,
    StyleSheet,
    Button, Text, Animated, SafeAreaView, Dimensions
} from "react-native";
import Controller from "./check/Controller";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SliderComp from "./check/SliderComp";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import songs from "./check/data";
import TrackPlayer, {Capability, usePlaybackState} from "react-native-track-player";

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

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const {width, height} = Dimensions.get('window');

const Play = ({pk,index1}) => {

    const [firstBoxPosition, setFirstBoxPosition] = useState("left");
    const slider = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const position = useRef(Animated.divide(scrollX, width)).current;
    const refRBSheet = useRef();
    const isPlayerReady = useRef(false);
    const index = useRef(index1);
    const[state, newState] = useState(null)
    const [songIndex, setSongIndex] = useState(index1);
    const isItFromUser = useRef(true);
    const playbackState = usePlaybackState()



    const skipTo = async (trackId)=>{
        await TrackPlayer.skip((trackId))
    }
    useEffect(() => {

        TrackPlayer.setupPlayer().then(async () => {

            await TrackPlayer.reset()
            await TrackPlayer.add(pk);
            await TrackPlayer.skip((0))
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

    const toggleFirstBox = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFirstBoxPosition(firstBoxPosition === "left" ? "right" : "left");
    };

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



        <View style={styles.container}>


            <View  style={[
                styles.view,
                firstBoxPosition === "left" ? null : styles.moveRight
            ]}>
                <View style={{alignItems: firstBoxPosition === "left" ? "flex-start" : "flex-start"}}>
                    <MaterialIcons
                        onPress={()=>toggleFirstBox()} name={firstBoxPosition ==="left" ?"keyboard-arrow-up" : "keyboard-arrow-down"} color="white" size={30}/>
                </View>
                <View style={{ flex1:1, justifyContent:firstBoxPosition === "left" ? "flex-start" : "flex-end", alignItems:firstBoxPosition === "left" ? "flex-start" : "flex-end"}}>

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
                                    )}/>

                    {firstBoxPosition === "left"? null
                        :<View style={{alignSelf:"center"}}>
                            <Text style={styles1.title}>{pk[songIndex].title}</Text>
                            <Text style={styles1.artist} >{pk[songIndex].artist}</Text>
                        </View>
                        }

                    {firstBoxPosition === "left" ? null  : <View style={{alignSelf:"center", marginTop:"7%"}}>

                        <SliderComp />
                    </View>}

                    <View style={{height:firstBoxPosition==="left" ? "90%": "20%",alignSelf:firstBoxPosition === "left" ? "flex-end" : "center"}}>
                        <Controller onNext={GoNxt} onPrv={GoPrev}  />
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",

    },
    view: {
        height: 100,
        width: "100%",
        borderRadius: 5,
        backgroundColor:"black",

    },
    moveRight: {
        height: "92%",
        width: "100%",

    },

});

const styles1 = StyleSheet.create({
    title: {
        fontSize:hp("2%"),
        textAlign: 'center',
        width:wp("65%"),
        color: '#ffffff',
    },
    artist: {
        fontSize: 18,
        color: '#ffffff',
        textTransform: 'capitalize',
    },
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',


    },
});

export default Play;

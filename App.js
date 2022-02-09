
import React from "react";
import Route from "./Route";
import {BlogProvider} from "./ContextApi";


const App =()=>{

    return (
        <BlogProvider>
            <Route/>
        </BlogProvider>
    )

}
export default App;

// import React from "react";
// import PlayScreen from "./PlayScreen";
// import BottomSheet from '@gorhom/bottom-sheet';
// import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import {useCallback, useMemo, useRef, useState} from "react";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//
//
// import Slider from "@react-native-community/slider";
// import Entypo from "react-native-vector-icons/Entypo";
// import Controller from "./check/Controller";
// import Play from "./Play";
// import {Dimensions} from "react-native";
//
// import DashBoard from "./BottomNavigation/DashBoard";
// import songs from "./check/data";
// import {snapPoint} from "react-native-redash";
//
// const width = Dimensions.get('window').width
// const height = Dimensions.get('window').height
//
//
//  const App=()=> {
//
//
//     const [state, newState] = useState(0)
//      const [h, seth] = useState(false)
//      const [t, setT] = useState(false)
//      const [cdown, setcdown] = useState(false)
//      const [s, sets] = useState(0)
//      console.log("h",h)
//
//
//      const renderContent = () => {
//
//        setcdown(!cdown)
//
//          return(
//              <></>
//          )
//
//
//
//      }
//
//
//
//
//
//
//
//
//     const sheetRef = useRef()
//      const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
//
//      return (
//          <>
//              <View
//                  style={{
//
//                      alignItems: 'center',
//                      justifyContent: 'center',
//
//                  }}
//              >
//                  <FlatList style={{marginHorizontal: "3%", marginTop: hp("1%",)}}
//                            data={songs}
//                            keyExtractor={item => item.id}
//                            horizontal={true}
//                            renderItem={({
//                                             item, index
//                                         }) => {
//
//                                return (
//                                    <>
//                                        <TouchableOpacity
//                                            onPress={() => {
//                                                setT(true)
//                                                sets(index)
//                                                seth(!h)
//
//                                            }}>
//
//                                            <View style={{
//
//                                                marginVertical: hp("0.2%"),
//                                                alignItems: "center",
//                                                paddingLeft: wp("3%"),
//                                                marginBottom: hp("2%"),
//
//
//                                            }}>
//
//                                                <View style={{
//                                                    borderWidth: wp("1.5%"),
//                                                    borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
//                                                    justifyContent: "center",
//                                                    borderColor: "#FF7303",
//                                                    alignItems: "center",
//                                                    height: 90,
//                                                    width: 90,
//
//
//                                                }}>
//                                                    <Image style={{
//                                                        height: "100%",
//                                                        width: "100%",
//                                                        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
//                                                        backgroundColor: "lightblue",
//                                                        resizeMode: "cover"
//                                                    }}
//                                                           source={require("../Project/Images/check.jpg")}/>
//
//                                                </View>
//                                                <View style={{}}>
//                                                    <Text style={{
//                                                        marginTop: hp("1%"),
//                                                        color: "yellow"
//                                                    }}>{item.title}</Text>
//                                                </View>
//                                            </View>
//
//                                        </TouchableOpacity>
//
//
//                                    </>);
//                            }}/>
//              </View>
//
//
//              <BottomSheet
//
//                  ref={sheetRef}
//                  initialSnapIndex={1}
//                  snapPoints={snapPoints}
//                  handleComponent={()=> t === true ? <Play pk={songs} index1={s}/> : null}
//              >
//
//              </BottomSheet>
//          </>
//      );
//
//  }
//
//
// const styles = StyleSheet.create({
//     title: {
//         fontSize: 28,
//         textAlign: 'center',
//         fontWeight: '600',
//         textTransform: 'capitalize',
//         color: '#ffffff',
//     },
//     artist: {
//         fontSize: 18,
//         textAlign: 'center',
//         color: '#ffffff',
//         textTransform: 'capitalize',
//     },
//     container: {
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         height: height,
//         maxHeight: 600,
//     },
// });
// export default App


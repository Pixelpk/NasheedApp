import React, {useContext, useState} from "react";
import {Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import BlogContext from "../ContextApi";

const Notification =()=> {
    const {notification, setNotification} = useContext(BlogContext)




    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>

            <View style={{marginTop: hp("1%")}}>

                <FlatList style={{marginHorizontal: "6%", marginBottom: hp("2%")}}
                          data={notification}
                          keyExtractor={item => item.id}
                          renderItem={({item, index}) => {
                              return (
                                  <View style={{}}>

                                      <TouchableOpacity
                                          onPress={() => alert("check")}>

                                          <View style={{
                                                  flexDirection: "row",
                                                  borderRadius: 8,
                                                  marginTop: 10,
                                                  backgroundColor: "#1F1F21",
                                              }}>

                                                  <View style={{justifyContent: "center"}}>
                                                      <Image source={{uri: item.notifier_profile_image}}
                                                             style={{height: 72, width: 72, borderRadius: 8}}/>
                                                  </View>

                                                  {item.type = "liked_track" ?

                                                  <View style={{flex: 1, justifyContent: "center", marginLeft: 12}}>
                                                      <Text numberOfLines={1} style={{

                                                          fontSize: 14,
                                                          color: "white",
                                                      }}>
                                                          {item.notifier_name} liked your track
                                                      </Text>


                                                      <Text style={{
                                                          fontSize: 9,
                                                          fontFamily: "Poppins-Regular",
                                                          color: "white"
                                                      }}>
                                                          2 days ago
                                                      </Text>
                                                  </View> : <View style={{flex: 1, justifyContent: "center", marginLeft: 12}}>
                                                          <Text numberOfLines={1} style={{

                                                              fontSize: 14,
                                                              color: "white",
                                                          }}>
                                                              {item.notifier_name} disliked your track
                                                          </Text>


                                                          <Text style={{
                                                              fontSize: 9,
                                                              fontFamily: "Poppins-Regular",
                                                              color: "white"
                                                          }}>
                                                              red
                                                          </Text>
                                                      </View> }
                                                  {/*<View style={{*/}
                                                  {/*    width: wp("15%"),*/}
                                                  {/*    flexDirection: "row",*/}
                                                  {/*    justifyContent: "center",*/}
                                                  {/*    alignItems: "center"*/}
                                                  {/*}}>*/}
                                                  {/*    <LinearGradient colors={["#FFD303", "#FF3803"]} style={{*/}
                                                  {/*        justifyContent: "center",*/}
                                                  {/*        alignItems: "center",*/}
                                                  {/*        height: 40,*/}
                                                  {/*        width: 40,*/}
                                                  {/*        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)*/}
                                                  {/*    }}>*/}
                                                  {/*        <Entypo name={"controller-play"} color={"white"} size={25}/>*/}

                                                  {/*    </LinearGradient>*/}

                                                  {/*</View>*/}
                                              </View>
                                      </TouchableOpacity>
                                  </View>


                              );
                          }}
                />
            </View>

        </SafeAreaView>

    )
}
export default Notification

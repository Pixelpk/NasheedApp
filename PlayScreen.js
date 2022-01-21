import React, {useRef} from "react";
import {Animated, Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Slider} from "react-native-elements/dist/slider/Slider";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";


const PlayScreen = () => {
    const navigation = useNavigation()

    const {width,height} = Dimensions.get("window")

    const data = [
        {
            name: "awards sdsds",
            image: require("./Images/check.jpg"),

        },
        {
            name: "June Cha",
            email: "june.cha@gmail.com",
            color: "yellow",
            image: require("./Images/check.jpg"),
        },

        {
            name: "Iida Niskanen",
            email: "iida.niskanen@gmail.com",
            color: "green",
            image: require("./Images/check.jpg"),

        },
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "black",
            image: require("./Images/check.jpg"),

        },
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "black",
            image: require("./Images/check.jpg"),

        },
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "black",
            image: require("./Images/check.jpg"),

        },
    ]




    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: hp("5%")}}>
                <View>
                    <MaterialIcons  onPress={()=>navigation.navigate("DashBoard")} style={{marginLeft: wp("2%")}} name="keyboard-arrow-left" color="white" size={27}/>
                </View>
                <View style={{width: hp("27%"), flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Text numberOfLines={1} style={{textAlign: "center", fontSize: hp("2%"), color: "white"}}>
                        Tum Shehar e Aman kallp sdskd
                    </Text>

                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <EvilIcons style={{}} name="heart" color="white" size={20}/>
                    <Entypo style={{marginLeft: hp("1%")}} name={"dots-three-vertical"} size={15} color={"white"}/>
                </View>
            </View>

            <View style={{flex: 1, alignItems: "center"}}>

                <FlatList style={{height:hp("10%"),marginHorizontal: "3%", marginTop:hp("10%",)}}
                          data={data}
                          scrollEventThrottle={16}
                          pagingEnabled={true}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          renderItem={({
                                           item, index
                                       }) => {
                              return (
                                  <View style={{width:width-25, justifyContent:"center", alignItems:"center"}} >
                                  <LinearGradient colors={["#FFD303", "#FF3803"]} style={{
                                      justifyContent: "center", alignItems: "center", height: hp("28%"), width: hp("28%"), borderRadius: 30,
                                  }}>
                                      <Image source={ require("./Images/check.jpg")}
                                             style={{ height: "95%", width: "95%", borderRadius: 20}}/>
                                  </LinearGradient>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{color:"white", fontSize:hp("2%"), fontWeight:"bold"}}>
                                            Tum Shehar e Aman k...
                                      </Text>
                                        <Text style={{color:"#AAAAAA", fontSize:hp("1.5%") }}>
                                            JAMIAT CATEGORY
                                      </Text>
                                    </View>
                                  </View>



                              );
                          }}
                />

                <View style={{
                    width: "70%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: hp("12%")
                }}>
                    <Ionicons style={{marginRight: wp("2%")}} name="shuffle" color="white" size={15}/>

                    <FontAwesome5 style={{marginRight: wp("2%")}} name="step-backward" color="white" size={15}/>

                    <View style={{}}>
                        <LinearGradient colors={["#FFD303", "#FF3803"]} style={{
                            marginRight: wp("2%"),
                            top: -20,
                            justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: 20
                        }}>
                            <Entypo name={"controller-play"} color={"white"} size={25}/>

                        </LinearGradient>
                    </View>
                    <FontAwesome5 style={{marginRight: wp("2%")}} name="step-forward" color="white" size={15}/>
                    <FontAwesome5 style={{marginRight: wp("2%")}} name="volume-up" color="white" size={15}/>


                </View>
                <View style={{flex:1, width:"80%"}}>
                    <View>
                        <Slider thumbStyle={{height:15,width:15}} thumbTintColor={"orange"} maximumValue={100} minimumValue={0} style={{height:hp("3.2%")}}>

                        </Slider>

                    </View>
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{ fontSize:hp("1.5%"),color:"#AAAAAA"}}>
                            0:00
                        </Text>
                        <Text style={{ fontSize:hp("1.5%"),color:"#AAAAAA"}}>
                            3:00
                        </Text>


                    </View>

                </View>

            </View>



        </SafeAreaView>
    )


}

export default PlayScreen

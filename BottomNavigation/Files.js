import React, {useState} from "react";
import {Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import Popular from "../TabNavigation/LatestNasheeds";
import TopNasheeds from "../TabNavigation/TopNasheeds";
import Favourite from "../TabNavigation/NewNasheeds";
import Albums from "../TabNavigation/Albums";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useNavigation} from "@react-navigation/native";
import {SearchBar} from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
const Tab = createMaterialTopTabNavigator();

const Files =()=>{

    const data = [
        {
            name: "Tum Shehar e Aman ksas",
            email: "2 days ago",
            color: "red"


        },
        {
            name: "Tekken Tournament held at VisionX",
            email: "2 days ago",
            color: "yellow"},

        {
            name: "Tekken Tournament held at VisionX",
            email: "1 day ago",
            color:"green"

        },
        {
            name: "Video",
            email: "1 day ago",
            color: "red",

        },
        {
            name: "Buddy Info",
            email: "1 day passed",
            color:"green"

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },
        {
            name: "Video",
            email: "1 day passed",
            color: "red",

        },

    ]

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const navigation = useNavigation()


    const searchFilterFunction = (text) => {

        if (text) {

            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };


    return(
        <SafeAreaView style={{ backgroundColor:"black", height:"100%", width:"100%"}}>

           {/* <View style={{marginTop:hp("1%")}}>*/}

           {/*     <SearchBar*/}
           {/*         inputContainerStyle={{backgroundColor: '#222225', borderRadius:20}}*/}

           {/*         showLoading={false}*/}

           {/*         containerStyle={{*/}
           {/*             backgroundColor: 'black',*/}
           {/*             marginHorizontal: 15,*/}
           {/*             borderWidth: 0,*/}
           {/*             shadowColor: "#000",*/}
           {/*             borderBottomColor: 'transparent',*/}
           {/*             borderTopColor: 'transparent'*/}
           {/*         }}*/}
           {/*         inputStyle={*/}
           {/*             {fontSize:hp("2%")}*/}
           {/*         }*/}

           {/*         clearIcon={true}*/}
           {/*         onClearText={() => console.log('onClearText')}*/}
           {/*         onChangeText={(text) => searchFilterFunction(text)}*/}
           {/*         onClear={(text) => searchFilterFunction('')}*/}
           {/*         placeholder='Search..'*/}
           {/*         cancelButtonTitle='Cancel'*/}
           {/*         round*/}
           {/*         searchIcon={{size: 24, color:"orange"}}*/}
           {/*         value={search}*/}
           {/*     />*/}
           {/* </View>*/}
           {/*<View>*/}
           {/*    <FlatList style={{marginHorizontal: "3%", marginTop:"2%"}}*/}
           {/*               data={data}*/}
           {/*               keyExtractor={item => item.id}*/}
           {/*               horizontal={true}*/}
           {/*               renderItem={({*/}
           {/*                                item, index*/}
           {/*                            }) => {*/}
           {/*                   return (*/}
           {/*                       <TouchableOpacity*/}
           {/*                           onPress={() => {*/}
           {/*                               alert("working")*/}
           {/*                           }}>*/}

           {/*                           <View style={{height: hp("16%"), width: wp("27%"),justifyContent: "center", marginLeft: wp("5%")}}>*/}
           {/*                               <Image*/}
           {/*                                   style={{borderRadius: 20, height:"100%", width:"100%", resizeMode:"cover"}}*/}
           {/*                                   source={require("../Images/check.jpg")}/>*/}
           {/*                           </View>*/}
           {/*                           <View style={{*/}

           {/*                               width:wp("27%"),*/}
           {/*                               height:hp("5%"),*/}
           {/*                               marginLeft: hp("4%"),*/}

           {/*                           }}>*/}
           {/*                               <Text style={{*/}
           {/*                                   fontWeight:"bold",*/}
           {/*                                   fontSize: hp("2%"),*/}
           {/*                                   color: "white",*/}
           {/*                                   textAlign:"center"*/}
           {/*                               }}>*/}
           {/*                                   {item.color}*/}
           {/*                               </Text>*/}


           {/*                           </View>*/}


           {/*                       </TouchableOpacity>*/}
           {/*                   );*/}
           {/*               }}*/}
           {/*     />*/}
           {/*</View>*/}
           {/* <View style={{marginTop:hp("2%",), flexDirection:"row", alignItems:"center"}}>*/}
           {/*     <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>*/}
           {/*     </View>*/}
           {/*     <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>*/}
           {/*         Top List*/}
           {/*     </Text>*/}

           {/* </View>*/}


           {/* <FlatList style={{marginHorizontal:"6%", marginBottom:hp("2%")}}*/}
           {/*           data={data}*/}
           {/*           keyExtractor={item => item.id}*/}
           {/*           renderItem={({item, index}) => {*/}
           {/*               return (*/}

           {/*                   <TouchableOpacity*/}
           {/*                       onPress={() => {*/}
           {/*                           navigation.navigate("DiscoveryInfo")*/}

           {/*                       }}>*/}
           {/*                       <View style={{flexDirection:"row" ,borderRadius:8, marginTop:20, paddingBottom:2, backgroundColor:"#1F1F21"}}>*/}

           {/*                           <View style={{justifyContent:"center"}}>*/}
           {/*                               <Image source={require("../Images/check.jpg")} style={{height:72,width:72, borderRadius:8}}/>*/}
           {/*                           </View>*/}
           {/*                           <View style={{flex:1, justifyContent:"center", marginLeft:12}}>*/}
           {/*                               <Text numberOfLines={1} style= {{width:wp("40%"),fontFamily:"Poppins-Bold",  fontSize:14, color:"white", justifyContent:"center"}}>*/}
           {/*                                   {item.name}*/}
           {/*                               </Text>*/}
           {/*                               <Text style={{ fontSize: 9, fontFamily:"Poppins-Regular",color:"white"}}>*/}
           {/*                                   {item.email}*/}
           {/*                               </Text>*/}
           {/*                               <Text style={{ fontSize: 9, fontFamily:"Poppins-Regular",color:"white"}}>*/}
           {/*                                   {item.color}*/}
           {/*                               </Text>*/}
           {/*                           </View>*/}
           {/*                           <View style={{width:wp("15%"),flexDirection:"row", justifyContent:"center", alignItems:"center"}}>*/}
           {/*                               <LinearGradient colors={["#FFD303", "#FF3803"]} style={{*/}
           {/*                                   justifyContent:"center", alignItems:"center", height:40, width:40, borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)*/}
           {/*                               }}>*/}
           {/*                                   <Entypo name={"controller-play"} color={"white"} size={25}/>*/}

           {/*                               </LinearGradient>*/}
           {/*                               <View style={{marginLeft:wp("3%")}}>*/}
           {/*                                   <Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={15} color={"#AAAAAA"}/>*/}
           {/*                               </View>*/}
           {/*                           </View>*/}
           {/*                       </View>*/}
           {/*                   </TouchableOpacity>*/}
           {/*               );*/}
           {/*           }}*/}
           {/* />*/}

        </SafeAreaView>

    )
}
export default Files

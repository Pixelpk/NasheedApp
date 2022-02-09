import React, {useContext, useState} from "react";
import {Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
import {SearchBar} from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import data from "./check/data";
import BlogContext from "./ContextApi";


const CatagoryScreen =({route})=> {
    const {setHack, hack, dat, topSong, newNasheed, latestNasheed,setcheck2,check2} = useContext(BlogContext)

    const {name, songs} = route.params;
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);



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


    const navigation = useNavigation()

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>

            <View style={{flexDirection: "row", justifyContent: "center", marginTop: hp("5%")}}>
                {/*<View>*/}
                {/*    <MaterialIcons onPress={() => navigation.navigate("DashBoard")} style={{}}*/}
                {/*                   name="keyboard-arrow-left" color="white" size={27}/>*/}
                {/*</View>*/}
                <View style={{width: hp("27%"), flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Text numberOfLines={1} style={{textAlign: "center", fontSize: hp("2%"), color: "white"}}>
                        {name}
                    </Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>

                </View>
            </View>

            <View style={{marginTop: hp("1%")}}>

                <SearchBar
                    inputContainerStyle={{backgroundColor: '#222225', borderRadius: 20}}

                    showLoading={false}

                    containerStyle={{
                        backgroundColor: 'black',
                        marginHorizontal: 15,
                        borderWidth: 0,
                        shadowColor: "#000",
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent'
                    }}
                    inputStyle={
                        {fontSize: hp("2%")}
                    }

                    clearIcon={true}
                    onClearText={() => console.log('onClearText')}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder='Search..'
                    cancelButtonTitle='Cancel'
                    round
                    searchIcon={{size: 24, color: "orange"}}
                    value={search}
                />
            </View>

            <FlatList style={{marginHorizontal: "6%", marginBottom: hp("2%")}}
                      data={songs}
                      keyExtractor={item => item.id}
                      renderItem={({item, index}) => {
                          return (
                              <View style={{}}>
                                          {item.cateogry_name === name ?
                                              null:

                                          <TouchableOpacity
                                              onPress={() => {
                                                  setcheck2(true)
                                                  navigation.navigate("DashBoard", {
                                                      index1: index,
                                                      pk: songs,
                                                      img: item.thumbnail_url,

                                                  })

                                              }}>
                                              <View style={{
                                                  flexDirection: "row",
                                                  borderRadius: 8,
                                                  marginTop: 20,
                                                  paddingBottom: 2,
                                                  backgroundColor: "#1F1F21"
                                              }}>

                                                  <View style={{justifyContent: "center"}}>
                                                      <Image source={{uri:item.thumbnail_url}}
                                                             style={{height: 72, width: 72, borderRadius: 8}}/>
                                                  </View>
                                                  <View style={{flex: 1, justifyContent: "center", marginLeft: 12}}>
                                                      <Text numberOfLines={1} style={{
                                                          width: wp("40%"),
                                                          fontFamily: "Poppins-Bold",
                                                          fontSize: 14,
                                                          color: "white",
                                                          justifyContent: "center"
                                                      }}>
                                                          {item.title}
                                                      </Text>
                                                      <Text style={{
                                                          fontSize: 9,
                                                          fontFamily: "Poppins-Regular",
                                                          color: "white"
                                                      }}>
                                                          {item.email}
                                                      </Text>
                                                      <Text style={{
                                                          fontSize: 9,
                                                          fontFamily: "Poppins-Regular",
                                                          color: "white"
                                                      }}>
                                                          {item.color}
                                                      </Text>
                                                  </View>
                                                  <View style={{
                                                      width: wp("15%"),
                                                      flexDirection: "row",
                                                      justifyContent: "center",
                                                      alignItems: "center"
                                                  }}>
                                                      <LinearGradient colors={["#FFD303", "#FF3803"]} style={{
                                                          justifyContent: "center",
                                                          alignItems: "center",
                                                          height: 40,
                                                          width: 40,
                                                          borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                                                      }}>
                                                          <Entypo name={"controller-play"} color={"white"} size={25}/>

                                                      </LinearGradient>

                                                  </View>
                                              </View>
                                          </TouchableOpacity>
                                          }
                              </View>


                          );
                      }}
            />

        </SafeAreaView>

    )
}

export default CatagoryScreen

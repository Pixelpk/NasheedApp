import React, {useContext, useEffect, useState} from "react";
import {Dimensions, FlatList,SafeAreaView, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {useNavigation} from "@react-navigation/native";
import BlogContext from "../ContextApi";
import {get_data} from "../AsyncController/Controller";




const Home =()=> {

    const {setHack, hack, dat, topSong, newNasheed, latestNasheed,setcheck2,check2} = useContext(BlogContext)


    //
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         get_data("User_DATA")
    //             .then((response) => {
    //                 setHack(response)
    //             })
    //             .catch((error) => {
    //                 console.log(error.response);
    //             });
    //
    //     });
    //     return unsubscribe
    //
    //
    // }, [navigation])


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

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "#171719"}}>
            <ScrollView style={{marginBottom: hp("2%")}}>
            {hack === null ? <View style={{backgroundColor:"#FF7303", flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
                <View style={{marginVertical:hp("2%")}}>
                    <Text style={{fontSize:hp("1.6%"),color:"white"}}>EXPLORE YOUR FAVOURITE NASHEEDS</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} style={{backgroundColor:"black", borderRadius:15, marginLeft:wp("6%")}}>
                    <Text style={{fontWeight:"bold", color:"white", marginVertical:2, marginHorizontal:10}}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                <View>

                </View>
            </View> : null

            }

            <View style={{marginTop: hp("4%",), flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        height: hp("1%"),
                        width: wp("1.8%"),
                        marginLeft: wp("7%"),
                        backgroundColor: "#FF7303",
                        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
                    }}>
                    </View>
                    <Text style={{fontSize: hp("1.5%"), fontWeight: "bold", color: "white", marginLeft: wp("1.2%")}}>
                        GENRE
                    </Text>

                </View>
                <View>
                    <FlatList style={{marginHorizontal: "3%", marginTop: hp("1%")}}
                              data={dat}
                              keyExtractor={item => item.id}
                              horizontal={true}
                              renderItem={({
                                               item, index
                                           }) => {
                                  return (
                                      <TouchableOpacity
                                          onPress={() => {
                                              navigation.navigate("CatagoryScreen", {
                                                  name: item.cateogry_name,
                                                  songs: item.songs
                                              })
                                          }}>

                                          <View style={{
                                              height: hp("14%"),
                                              width: wp("27%"),
                                              justifyContent: "center",
                                              marginLeft: wp("7%")
                                          }}>
                                              <Image
                                                  style={{
                                                      borderRadius: 10,
                                                      height: "100%",
                                                      width: "100%",
                                                      resizeMode: "cover"
                                                  }}
                                                  source={{uri: item.background_thumb_url}}/>
                                          </View>
                                          <View style={{

                                              width: wp("27%"),
                                              height: hp("5%"),
                                              marginLeft: hp("4%"),

                                          }}>
                                              <Text style={{
                                                  fontSize: hp("2%"),
                                                  color: "white",
                                                  textAlign: "center"
                                              }}>
                                                  {item.cateogry_name}
                                              </Text>


                                          </View>

                                      </TouchableOpacity>
                                  );
                              }}
                    />

                </View>
                <View style={{marginTop: hp("3%",), flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        height: hp("1%"),
                        width: wp("1.8%"),
                        marginLeft: wp("7%"),
                        backgroundColor: "#FF7303",
                        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
                    }}>
                    </View>
                    <Text style={{fontSize: hp("1.5%"), fontWeight: "bold", color: "white", marginLeft: wp("1.2%")}}>
                        TOP NASHEEDS
                    </Text>

                </View>
                <View>
                    <FlatList style={{marginHorizontal: "3%", marginTop: hp("1%")}}
                              data={topSong}
                              keyExtractor={item => item.id}
                              horizontal={true}
                              renderItem={({
                                               item, index
                                           }) => {
                                  return (
                                      <TouchableOpacity
                                          onPress={ () => {
                                               setcheck2(true)
                                               navigation.navigate("DashBoard", {
                                                  index1: index,
                                                  pk: topSong,
                                                  img: item.thumbnail_url,

                                              })
                                          }}>

                                          <View style={{
                                              height: hp("25%"),
                                              width: wp("45%"),
                                              justifyContent: "center",
                                              marginLeft: wp("7%")
                                          }}>
                                              <Image
                                                  style={{
                                                      borderRadius: 10,
                                                      height: "100%",
                                                      width: "100%",
                                                      resizeMode: "cover"
                                                  }}
                                                  source={{uri: item.thumbnail_url}}/>
                                          </View>
                                          <View style={{

                                              width: wp("44%"),
                                              height: hp("7%"),
                                              marginLeft: hp("4%"),
                                              marginTop: hp("0.1%"),

                                          }}>
                                              <Text numberOfLines={1} style={{

                                                  fontSize: hp("2%"),
                                                  color: "white",
                                              }}>
                                                  {item.title}
                                              </Text>
                                              <Text style={{
                                                  textAlign: "center",

                                                  fontSize: hp("1.5%"),
                                                  color: "#6E6E6E",
                                              }}>
                                                  {item.username}
                                              </Text>

                                          </View>


                                      </TouchableOpacity>
                                  );
                              }}/>

                </View>
                <View style={{marginTop: hp("3%",), flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        height: hp("1%"),
                        width: wp("1.8%"),
                        marginLeft: wp("7%"),
                        backgroundColor: "#FF7303",
                        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
                    }}>
                    </View>
                    <Text style={{fontSize: hp("1.5%"), fontWeight: "bold", color: "white", marginLeft: wp("1.2%")}}>
                        NEW NASHEEDS
                    </Text>

                </View>
                <View>
                    <FlatList style={{marginHorizontal: "3%", marginTop: hp("1%")}}
                              data={newNasheed}
                              keyExtractor={item => item.id}
                              horizontal={true}
                              renderItem={({
                                               item, index
                                           }) => {
                                  return (
                                      <TouchableOpacity
                                          onPress={() => {
                                              setcheck2(true)
                                              navigation.navigate("DashBoard", {
                                                  index1: index,
                                                  pk: newNasheed,
                                                  img: item.thumbnail_url,

                                              })
                                          }}>

                                          <View style={{
                                              height: hp("25%"),
                                              width: wp("45%"),
                                              justifyContent: "center",
                                              marginLeft: wp("7%")
                                          }}>
                                              <Image
                                                  style={{
                                                      borderRadius: 10,
                                                      height: "100%",
                                                      width: "100%",
                                                      resizeMode: "cover"
                                                  }}
                                                  source={{uri: item.thumbnail_url}}/>
                                          </View>
                                          <View style={{

                                              width: wp("44%"),
                                              height: hp("7%"),
                                              marginLeft: hp("4%"),
                                              marginTop: hp("0.1%"),
                                          }}>
                                              <Text numberOfLines={1} style={{

                                                  fontSize: hp("2%"),
                                                  color: "white",
                                              }}>
                                                  {item.title}
                                              </Text>
                                              <Text style={{

                                                  textAlign: "center",

                                                  fontSize: hp("1.5%"),
                                                  color: "#6E6E6E",
                                              }}>
                                                  {item.username}
                                              </Text>

                                          </View>


                                      </TouchableOpacity>
                                  );
                              }}/>

                </View>
                <View style={{marginTop: hp("3%",), flexDirection: "row", alignItems: "center"}}>
                    <View style={{
                        height: hp("1%"),
                        width: wp("1.8%"),
                        marginLeft: wp("7%"),
                        backgroundColor: "#FF7303",
                        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
                    }}>
                    </View>
                    <Text style={{fontSize: hp("1.5%"), fontWeight: "bold", color: "white", marginLeft: wp("1.2%")}}>
                        LATEST NASHEEDS
                    </Text>

                </View>
                <View>
                    <FlatList style={{marginHorizontal: "3%", marginTop: hp("1%")}}
                              data={latestNasheed}
                              keyExtractor={item => item.id}
                              horizontal={true}
                              renderItem={({
                                               item, index
                                           }) => {
                                  return (
                                      <TouchableOpacity
                                          onPress={() => {
                                              setcheck2(true)
                                              navigation.navigate("DashBoard", {
                                                  index1: index,
                                                  pk: latestNasheed,
                                                  img: item.thumbnail_url,
                                              })
                                          }}>

                                          <View style={{
                                          height: hp("25%"),
                                              width: wp("45%"),
                                              justifyContent: "center",
                                              marginLeft: wp("7%")
                                          }}>
                                              <Image
                                                  style={{
                                                      borderRadius: 10,
                                                      height: "100%",
                                                      width: "100%",
                                                      resizeMode: "cover"
                                                  }}
                                                  source={{uri: item.thumbnail_url}}/>
                                          </View>
                                          <View style={{

                                              width: wp("45%"),
                                              height: hp("7%"),
                                              marginLeft: hp("4%"),
                                              marginTop: hp("0.1%"),
                                          }}>
                                              <Text numberOfLines={1} style={{
                                                  fontSize: hp("2%"),
                                                  color: "white",
                                              }}>
                                                  {item.title}
                                              </Text>
                                              <Text style={{
                                                    textAlign:"center",
                                                  fontSize: hp("1.5%"),
                                                  color: "#6E6E6E",
                                              }}>
                                                  {item.username}
                                              </Text>

                                          </View>


                                      </TouchableOpacity>
                                  );
                              }}/>

                </View>
            </ScrollView>

        </SafeAreaView>

    )


}
export default Home

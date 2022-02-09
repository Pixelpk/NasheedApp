import React, {useContext, useEffect, useState} from "react";
import {Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {SearchBar} from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import BlogContext from "../ContextApi";


const TopNasheeds =()=>{
    const {topSong} = useContext(BlogContext)

    const [search, setSearch] = useState('');
    const [check, setcheck] = useState(null);
    const [title, setTitle] = useState(null);
    const [filteredDataSource, setFilteredDataSource] = useState(topSong);
    const [masterDataSource, setMasterDataSource] = useState(topSong)
    const navigation = useNavigation()


    const searchFilterFunction = (text) => {

        if (text) {
            const newData = masterDataSource.filter(function (item) {

                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();

                return itemData.indexOf(textData)>-1 ;

            });
            setFilteredDataSource(newData);
            setSearch(text);
        }
        else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);

        }

    };


    const getItem = (item) => {

        setTitle(item.id)
        var hack  = topSong.findIndex( (element) => element.id === title);
        return hack
        }

    return(
        <SafeAreaView style={{ backgroundColor:"black", height:"100%", width:"100%"}}>

            <View style={{marginTop:hp("1%")}}>

                <SearchBar
                    inputContainerStyle={{backgroundColor: '#222225', borderRadius:20}}

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
                        {fontSize:hp("2%")}
                    }
                    clearIcon={true}
                    onClearText={() => console.log('onClearText')}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder='Search..'
                    cancelButtonTitle='Cancel'
                    round
                    searchIcon={{size: 24, color:"orange"}}
                    value={search}
                />
            </View>
            <View style={{marginTop:hp("2%",), flexDirection:"row", alignItems:"center"}}>
                <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>
                </View>
                <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>
                    Top Nasheeds
                </Text>
            </View>


            <FlatList style={{marginHorizontal:"6%", marginBottom:hp("2%")}}
                      data={filteredDataSource}
                      keyExtractor={item => item.id}
                      renderItem={({item, index}) => {

                          return (

                              <TouchableOpacity

                                  onPress={() => {
                                      setcheck2(true)
                                      navigation.navigate("DashBoard", {
                                          index1: index,
                                          pk: topSong,
                                          img: item.thumbnail_url,
                                      })

                                      // index1:  topSong.findIndex( (element) => element.id === item.id),

                                  }}>
                                  <View style={{flexDirection:"row" ,borderRadius:8, marginTop:20, paddingBottom:2, backgroundColor:"#1F1F21"}}>

                                      <View style={{justifyContent:"center"}}>
                                          <Image source={{uri:item.thumbnail_url}} style={{height:72,width:72, borderRadius:8}}/>
                                      </View>
                                      <View style={{flex:1, justifyContent:"center", marginLeft:12}}>
                                          <Text numberOfLines={1} style= {{width:wp("40%"),fontFamily:"Poppins-Bold",  fontSize:14, color:"white", justifyContent:"center"}}>
                                              {item.title}
                                          </Text>

                                      </View>
                                      <View style={{width:wp("15%"),flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                          <LinearGradient colors={["#FFD303", "#FF3803"]} style={{
                                              justifyContent:"center", alignItems:"center", height:40, width:40, borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                                          }}>
                                              <Entypo name={"controller-play"} color={"white"} size={25}/>

                                          </LinearGradient>
                                          <View style={{marginLeft:wp("3%")}}>
                                              {/*<Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={15} color={"#AAAAAA"}/>*/}
                                          </View>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          );
                      }}
            />

        </SafeAreaView>
    )




}

export default TopNasheeds

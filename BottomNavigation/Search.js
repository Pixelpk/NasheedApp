import React, {useContext, useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import {StyleSheet, View, TouchableOpacity, Text, SafeAreaView, FlatList, Image, Dimensions} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {SearchBar} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import {

    BarIndicator,

} from "react-native-indicators";
import BlogContext from "../ContextApi";


const Search = () => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(null);
    const [masterDataSource, setMasterDataSource] = useState(null)
    const [state, setState] = useState(null)
    const {setcheck2} = useContext(BlogContext)

    const navigation = useNavigation()
    const [loader, setLoader] = useState(false)
    const getApidata = async () => {
        try {
            setLoader(true)
            await axios.get('https://api.thenasheed.com/api/search/'+search).then((response) => {

                if (response.data.status === true) {
                    setState(response.data.genres)
                    setLoader(false)

                }

                else if (response.data.status === false) {
                    alert("No Record Found")
                    setLoader(false)
                }


            })

                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.error(error);
        }
    }


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
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
            {loader === true ?

                <View style={{flex: 1, backgroundColor: "black", justifyContent: "center"}}>

                    <View><BarIndicator properties color={"white"} size={40} animationDuration={900}/></View>
                    <Text style={{color: "white", fontSize: hp("2%"), marginTop: hp("4%"), textAlign: "center"}}>
                        Searching...
                    </Text>
                </View> :

                <View style={{flex:1}}>

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
                        onChangeText={(text) => setSearch(text)}
                        onBlur={() => {
                            search === "" ? alert("Search Emplty") : getApidata()
                        }}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder='Search..'
                        cancelButtonTitle='Cancel'
                        round
                        searchIcon={{size: 24, color: "orange"}}
                        value={search}
                    />
                </View>

                 <FlatList style={{marginHorizontal:"6%", marginBottom:hp("2%")}}
                data={state}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {

                return (

                <TouchableOpacity

                onPress={() => {
                setcheck2(true)
                navigation.navigate("DashBoard", {
                index1: index,
                pk: state,
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

                </View>}

        </SafeAreaView>
    )

}

export default Search

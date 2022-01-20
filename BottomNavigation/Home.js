import React, {useEffect, useState} from "react";
import {Dimensions, FlatList,SafeAreaView, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {SearchBar} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";





const Home =()=>{

    const data = [
        {
            name:
                "awards sdsds",
            email: "JAMIAT CATEGORY",

        },
        {
            name: "June Cha",
            email: "june.cha@gmail.com",
            color: "yellow"
        },

        {
            name: "Iida Niskanen",
            email: "iida.niskanen@gmail.com",
            color: "green"

        },
        {
            name: "Basic Info",
            email: "1 day passed",
            color: "black",

        },
        {
            name: "June Cha",
            email: "1 day passed",
            color: "yellow"
        },

        {
            name: "Iida Niskanen",
            email: "1 day passed",
            color: "green"

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

    <SafeAreaView  style={{height:"100%",backgroundColor:"#171719"}}>
        <View style={{marginTop:hp("1%")}}>
            <SearchBar
                inputContainerStyle={{backgroundColor: 'black', borderRadius:20}}

                showLoading={false}

                containerStyle={{
                    backgroundColor: '#171719',
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
        <ScrollView style={{marginBottom:hp("2%")}} >
        <View style={{marginTop:hp("4%",), flexDirection:"row", alignItems:"center"}}>
           <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>
           </View>
            <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>
                GENRE
            </Text>

        </View>
        <View>
            <FlatList style={{marginHorizontal: "3%"}}
                      data={data}
                      keyExtractor={item => item.id}
                      horizontal={true}
                      renderItem={({
                                       item, index
                                   }) => {
                          return (
                              <TouchableOpacity
                                  onPress={() => {
                                    alert("working")
                                  }}>

                                      <View style={{height: hp("16%"), width: wp("27%"),justifyContent: "center", marginLeft: wp("7%")}}>
                                          <Image
                                              style={{borderRadius: 20, height:"100%", width:"100%", resizeMode:"cover"}}
                                              source={require("../Images/check.jpg")}/>
                                      </View>
                                      <View style={{

                                          width:wp("27%"),
                                          height:hp("5%"),
                                          marginLeft: hp("4%"),

                                      }}>
                                          <Text style={{
                                            fontWeight:"bold",
                                              fontSize: hp("2%"),
                                              color: "white",
                                              textAlign:"center"
                                          }}>
                                              {item.name}
                                          </Text>


                                      </View>


                              </TouchableOpacity>
                          );
                      }}/>

        </View>
        <View style={{marginTop:hp("3%",), flexDirection:"row", alignItems:"center"}}>
            <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>
            </View>
            <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>
                FAVIROUTE NASHEEDS
            </Text>

        </View>
        <View>
            <FlatList style={{marginHorizontal: "3%", marginTop:hp("1%")}}
                      data={data}
                      keyExtractor={item => item.id}
                      horizontal={true}
                      renderItem={({
                                       item, index
                                   }) => {
                          return (
                              <TouchableOpacity
                                  onPress={() => {
                                      alert("working")
                                  }}>

                                  <View style={{height: hp("30%"), width: wp("50%"),justifyContent: "center", marginLeft: wp("7%")}}>
                                      <Image
                                          style={{borderRadius: 20, height:"100%", width:"100%", resizeMode:"cover"}}
                                          source={require("../Images/check.jpg")}/>
                                  </View>
                                  <View style={{

                                      width:wp("27%"),
                                      height:hp("7%"),
                                      marginLeft: hp("4%"),
                                      marginTop: hp("0.1%"),
                                  }}>
                                      <Text style={{
                                          fontWeight:"bold",
                                          fontSize: hp("2%"),
                                          color: "white",
                                      }}>
                                          {item.name}
                                      </Text>
                                      <Text style={{

                                          fontSize: hp("1.5%"),
                                          color: "#6E6E6E",
                                      }}>
                                          {item.email}
                                      </Text>

                                  </View>


                              </TouchableOpacity>
                          );
                      }}/>

        </View>
        <View style={{marginTop:hp("3%",), flexDirection:"row", alignItems:"center"}}>
            <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>
            </View>
            <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>
                ARTISTS
            </Text>

        </View>
        <View>
            <FlatList style={{marginHorizontal: "3%", marginTop:hp("1%")}}
                      data={data}
                      keyExtractor={item => item.id}
                      horizontal={true}
                      renderItem={({
                                       item, index
                                   }) => {
                          return (
                              <TouchableOpacity
                                  onPress={() => {
                                      alert("working")
                                  }}>

                                  <View style={{
                                      height: hp("20%"),
                                      width:wp("29%"),
                                      marginVertical:hp("0.2%"),

                                  }}>



                                      <View style={{
                                          borderWidth: wp("1.5%"),
                                          borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,
                                          justifyContent: "center",
                                          borderColor:"#FF7303",
                                          alignItems: "center",
                                          height:90,
                                          width:90,
                                          marginLeft:"7%"
                                      }}>


                                          <Image style={{height: "100%", width: "100%",    borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) , backgroundColor:"lightblue", resizeMode:"cover"}}
                                                 source={require("../Images/Person.png")}/>

                                      </View>
                                      <Text style={{color:"yellow", textAlign:"center"}}> Check</Text>

                                  </View>



                              </TouchableOpacity>
                          );
                      }}/>

        </View>
        <View style={{ flexDirection:"row", alignItems:"center"}}>
            <View style={{height:hp("1%"), width:wp("1.8%"), marginLeft:wp("7%"), backgroundColor:"#FF7303",borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,}}>
            </View>
            <Text style={{fontSize:hp("2%"), fontWeight:"bold", color:"white", marginLeft:wp("1.2%")}}>
                TOP NASHEEDS
            </Text>

        </View>
        <View>
            <FlatList style={{marginHorizontal: "3%", marginTop:hp("1%")}}
                      data={data}
                      keyExtractor={item => item.id}
                      horizontal={true}
                      renderItem={({
                                       item, index
                                   }) => {
                          return (
                              <TouchableOpacity
                                  onPress={() => {
                                      alert("working")
                                  }}>

                                  <View style={{height: hp("16%"), width: wp("27%"),justifyContent: "center", marginLeft: wp("7%")}}>
                                      <Image
                                          style={{borderRadius: 20, height:"100%", width:"100%", resizeMode:"cover"}}
                                          source={require("../Images/check.jpg")}/>
                                  </View>
                                  <View style={{

                                      width:wp("27%"),
                                      height:hp("5%"),
                                      marginLeft: hp("4%"),
                                      marginTop: hp("0.1%"),
                                  }}>
                                      <Text style={{
                                          fontWeight:"bold",
                                          fontSize: hp("2%"),
                                          color: "white",
                                          textAlign:"center"
                                      }}>
                                          {item.name}
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

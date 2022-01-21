import React, {useState} from "react";
import {Image, SafeAreaView, StyleSheet,ScrollView, Text,TextInput, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";


const Register =()=>{
    const navigation = useNavigation()
    const [name, setName] = useState("")
    const [pass, setPass] = useState(true)
    const [hack,setHack] = useState(true)
    const [empty, setEmptyCheck] = useState("")

    const [valid, checkValid] = useState(false)

    const handleSubmit = () => {

        if(name === ""){
            setEmptyCheck("Empty Email");
            checkValid(true)


        }
        else if (name.match(/\d+/g)){
            setEmptyCheck("mstfa");
            checkValid(true)

        }
        else {
           navigation.navigate("DashBoard")
        }


    }
    return(
        <ScrollView>

            <SafeAreaView style={{ backgroundColor:"black"}}>
            <View style={{alignItems:"center", marginTop:hp("5%")}}>
                <Image source={require("./Images/LogoName.png")}/>
            </View>

            <View style={{marginTop:hp("4%"), marginLeft:wp("10%"), marginBottom:hp("4%")}}>
                <Text style={{color:"white", fontSize:hp("2%"),fontWeight:"bold"}}>
                    SIGN UP
                </Text>
            </View>
            <View>
                <TextInput onChangeText={name => setName(name)} defaultValue={name} placeholder="Full Name" placeholderTextColor="white" style={{paddingLeft:wp("3%"),color:"white",fontSize:hp("1.5%"),borderRadius:hp("1.7%"),height:hp("6%",), backgroundColor:"#222225", marginHorizontal:wp("7%")}}/>
                {valid === false? null
               : <View>

                        <Text style={{color:"red", marginLeft:wp("10%")}}>
                            {empty}
                        </Text>
                    </View>
                    }
            </View>
            <View>
                <TextInput placeholder="User Name" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("1.5%"),borderRadius:hp("1.7%"),height:hp("6%",), backgroundColor:"#222225", marginHorizontal:wp("7%"),marginTop:hp("2%")}}>
                </TextInput>
            </View>
            <View>
                <TextInput placeholder="Email" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("1.5%"),borderRadius:hp("1.7%"),height:hp("6%",), backgroundColor:"#222225", marginHorizontal:wp("7%"),marginTop:hp("2%")}}>
                </TextInput>
            </View>
                <View style={styles.container}>

                    <View style={styles.SectionStyle}>

                        <TextInput
                            style={{flex:1, color:"white", fontSize:hp("1.5%")}}
                            placeholder="Password"
                            placeholderTextColor={"white"}
                            underlineColorAndroid="transparent"
                            secureTextEntry={pass}
                        />
                        <Ionicons onPress={()=>setPass(!pass)} style={{marginRight:"2%"}} name={pass === false? "eye": "eye-off"} color={"orange"} size={25}/>

                    </View>

                </View>

                <View style={styles.container}>

                    <View style={styles.SectionStyle}>

                        <TextInput
                            style={{flex:1, color:"white", fontSize:hp("1.5%")}}
                            placeholder="Confirm Password"
                            placeholderTextColor={"white"}
                            underlineColorAndroid="transparent"
                            secureTextEntry={hack}
                        />
                        <Ionicons onPress={()=>setHack(!hack)} style={{marginRight:"2%"}} name={hack === false? "eye": "eye-off"} color={"orange"} size={25}/>

                    </View>

                </View>

                <View>
                <TouchableOpacity  onPress={()=> handleSubmit()}>
                    <LinearGradient style={{height:hp("5%"),marginTop:hp("4%"),justifyContent:"center", alignItems:"center", marginHorizontal:wp("7%"), borderRadius:hp("1.5%")}}  colors={["#FFD303", "#FF3803"]}>
                        <Text style={{color:"white", fontSize:hp("2%"), fontWeight:"bold"}}>
                            SignUp
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:wp("10%"), marginTop:hp("4%")}}>
                <Text style={{color:"white",textAlign:"center", fontSize:hp("1.3%")}}>
                  Already have an account?
                    <Text onPress={()=>navigation.navigate("SignIn")} style={{color:"#FF7303"}}>
                        Login {" "}
                    </Text>
                </Text>
            </View>
            <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:wp("10%"), marginTop:hp("1%")}}>
                <Text style={{color:"white",textAlign:"center", fontSize:hp("1.3%")}}>
                    By signing up, you agree to our {" "}

                    <Text style={{color:"#FF7303"}}>
                        Terms {""}
                    </Text>
                    <Text style={{color:"white"}}>
                        and {""}
                    </Text>
                    <Text style={{color:"#FF7303"}}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
            <View style={{alignItems:"center",justifyContent:"center", flexDirection:"row", marginVertical:hp("5%")}}>
                <Text style={{fontSize:hp("1.4%"), color:"white", fontWeight:"bold",marginBottom:hp("2%")}}>
                    CRAFTED WITH
                </Text>
                <Text >
                    {" "}
                </Text>
                <Image source={require("./Images/HeartLogo.png")} style={{marginBottom:hp("2%")}}/>
                <Text style={{marginBottom:hp("2%")}}  >
                    {" "}
                </Text>
                <Text style={{fontSize:hp("1.4%"),color:"white", fontWeight:"bold", marginBottom:hp("2%")}}>BY PIXEL PK TECHNOLOGIES </Text>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"1%",
      paddingHorizontal:20,

    },

    SectionStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222225',
        paddingLeft:10,
        borderColor: '#000',
        height: hp("6%"),
        borderRadius: 10 ,
        marginTop:hp("1.5%"),
        marginHorizontal:wp("2%")
    },



});
export default Register

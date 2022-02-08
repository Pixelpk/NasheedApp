import React, {useContext, useEffect, useState} from "react";
import {
    Image,
    KeyboardAvoidingView, Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Yup from "yup";
import {Formik} from 'formik'
import axios from "axios";
import {PacmanIndicator, SkypeIndicator} from "react-native-indicators";
import {get_data, save_data} from "./AsyncController/Controller";
import BlogContext, {BlogProvider} from "./ContextApi";

const SignupSchema = Yup.object().shape({

    userName: Yup.string()
        .required('Required').matches("^\\S*$", "no spaces").min(4, 'Atleast 4 character'),
    password: Yup.string().required('Required').min(4, 'Atleast 4 character'),

});
const SignIn = () => {


    const [loader, setLoader] = useState(false)
    const navigation = useNavigation()
    const [pass, setPass] = useState(true)
    const {setHack,dat,setDat} = useContext(BlogContext)


    return (
        <Formik initialValues={{
            userName: '',
            password: '',
        }}
                validationSchema={SignupSchema}

                onSubmit=  {  values => {
                    setLoader(true)
                    axios
                        .post("https://api.thenasheed.com/api/login", {
                            'username': values.userName,
                            'password': values.password,

                        },)
                        .then(async function (response) {


                            if (response.data.status === true) {
                                let Bearer = response.data.data.token;
                                let details= response.data.data

                                await save_data("ACCOUNT_DATA", Bearer)
                                await save_data("User_DATA", details)


                                navigation.navigate("DashBoard")
                            } else if (response.data.status === false) {
                                alert(response.data.message, "\n", response.data.message)
                                setLoader(false)
                            }

                        }
                        )

                        .catch(function (error) {
                            if (error) {
                                console.log(error)
                            }
                        });


                }}>


            {({isSubmitting, values, handleBlur, handleChange, errors, handleSubmit, touched}) => (


                <SafeAreaView style={{flex:1,backgroundColor: "black"}}>
                    {loader === true?

                    <View style={{flex:1, backgroundColor:"black", justifyContent:"center"}}>

                      <View><SkypeIndicator color={"white"} size={60} animationDuration={800} /></View>
                        <Text style={{color:"white",fontSize:hp("3%"), marginTop:hp("4%"),textAlign:"center"}}>
                            Signing in....
                        </Text>
                    </View>:

                    <KeyboardAvoidingView behavior="position">
                        <View style={{alignItems: "center", marginTop: hp("10%")}}>
                            <Image source={require("./Images/LogoName.png")}/>
                        </View>

                        <View style={{marginTop: hp("10%"), marginLeft: wp("10%"), marginBottom: hp("4%")}}>
                            <Text style={{color: "white", fontSize: hp("3%"), fontWeight: "bold"}}>
                                LOG IN
                            </Text>
                        </View>
                        <View style={styles.container}>

                            <View style={styles.SectionStyle}>

                                <TextInput
                                    style={{flex: 1, color: "white", fontSize: hp("1.5%")}}
                                    placeholder="User Name"
                                    placeholderTextColor={"white"}
                                    underlineColorAndroid="transparent"
                                    onBlur={handleBlur('userName')} value={values.userName}
                                    onChangeText={handleChange('userName')}
                                />
                            </View>
                        </View>
                        {errors.userName &&
                        <View>
                            <Text style={{color: "red", marginLeft: wp("10%")}}>
                                {errors.userName}
                            </Text>
                        </View>
                        }
                        <View style={styles.container}>

                            <View style={styles.SectionStyle}>

                                <TextInput
                                    style={{flex: 1, color: "white", fontSize: hp("1.5%")}}
                                    placeholder="Password"
                                    placeholderTextColor={"white"}
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={pass}
                                    onBlur={handleBlur('password')} value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                <Ionicons onPress={() => setPass(!pass)} style={{marginRight: "2%"}}
                                          name={pass === false ? "eye" : "eye-off"} color={"orange"} size={25}/>
                            </View>
                        </View>
                        {errors.password &&
                        <View>
                            <Text style={{color: "red", marginLeft: wp("10%")}}>
                                {errors.password}
                            </Text>
                        </View>
                        }

                        <View>
                            <TouchableOpacity onPress={handleSubmit}>
                                <LinearGradient style={{
                                    height: hp("6%"),
                                    marginTop: hp("4%"),
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: wp("7%"),
                                    borderRadius: hp("1.5%")
                                }} colors={["#FFD303", "#FF3803"]}>
                                    <Text style={{color: "white", fontSize: hp("2%"), fontWeight: "bold"}}>
                                        LOGIN
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginHorizontal: wp("10%"),
                            marginTop: hp("4%")
                        }}>
                            <Text style={{color: "white", textAlign: "center", fontSize: hp("2%")}}>
                                Dont have an account?
                                <Text onPress={() => navigation.navigate("Register")} style={{color: "#FF7303"}}>
                                    Register {" "}
                                </Text>
                            </Text>
                        </View>

                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            marginVertical: hp("5%")
                        }}>
                            <Text style={{
                                fontSize: hp("1.6%"),
                                color: "white",
                                fontWeight: "bold",
                                marginBottom: hp("2%")
                            }}>
                                CRAFTED WITH
                            </Text>
                            <Text>
                                {" "}
                            </Text>
                            <Image source={require("./Images/HeartLogo.png")} style={{marginBottom: hp("2%")}}/>
                            <Text style={{marginBottom: hp("2%")}}>
                                {" "}
                            </Text>
                            <Text style={{
                                fontSize: hp("1.6%"),
                                color: "white",
                                fontWeight: "bold",
                                marginBottom: hp("2%")
                            }}>BY PIXEL PK TECHNOLOGIES </Text>
                        </View>
                    </KeyboardAvoidingView>
                    }
                </SafeAreaView>


            )}

        </Formik>


    )


}

const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "1%",
        paddingHorizontal: 20,

    },

    SectionStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222225',
        paddingLeft: 10,
        borderColor: '#000',
        height: hp("6%"),
        borderRadius: 10,
        marginTop: hp("1.5%"),
        marginHorizontal: wp("2%")
    },


});
export default SignIn

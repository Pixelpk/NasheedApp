import React, {useState} from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View, Dimensions, Alert,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {KeyboardAvoidingView} from "react-native";
import * as Yup from "yup";
import {Formik} from 'formik'
import axios from 'axios'
import {BarIndicator, PacmanIndicator, SkypeIndicator, UIActivityIndicator} from "react-native-indicators";



const SignupSchema = Yup.object().shape({

    fullName: Yup.string().required('Required').matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.'
    )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
    userName: Yup.string()
        .required('Required').matches("^\\S*$", "no spaces").min(4, 'Atleast 4 character'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(4, 'Atleast 4 character'),
    passwordConfirmation: Yup.string().required("Required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Register = () => {
    const navigation = useNavigation()
    const [pass, setPass] = useState(true)
    const [hack, setHack] = useState(true)
    const [loader, setLoader] = useState(false)
    const height = Dimensions.get("window").height

    const width= Dimensions.get("window").width

    return (

        <ScrollView>

            <Formik initialValues={{
                fullName: '',
                userName: '',
                password: '',
                passwordConfirmation: '',
                email: ''
            }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        setLoader(true)
                        axios
                            .post("https://api.thenasheed.com/api/signup", {
                                'username': values.userName,
                                'password': values.password,
                                'name': values.fullName,
                                'email': values.email,
                                'confirm_password': values.passwordConfirmation,

                            },)
                            .then(function (response) {
                                if (response.data.status === true) {
                                    navigation.navigate("SignIn")
                                } else if (response.data.status === false) {

                                    if (response.data.message.email != null){

                                        alert(response.data.message.email)
                                    }
                                    else {
                                        alert(response.data.message.username)
                                    }
                                    setLoader(false)
                                }
                            })
                            .catch(function (error) {
                                if (error) {
                                    console.log(error)
                                }
                            });


                    }}>

                {({isSubmitting, values, handleBlur, handleChange, errors, handleSubmit, touched}) => (
                    <SafeAreaView style={{flex:1, backgroundColor: "black"}}>
                        {loader === true ?

                            <View style={{height:height,backgroundColor: "black", justifyContent:"center"}}>

                                <View><PacmanIndicator color={"white"} size={60} animationDuration={800}/></View>
                                <Text style={{
                                    color: "white",
                                    fontSize: hp("2.5%"),
                                    marginTop: hp("4%"),
                                    textAlign: "center"
                                }}>
                                    Creating Account....
                                </Text>
                            </View> :
                            <KeyboardAvoidingView>


                                <View style={{alignItems: "center", marginTop: hp("5%")}}>
                                    <Image source={require("./Images/LogoName.png")}/>
                                </View>

                                <View style={{marginTop: hp("4%"), marginLeft: wp("10%"), marginBottom: hp("4%")}}>
                                    <Text style={{color: "white", fontSize: hp("2%"), fontWeight: "bold"}}>
                                        SIGN UP
                                    </Text>
                                </View>

                                <View>
                                    <TextInput onBlur={handleBlur('fullName')} value={values.fullName}
                                               onChangeText={handleChange('fullName')} placeholder="Full Name"
                                               placeholderTextColor="white" style={{
                                        paddingLeft: wp("3%"),
                                        color: "white",
                                        fontSize: hp("1.5%"),
                                        borderRadius: hp("1.7%"),
                                        height: hp("6%",),
                                        backgroundColor: "#222225",
                                        marginHorizontal: wp("7%")
                                    }}/>
                                    {errors.fullName &&
                                    <View>
                                        <Text style={{color: "red", marginLeft: wp("10%")}}>
                                            {errors.fullName}
                                        </Text>
                                    </View>
                                    }

                                </View>
                                <View>
                                    <TextInput onBlur={handleBlur('userName')} value={values.userName}
                                               onChangeText={handleChange('userName')} placeholder="User Name"
                                               placeholderTextColor="white" style={{
                                        paddingLeft: wp("3%"),
                                        color: "white",
                                        fontSize: hp("1.5%"),
                                        borderRadius: hp("1.7%"),
                                        height: hp("6%",),
                                        backgroundColor: "#222225",
                                        marginHorizontal: wp("7%"),
                                        marginTop: hp("2%")
                                    }}/>
                                    {errors.userName &&
                                    <View>
                                        <Text style={{color: "red", marginLeft: wp("10%")}}>
                                            {errors.userName}
                                        </Text>
                                    </View>
                                    }
                                </View>
                                <View>
                                    <TextInput onBlur={handleBlur('email')} value={values.email}
                                               onChangeText={handleChange('email')} placeholder="Email"
                                               placeholderTextColor="white" style={{
                                        paddingLeft: wp("3%"),
                                        color: "white",
                                        fontSize: hp("1.5%"),
                                        borderRadius: hp("1.7%"),
                                        height: hp("6%",),
                                        backgroundColor: "#222225",
                                        marginHorizontal: wp("7%"),
                                        marginTop: hp("2%")
                                    }}/>
                                    {errors.email &&
                                    <View>
                                        <Text style={{color: "red", marginLeft: wp("10%")}}>
                                            {errors.email}
                                        </Text>
                                    </View>
                                    }
                                </View>
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

                                <View style={styles.container}>

                                    <View style={styles.SectionStyle}>

                                        <TextInput
                                            style={{flex: 1, color: "white", fontSize: hp("1.5%")}}
                                            placeholder="Confirm Password"
                                            placeholderTextColor={"white"}
                                            underlineColorAndroid="transparent"
                                            secureTextEntry={hack}
                                            onBlur={handleBlur('passwordConfirmation')}
                                            value={values.passwordConfirmation}
                                            onChangeText={handleChange('passwordConfirmation')}
                                        />
                                        <Ionicons onPress={() => setHack(!hack)} style={{marginRight: "2%"}}
                                                  name={hack === false ? "eye" : "eye-off"} color={"orange"} size={25}/>

                                    </View>

                                </View>
                                {errors.passwordConfirmation &&
                                <View>
                                    <Text style={{color: "red", marginLeft: wp("10%")}}>
                                        {errors.passwordConfirmation}
                                    </Text>
                                </View>
                                }

                                <View>
                                    <TouchableOpacity onPress={handleSubmit}>
                                        <LinearGradient style={{
                                            height: hp("5%"),
                                            marginTop: hp("4%"),
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginHorizontal: wp("7%"),
                                            borderRadius: hp("1.5%")
                                        }} colors={["#FFD303", "#FF3803"]}>
                                            <Text style={{color: "white", fontSize: hp("2%"), fontWeight: "bold"}}>
                                                SignUp
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
                                    <Text style={{color: "white", textAlign: "center", fontSize: hp("1.3%")}}>
                                        Already have an account?
                                        <Text onPress={() => navigation.navigate("SignIn")} style={{color: "#FF7303"}}>
                                            Login {" "}
                                        </Text>
                                    </Text>
                                </View>
                                <View style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginHorizontal: wp("10%"),
                                    marginTop: hp("1%")
                                }}>
                                    <Text style={{color: "white", textAlign: "center", fontSize: hp("1.3%")}}>
                                        By signing up, you agree to our {" "}

                                        <Text style={{color: "#FF7303"}}>
                                            Terms {""}
                                        </Text>
                                        <Text style={{color: "white"}}>
                                            and {""}
                                        </Text>
                                        <Text style={{color: "#FF7303"}}>
                                            Privacy Policy
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
                                        fontSize: hp("1.4%"),
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
                                        fontSize: hp("1.4%"),
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

        </ScrollView>
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
export default Register

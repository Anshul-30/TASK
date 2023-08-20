import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import RNRestart from 'react-native-restart';
import {useDispatch} from 'react-redux';
import TextInputComponent from '../../Components/TextInput';
import strings, {changelanguage} from '../../constatnts/lang';
import {Login1} from '../../redux/action/auth';
import Modal from 'react-native-modal';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {styles} from './loginstyles';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../styles/colors';
import Buttoncomp from '../../Components/Buttoncomp';
import imagepath from '../../constatnts/imagepath';
import {moderateScaleVertical, textScale} from '../../styles/responsiveSize';
import navigationString from '../../navigation/navigationString';
import {showMessage} from 'react-native-flash-message';
import { LoginApi } from '../../redux/action/authapi';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

export const Login=({navigation})=>{
  const dispatch = useDispatch();
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  const login = () => {
    const logindata = {email:email, password:pass};
    const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
    if (!email) {
      showMessage({
        message: 'Please Enter Your Email',
        type: 'warning',
      });
      return;
    }
    if (!emailRegex.test(email)) {
      showMessage({
        message: 'Please Enter Valid Email',
        type: 'warning',
      });
      return;
    }
    if (pass.length<6) {
      showMessage({
        message: 'Password must of minimum 6 digits',
        type: 'warning',
      });
      return;
    } else {
      LoginApi(logindata, {})
        .then(res => {
          console.log(res, 'apirespppp');
          dispatch(Login1(res?.data?.data))
          
        })
        .catch(error => {
          console.log(error,'erorrr')
          showMessage({
            message: error?.response?.data?.error || error?.message ,
            type: 'danger',
          });
        });
    }
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.blackOpacity86}}>
        <ScrollView>
          <View style={{marginHorizontal: moderateScale(16)}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.btncontainer}></TouchableOpacity>
            <Text style={styles.welcome}>{strings.WELCOME}</Text>
            <Text style={styles.weAreHappy}>{strings.We_are_Happy}</Text>
          </View>
          <View style={styles.view}>
            <View>
              <Text style={styles.textstyle}>Email</Text>
              <TextInputComponent
                placeholder={strings.ENTER_EMAIL}
                value={email}
                onChangeText={value => setEmail(value)}
              />
            </View>
            <View>
              <Text style={styles.textstyle}>Password</Text>
              <TextInputComponent
                placeholder={strings.ENTER_PASSWORD}
                onChangeText={value => setPass(value)}
                value={pass}
                securetext={true}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: moderateScaleVertical(16),
              }}>
              <Text
                style={{
                  fontSize: textScale(16),
                  color: colors.textGreyLight,
                  marginRight: moderateScale(6),
                }}>
                New User?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationString.SIGNUP)}>
                <Text
                  style={{
                    fontSize: textScale(16),
                    color: colors.LIGHT_BLUE,
                    marginRight: moderateScale(6),
                  }}>
                  {strings.SIGNUP}
                </Text>
              </TouchableOpacity>
            </View>
            <Buttoncomp
              containerstyle={{
                marginTop: 'auto',
                marginBottom: moderateScale(40),
                backgroundColor: colors.redColor,
              }}
              btntextstyle={{
                color: colors.white,
              }}
              title={'Login'}
              onPress={login}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

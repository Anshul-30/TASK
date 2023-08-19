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

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   GoogleSignin.configure();
  // }, []);

  // const googleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('userInfo', userInfo);
  //     // const email = userInfo.user.email;
  //     // const userId = userInfo.user.id;
  //     // const data = { email, userId }
  //     // actions.login(data)

  //     const data = userInfo?.user;
  //     dispatch(Login1(data));
  //     // this.setState({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log('error', error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log('error', error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log('error', error);
  //     } else {
  //       // some other error happened
  //       console.log('error', error);
  //     }
  //   }
  // };
  // ------------Regex---------
  // const fbLogIn = resCallBack => {
  //   LoginManager.logOut();
  //   return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
  //     result => {
  //       console.log('fb result ****************', result);
  //       if (
  //         result.declinedPermissions &&
  //         result.declinedPermissions.includes('email')
  //       ) {
  //         resCallBack({message: 'Email is required'});
  //       }
  //       if (result.isCancelled) {
  //         console.log('dxcfgvbhjn');
  //       } else {
  //         const infoRequest = new GraphRequest(
  //           'me?fields= email,name, picture',
  //           null,
  //           resCallBack,
  //         );
  //         new GraphRequestManager().addRequest(infoRequest).start();
  //       }
  //     },
  //     function (errror) {
  //       console.log('login failed', errror);
  //     },
  //   );
  // };

  // const _resInfoCallback = async (error, result) => {
  //   if (error) {
  //     console.log('error raised at response', error);
  //     return;
  //   } else {
  //     const userData = result;
  //     console.log('id', userData);
  //     dispatch(Login1(userData));
  //   }
  // };
  // const onFBlogIn = async () => {
  //   try {
  //     await fbLogIn(_resInfoCallback);
  //     console.log('hii');
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleModal = () => setIsModalVisible(() => !isModalVisible);

  // const onchnagelanguge = key => {
  //   changelanguage(key);
  //   RNRestart.Restart();
  // };

  // ----------------validations----------

  const login = () => {
    const logindata = {email:email, password:pass};
    const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
    if (!email) {
      showMessage({
        message: 'Please Enter Your Email',
        type: 'default',
      });
      return;
    }
    if (!emailRegex.test(email)) {
      showMessage({
        message: 'Please Enter Valid Email',
        type: 'default',
      });
      return;
    }
    if (pass.length<6) {
      showMessage({
        message: 'Password must of minimum 6 digits',
        type: 'default',
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
            message: error?.response?.data?.error            ,
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

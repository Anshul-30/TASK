import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
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
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [nameShow, setNameShow] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      // const email = userInfo.user.email;
      // const userId = userInfo.user.id;
      // const data = { email, userId }
      // actions.login(data)

      const data = userInfo?.user;
      dispatch(Login1(data));
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('error', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error', error);
      } else {
        // some other error happened
        console.log('error', error);
      }
    }
  };
  // ------------Regex---------
  const fbLogIn = resCallBack => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result ****************', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallBack({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('dxcfgvbhjn');
        } else {
          const infoRequest = new GraphRequest(
            'me?fields= email,name, picture',
            null,
            resCallBack,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (errror) {
        console.log('login failed', errror);
      },
    );
  };

  const _resInfoCallback = async (error, result) => {
    if (error) {
      console.log('error raised at response', error);
      return;
    } else {
      const userData = result;
      console.log('id', userData);
      dispatch(Login1(userData));
    }
  };
  const onFBlogIn = async () => {
    try {
      await fbLogIn(_resInfoCallback);
      console.log('hii');
    } catch (error) {
      console.log('error', error);
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );
  const data1 = {email, pass};

  const onchnagelanguge = key => {
    changelanguage(key);
    RNRestart.Restart();
  };

  // ----------------validations----------

  const click = () => {
    if (email != 0) {
      setEmailError(false);
      if (emailRegex.test(email)) {
        setNameShow(false);
        if (strongRegex.test(pass)) {
          setPassShow(false);
          dispatch(Login1(data1));
        } else {
          setPassShow(true);
        }
      } else setNameShow(true);
    } else {
      setEmailError(true);
    }
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.blackOpacity86}}>
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

            {nameShow ? (
              <Text style={styles.error}>{strings.ENTER_VALID_EMAIL}</Text>
            ) : null}
            {emailError ? (
              <Text style={styles.error}>{strings.EMAIL_CANT_BE_EMPTY} </Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.textstyle}>Password</Text>
            <TextInputComponent
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={value => setPass(value)}
              value={pass}
              securetext={true}
            />

            {passShow ? (
              <Text style={styles.error}>{strings.ENTER_STRONG_PASSWORD}</Text>
            ) : null}
          </View>
          <Buttoncomp
            containerstyle={{
              marginTop: 'auto',
              marginBottom: moderateScale(40),
              backgroundColor: colors.redColor,
            }}
            btntextstyle={{
             color:colors.white
            }}
            title={'Login'}
          />
          {/* <TouchableOpacity style={{marginTop:'auto',marginBottom:moderateScale(40)}} onPress={click}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>{strings.LOGIN}</Text>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={handleModal}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Change Language</Text>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={onFBlogIn}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Login With Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={googleLogin}>
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>GOOGLE</Text>
            </View>
          </TouchableOpacity> */}

          {/* -----------------MODAL---------------------- */}

          {/* <Modal isVisible={isModalVisible}>
            <View style={{backgroundColor: 'white'}}>
              <TouchableOpacity onPress={() => onchnagelanguge('hn')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Italian</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>English</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Hindi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Urdu</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Tamil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>French</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Punajbi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Spanish</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onchnagelanguge('en')}>
                <View style={styles.btn}>
                  <Text style={{color: 'white'}}>Japenese</Text>
                </View>
              </TouchableOpacity>
              <Button title="hide" onPress={handleModal} />
            </View>
          </Modal> */}

          {/* ---------------------MODAL END---------------------------- */}
        </View>
      </SafeAreaView>
    </>
  );
}

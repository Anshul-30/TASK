import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {imagePath} from '../../constatnts/imagepath';
import strings from '../../constatnts/lang';
import Buttoncomp from '../../Components/Buttoncomp';
import {signupstyles} from './signupstyles';
import TextInputComponent from '../../Components/TextInput';
import {moderateScaleVertical} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import {SignupApi} from '../../redux/action/authapi';
import {showMessage} from 'react-native-flash-message';
import {
  KeyboardAwareScrollView,
  KeyboardAwareSectionList,
} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {Login1} from '../../redux/action/auth';
import navigationString from '../../navigation/navigationString';
import {useNavigation} from '@react-navigation/native';
import {fbLogin, googleLogin, onFBlogIn} from '../../utils/utils';
const Signup = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  function validate() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!FirstName.trim()) {
      showMessage({
        message: 'Please Enter Your First Name',
        type: 'warning',
      });
      return;
    } else if (!LastName.trim()) {
      showMessage({
        message: 'Please Enter Your Last Name',
        type: 'warning',
      });
      return;
    } else if (!email.trim()) {
      showMessage({
        message: 'Please Enter Your Email',
        type: 'warning',
      });
      return;
    } else if (!email.match(emailRegex)) {
      showMessage({
        message: 'Please Enter a Valid Email',
        type: 'warning',
      });
      return;
    } else if (!mobile.trim()) {
      showMessage({
        message: 'Please Enter Your Mobile number',
        type: 'warning',
      });
      return;
    } else if (!password.trim()) {
      showMessage({
        message: 'Please Enter Your Password',
        type: 'warning',
      });
      return;
    } else {
      const signupdata = {
        firstName: FirstName,
        lastName: LastName,
        email: email,
        phonenumber: mobile,
        password: password,
      };
      SignupApi(signupdata, {})
        .then(res => {
          console.log(res, 'apirespppp');
          dispatch(Login1(res?.data?.data));
        })
        .catch(error => {
          showMessage({
            message: error?.response?.data?.error,
            type: 'danger',
          });
        });
    }
  }

  const onpressgoogle = () => {
    googleLogin().then(res => {
      dispatch(Login1(res));
    }).catch((error)=>{
      showMessage({
        message: error,
        type: 'danger',
      })
    })
  };

  const openFacebookLogin = () => {
    fbLogin(_responseInfoCallback);
  };
  const _responseInfoCallback = (error, result) => {
      if (result && result?.id) {
        dispatch(Login1(result))
      } if(error){
        showMessage({
          message:error,
          type:'danger'
        })
      }
  };
  return (
    <View style={{...signupstyles.container}}>
      <ScrollView>
        <View style={{flex: 0.9, marginTop: moderateScaleVertical(36)}}>
          <Text style={signupstyles.createnew}>
            {strings.Create_a_new_account}
          </Text>
          <Text style={signupstyles.weAreHappy}>
            {strings.Create_an_account_so_you_can_continue}
          </Text>
          <View style={signupstyles.names}>
            <View style={signupstyles.fname}>
              <TextInputComponent
                placeholder={strings.ENTER_FIRST_NAME}
                onChangeText={value => setFirstName(value)}
                value={FirstName}
                securetext={false}
              />
            </View>
            <View style={signupstyles.lname}>
              <TextInputComponent
                placeholder={strings.ENTER_LAST_NAME}
                onChangeText={value => setLastName(value)}
                value={LastName}
                securetext={false}
              />
            </View>
          </View>
          <View>
            <TextInputComponent
              placeholder={strings.ENTER_EMAIL}
              onChangeText={value => setEmail(value)}
              value={email}
              securetext={false}
            />
          </View>
          <View>
            <TextInputComponent
              placeholder={strings.ENTER_PHONE_NUMBER}
              onChangeText={value => setMobile(value)}
              value={mobile}
              securetext={false}
            />
          </View>
          <View>
            <TextInputComponent
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={value => setPassword(value)}
              value={password}
              securetext={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: moderateScaleVertical(16),
            }}>
            <Text style={signupstyles.alreadyhaveaccount}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationString.LOGIN)}>
              <Text style={signupstyles.login}>{strings.LOGIN}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{}}>
          <Buttoncomp
            btntextstyle={{color: colors.white}}
            containerstyle={{backgroundColor: 'red'}}
            title={strings.SIGNUP}
            onPress={validate}
          />
          <Buttoncomp
            btntextstyle={{color: colors.redB}}
            containerstyle={{backgroundColor: colors.white}}
            title={strings.SIGN_IN_WITH_GOOGLE}
            onPress={onpressgoogle}
            logoimg={imagePath.googlelogo}
          />
          <Buttoncomp
            btntextstyle={{color: colors.redB}}
            containerstyle={{backgroundColor: colors.white}}
            title={strings.SIGN_IN_WITH_FACEBOOK}
            onPress={openFacebookLogin}
            logoimg={imagePath.facebooklogo}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});

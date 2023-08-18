import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  function validate() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!FirstName.trim()) {
      showMessage({
        message: 'Please Enter Your First Name',
        type: 'default',
      });
      return;
    } else if (!LastName.trim()) {
      showMessage({
        message: 'Please Enter Your Last Name',
        type: 'default',
      });
      return;
    } else if (!email.trim()) {
      showMessage({
        message: 'Please Enter Your Email',
        type: 'default',
      });
      return;
    } else if (!email.match(emailRegex)) {
      showMessage({
        message: 'Please Enter a Valid Email',
        type: 'default',
      });
      return;
    } else if (!mobile.trim()) {
      showMessage({
        message: 'Please Enter Your Mobile number',
        type: 'default',
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
        })
        .catch(error => {
          showMessage({
            message: 'erorr',
            type: 'danger',
          });
        });
    }
  }
  return (
    <View style={{...signupstyles.container}}>
      <View style={{flex: 0.9, marginTop: moderateScaleVertical(56)}}>
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
      </View>
      <View style={{}}>
        <Buttoncomp
          btntextstyle={{color: colors.white}}
          containerstyle={{backgroundColor: 'red'}}
          title={strings.SIGNUP}
          onPress={validate}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});

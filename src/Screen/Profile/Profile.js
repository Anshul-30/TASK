import {View, Text} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './profilestyle';
import Leftrighttext from '../../Components/Leftrighttext';
import {Logout} from '../../redux/action/auth';
import Buttoncomp from '../../Components/Buttoncomp';
import colors from '../../styles/colors';
import strings from '../../constatnts/lang';

const Profile = () => {
  const userdata = useSelector(state => state.userState.userdata);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      dispatch(Logout());
    } catch (error) {}
  };
  console.log(userdata);
  return (
    <WrapperContainer>
      <View>
        <View>
          <Text style={styles.headertext}>My Profile</Text>
        </View>

        <View style={styles.names}>
          <Leftrighttext
            lefttext="First Name"
            righttext={userdata?.firstName}
          />
          <Leftrighttext lefttext="Last Name" righttext={userdata?.lastName} />
        </View>
        <Leftrighttext
          lefttext="Mobile number"
          righttext={userdata?.phonenumber}
        />
        <Leftrighttext lefttext="Email" righttext={userdata?.email} />
      </View>
      <View>
      <Buttoncomp
        btntextstyle={{color: colors.white}}
        containerstyle={{backgroundColor: colors.redB}}
      title={strings.LOGOUT}
      onPress={signOut}
      />
      </View>
      
    </WrapperContainer>
  );
};

export default Profile;

import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../styles/colors';

const Buttoncomp = ({onPress,logoimg,title,containerstyle,btntextstyle}) => {
  return (
    <TouchableOpacity style={{...styles.btn,...containerstyle}} onPress={onPress}>
      <Image style={styles.img} source={logoimg} />
      <View style={{ flex: 1 }}>
        <Text style={{...styles.btntext,...btntextstyle}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btn: {
      backgroundColor: "#FFFFFF",
      borderRadius: moderateScale(8),
      height: moderateVerticalScale(48),
      alignItems: "center",
      // paddingVertical: moderateScale(14),
      flexDirection: "row",
      paddingHorizontal: moderateScale(16),
      marginTop: moderateScale(16),
      flexGrow:1,
      height:moderateVerticalScale(46)
    },
    btntext: {
      color: colors.BLACK_TXT,
      fontSize: moderateVerticalScale(18),
      fontWeight: "bold",
      letterSpacing: moderateScale(0.88),
      textAlign: "center",
      marginRight:moderateVerticalScale(18)
    },
    img: {
      alignSelf: "center",
      marginLeft: 0,
    },
  });
export default Buttoncomp
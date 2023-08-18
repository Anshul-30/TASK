import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../styles/colors";
import { moderateScaleVertical, textScale } from "../../styles/responsiveSize";
import fontfamily from "../../styles/fontfamily";
export const styles = StyleSheet.create({
  backarrow: {
    width: moderateVerticalScale(13),
    height: moderateVerticalScale(12),
    marginVertical: moderateScale(6),
  },
  btncontainer: {
    marginTop: moderateScale(56),
  },
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GREY,
    paddingHorizontal: moderateScale(24),
  },
  welcome: {
    height: moderateScale(40),
    color: colors.white,
    fontSize: moderateVerticalScale(24),
    lineHeight: moderateScale(32),
    marginTop: moderateScale(16),
  },
  weAreHappy: {
    color: colors.white,
    fontSize: moderateVerticalScale(15),
    marginBottom: moderateScale(16),
  },
  view: {
    marginHorizontal:moderateScale(16),
    flex:1
    
    
},
text:{
    color:'green',
    textAlign:'center',
    fontFamily:fontfamily.MulishBold,
    // fontFamily:'DancingScript-VariableFont_wght',
    // fontWeight:'600',
    fontSize:textScale(20),
    padding:moderateScaleVertical(20)
},
textInput: {
    borderRadius: 4,
    borderWidth: 1.5,
    marginHorizontal: 27,
    marginVertical:5

},
btn:{
    alignItems:'center',
    backgroundColor:colors.redColor,
    padding:10,
    borderRadius:moderateScale(5),
    marginHorizontal:moderateScale(16),
    marginTop:moderateScaleVertical(12),

} ,
error:{
    color:colors.redB,
    marginLeft:moderateScale(10),
    fontFamily:fontfamily.MulishBold
}    ,
textstyle:{
  color:colors.white
}

});
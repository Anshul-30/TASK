import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import colors from "../../styles/colors";

export const signupstyles = StyleSheet.create({
  btncontainer: {
    marginTop: moderateScale(56),
  },
  container: {
    flex: 1,
    backgroundColor: colors.DARK_GREY,
    paddingHorizontal: moderateScale(24),
  },
  createnew: {
    height: moderateScale(40),
    color: colors.WHITE,
    fontSize: moderateVerticalScale(24),
    lineHeight: moderateScale(32),
    marginTop: moderateScale(16),
  },
  weAreHappy: {
    color: colors.INPUT_TEXT,
    fontSize: moderateVerticalScale(15),
    marginBottom: moderateScale(16),
  },
  mobileno: {
    marginBottom: moderateScale(88),
    flex: 2,
  },
  names: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
  fname: {
    flex: 1,
    marginRight:moderateScale(5)
  },
  lname: {
    flex: 1,
    marginLeft:moderateScale(5)
  },
  mobilecode: { flex: 0.3 },
});
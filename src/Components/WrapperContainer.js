import React from 'react';
import { StatusBar, View,SafeAreaView } from 'react-native';
import { useDarkMode } from 'react-native-dynamic';
import colors from '../styles/colors';
import { moderateScale } from 'react-native-size-matters';


const WrapperContainer = ({
  children,
  bgColor=colors.DARK_GREY,
}) => {
  const isDarkMode = useDarkMode();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:bgColor,
    paddingHorizontal:moderateScale(12),
      }}>
      <StatusBar
        barStyle='light-content'
      />
      <View style={{ backgroundColor: bgColor, flex: 1 }}>{children}</View>
    </View>
  );
};

export default React.memo(WrapperContainer);

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale } from 'react-native-size-matters'
import { moderateScaleVertical, textScale } from '../styles/responsiveSize'

const Leftrighttext = ({lefttext,righttext}) => {
  return (
    <View style={styles.box}>
      <Text style={{...styles.lefttext,color:colors.white}}>{lefttext}</Text>
      <Text style={{...styles.lefttext,borderBottomWidth:0}}>:-</Text>
      <Text style={styles.lefttext}>{righttext}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    lefttext:{
        color:colors.INPUT_TEXT,
        marginRight:moderateScale(8),
        fontSize:textScale(18),
        textTransform:'capitalize'
    },
    box:{
        padding:moderateScale(8),
        flexDirection:'row',
        borderColor:colors.INPUT_TEXT,
        borderWidth:1,
        marginVertical:moderateScaleVertical(18),
        borderRadius:moderateScale(8)
    }
})
export default Leftrighttext
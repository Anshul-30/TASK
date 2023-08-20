import React from "react";
import { StyleSheet } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale } from "./responsiveSize";
import colors from "./colors";
import fontfamily from './fontfamily'

const HomeStyle = StyleSheet.create({
   
    img: {
        height: moderateScale(15),
        width: moderateScale(15)

    },
    touch: {
        position: 'absolute',
        right: 30,
        bottom: 100,
        // top:200,
        height:moderateScale(30),
        width:moderateScale(30),
        borderRadius:moderateScale(15),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgreen'
    },
    header: {
        color:colors.redB,
        fontFamily:fontfamily.MulishBold,
        fontSize:textScale(24),
        textAlign:'center',
        padding:moderateScale(12),
        fontWeight:'bold'
    },
    topaddbtn:{
        flexDirection:'row',
    },
    mytask:{
        color:colors.redB,
        fontFamily:fontfamily.MulishSemiBold,
        fontSize:textScale(18),
        textAlign:'center',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginVertical:moderateScaleVertical(12)
    },
    taskcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:moderateScaleVertical(4)
    }
})
export default HomeStyle
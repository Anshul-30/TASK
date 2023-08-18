import React from "react";
import { StyleSheet } from 'react-native'
import { moderateScale, textScale } from "./responsiveSize";
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
        bottom: 30,
        // top:200,
        height:moderateScale(30),
        width:moderateScale(30),
        borderRadius:moderateScale(15),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgreen'
    },
    text: {
        color:colors.blackB,
        fontFamily:fontfamily.MulishBold,
        fontSize: textScale(16),
        // fontWeight: '600',
        // margin: 15
    },
    logouttext: {
        color: 'tomato',
        fontSize: textScale(16),
        // fontWeight: '600',
        // margin: 15
    },
    logout:{
        // flex:1,
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between'
    },
    text1:{
        padding:3,
        color:colors.black,
        fontSize:textScale(14)
    }
})
export default HomeStyle
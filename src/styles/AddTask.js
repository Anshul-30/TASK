import React from "react";
import {StyleSheet} from 'react-native'
import colors from "./colors";
import { moderateScaleVertical, textScale } from "./responsiveSize";
const AddStyle = StyleSheet.create({
    textinput:{
        borderWidth:1,
        marginHorizontal:15,
        padding:5,
        marginTop:15,
        borderRadius:7
    },
    view:{
        marginTop:25
    },
    text:{
        color:'green',
        fontSize:textScale(15),
        // fontWeight:'500',
        textAlign:'center'

    },
    submit:{
        textAlign:'center',
        color:colors.white,
        fontSize:textScale(17)
    },
    submitview:{
        marginVertical:moderateScaleVertical(20),
        backgroundColor:'green',
        alignSelf:'center',
        width:150,
        padding:5,
        borderRadius:10
    }
})
export default AddStyle
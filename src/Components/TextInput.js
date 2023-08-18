import React from "react"
import { TextInput, View, Image, StyleSheet, Text } from 'react-native'
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize"
import colors from "../styles/colors"

const TextInputComponent = ({

    placeholder = '',
    placeholderTextColor = '',
    onChangeText = '',
    value=" ",
    keyboardType,
    securetext= false

}) => {
    return (
            <View style={style.container}>
                    <TextInput secureTextEntry={securetext} value={value} placeholder={placeholder} placeholderTextColor={colors.whiteOpacity50} onChangeText={onChangeText} style={{padding:7,color:colors.white}} keyboardType={keyboardType}/>
            </View>
    )
}
export default TextInputComponent


const style = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        padding: 6,
        borderRadius: 5,
        borderWidth:0.5,
        borderColor:colors.greyA,
        marginVertical: moderateScaleVertical(10)
    },
    img: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})
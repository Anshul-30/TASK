import React from "react"
import { TextInput, View, Image, StyleSheet, Text } from 'react-native'
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize"

const TextInputComponent = ({

    placeholder = '',
    placeholderTextColor = '',
    onChangeText = '',
    value=" ",
    keyboardType,
    securetext= false

}) => {
    return (
        <>
            <View style={style.container}>

                <View>
                    <TextInput secureTextEntry={securetext} value={value} placeholder={placeholder} placeholderTextColor='black' onChangeText={onChangeText} style={{padding:7,color:'black'}} keyboardType={keyboardType}/>
                </View>

            </View>

        </>
    )
}
export default TextInputComponent


const style = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        marginHorizontal: 10,
        // padding: 10,
        height:35,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: moderateScaleVertical(10)
    },
    img: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})
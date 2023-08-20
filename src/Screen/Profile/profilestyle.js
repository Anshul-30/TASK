import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontfamily from "../../styles/fontfamily";
import { textScale } from "../../styles/responsiveSize";
import { moderateScale } from "react-native-size-matters";

export const styles=StyleSheet.create({
    headertext:{
        color:colors.redB,
        fontFamily:fontfamily.MulishBold,
        fontSize:textScale(24),
        textAlign:'center',
        padding:moderateScale(12),
        fontWeight:'bold'
    },
    names:{flexDirection:'row',
    justifyContent:'space-between'
}
})
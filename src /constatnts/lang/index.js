import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalizedStrings from "react-native-localization";
import en from "./en";
import hn from "./hn";



let strings = new LocalizedStrings({
    hn:hn,
    en: en
})
export const changelanguage = async (changedLanguage) => {
    await AsyncStorage.setItem("language", changedLanguage)
    string.setLanguage(changedLanguage)
}

export default strings;
import React, { useEffect, useState } from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneInput from "react-native-phone-number-input";
import AddStyle from '../../styles/AddTask';
import navigationStrings from '../../navigation/navigationString'
import TextInputComponent from '../../Components/TextInput';
import LoginStyle from '../../styles/LoginStyle';
import { useDispatch } from 'react-redux';
import { DataInput, UpdateData } from '../../redux/action/details';
import { setData } from '../../utils/utils';
import strings from '../../constatnts/lang';


export default function AddTask({ navigation, route }) {

  const id = route?.params?.props
  const editid = id?.userId

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [rollno, setRollno] = useState("")
  const [phone, setPhoneNumber] = useState("")
  // ------------------State---------------------
  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)

  const userId = Math.floor(Math.random() * 1000);
  const dispatch = useDispatch()
  const data = [{ userId, name, age, rollno, phone, address }];

  useEffect(() => {
    if (id) {
      setName(id?.name)
      setAge(id?.age)
      setAddress(id?.address)
      setPhoneNumber(id?.phone)
      setRollno(id?.rollno)
    }
  }, [id])


  

  const edit = () => {
    if (name != '') {
      setNameError(false)
      if (age != 0) {
        setAgeErro(false)
        if (rollno != '') {
          setRollnoError(false)
          if (phone.length == 10) {
            setPhoneNumberError(false)
            if (address != 0) {
              // console.log(data1.id,index)
              // console.log(data)
              dispatch(UpdateData({ name, age, rollno, phone, address, editid }))
              console.log(UpdateData)
              navigation.navigate(navigationStrings.HOME)
            }
            else
              setAddressError(true)
          }
          else
            setPhoneNumberError(true)
        }
        else
          setRollnoError(true)
      }
      else
        setAgeErro(true)
    }
    else
      setNameError(true)

  }
  const submit = () => {
    if (name != '') {
      setNameError(false)
      if (age != 0) {
        setAgeErro(false)
        if (rollno != '') {
          setRollnoError(false)
          if (phone.length == 10) {
            setPhoneNumberError(false)
            if (address != 0) {
              setData(data);
              setAddressError(false)
              dispatch(DataInput(data))
              // console.log(data)
              navigation.navigate(navigationStrings.HOME)
            }
            else
              setAddressError(true)
          }
          else
            setPhoneNumberError(true)
        }
        else
          setRollnoError(true)
      }
      else
        setAgeErro(true)
    }
    else
      setNameError(true)
  }


  return (
    <SafeAreaView>
      <View style={AddStyle.view}>
        <Text style={AddStyle.text}>{strings.FILL_DETAILS}</Text>
        <TextInputComponent
          placeholder={strings.ENTER_NAME}
          value={name}
          onChangeText={(value) => setName(value)} />

        {
          nameError ? <Text style={LoginStyle.error}>{strings.ENTER_NAME}</Text> : null
        }
        <TextInputComponent
          placeholder={strings.ENTER_AGE}
          value={age}
          keyboardType={"numeric"}

          onChangeText={(value) => setAge(value)} />

        {
          ageError ? <Text style={LoginStyle.error}>{strings.ENTER_AGE}</Text> : null
        }
        <TextInputComponent
          placeholder={strings.ENTER_ROLLNO}
          keyboardType={"numeric"}

          onChangeText={(value) => setRollno(value)}
          value={rollno}
        />

        {
          rollnoError ? <Text style={LoginStyle.error}>{strings.ENTER_ROLLNO} </Text> : null
        }
        <TextInputComponent
          placeholder={strings.ENTER_PHONE_NUMBER}
          onChangeText={(value) => setPhoneNumber(value)}
          value={phone}
          keyboardType={"numeric"}

        />

        {
          phoneError ? <Text style={LoginStyle.error}>{strings.ENTER_PHONE_NUMBER}
          </Text> : null
        }
        <TextInputComponent
          placeholder={strings.ENTER_ADDRESS}
          onChangeText={(value) => setAddress(value)}
          value={address}
        />

        {
          addressError ? <Text style={LoginStyle.error}>{strings.ENTER_ADDRESS}</Text> : null
        }
        <TouchableOpacity activeOpacity={0.8} onPress={id ? edit : submit}>
          <View style={AddStyle.submitview}>
            <Text style={AddStyle.submit}> {id ? strings.EDIT : strings.SUBMIT}</Text>
          </View>
        </TouchableOpacity>


      </View>
    </SafeAreaView>



  )
}
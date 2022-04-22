import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React from 'react'
import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import images from '../../constatnts/imagepath'
import strings from '../../constatnts/lang'
import navigationString from '../../navigation/navigationString'
import { Logout } from '../../redux/action/auth'
import { DeleteData } from '../../redux/action/details'
import HomeStyle from '../../styles/HomeStyle'



export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.dataInput.list)
  // console.log(list)

  // setData(list)

  const Edit = (data) => {
    // console.log(data, "index", index)
    navigation.navigate(navigationString.TASK, { props: data })
  }
  const RenderItem = ({item, index }) => {
    const element = item
    return (
      <View style={{
        shadowOpacity: .5, shadowOffset: { height: 2, width: -2 }, elevation: 7, backgroundColor: 'white', flexDirection: 'row', borderRadius: 5, justifyContent: 'space-between',
        margin: 7
      }} key={index}>
        <View style={{ margin: 10 }}>
          <Text style={HomeStyle.text1}>{strings.NAME}: {element.name}
          </Text>
          <Text style={HomeStyle.text1}>{strings.AGE} : {element.age}
          </Text>
          <Text style={HomeStyle.text1}>{strings.ROLLNO} : {element.rollno}
          </Text>
          <Text style={HomeStyle.text1}>{strings.PHONE_NUMBER} : {element.phone}
          </Text>
          <Text style={HomeStyle.text1}>{strings.ADDRESS} : {element.address}
          </Text>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

          <TouchableOpacity style={{ margin: 10 }} onPress={() => dispatch(DeleteData(element.userId))}>
            <Image source={images.delete1} style={{ height: 35, width: 35 }} />
          </TouchableOpacity>


          <TouchableOpacity style={{ margin: 10 }} onPress={() => Edit(element, index)}>
            <Image source={images.edit} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
      </View>

    )
  }
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
      dispatch(Logout())
    } catch (error) {
      console.error(error);
    }
  };
  return (


    <View style={{ position: 'relative', flex: 1 }}>
      <View style={HomeStyle.logout}>
        <Text style={HomeStyle.text}>{strings.HOME}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(navigationString.SETTING)}>
          <Text style={HomeStyle.text}>{strings.SETTINGS}</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <Text style={HomeStyle.logouttext}>{strings.LOGOUT}</Text>

        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        renderItem={RenderItem}
      />
      {/* <ScrollView>
        {
          list.map((element, index) => {
            return (

                <View style={{
                  shadowOpacity: .5, shadowOffset: { height: 2, width: -2 }, elevation: 7, backgroundColor: 'white', flexDirection: 'row', borderRadius: 5, justifyContent: 'space-between',
                  margin: 7
                }} key={index}>
                  <View style={{ margin: 10 }}>
                    <Text style={HomeStyle.text1}>{strings.NAME}: {element.name}
                    </Text>
                    <Text style={HomeStyle.text1}>{strings.AGE} : {element.age}
                    </Text>
                    <Text style={HomeStyle.text1}>{strings.ROLLNO} : {element.rollno}
                    </Text>
                    <Text style={HomeStyle.text1}>{strings.PHONE_NUMBER} : {element.phone}
                    </Text>
                    <Text style={HomeStyle.text1}>{strings.ADDRESS} : {element.address}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                    <TouchableOpacity style={{ margin: 10 }} onPress={() => dispatch(DeleteData(element.userId))}>
                      <Image source={images.delete1} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>


                    <TouchableOpacity style={{ margin: 10 }} onPress={() => Edit(element, index)}>
                      <Image source={images.edit} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                  </View>
                </View>

            )
          })
        }
      </ScrollView> */}

      <View>
        <TouchableOpacity onPress={() => navigation.navigate(navigationString.TASK)} style={HomeStyle.touch}>
          <Image source={images.plus} style={HomeStyle.img} />
        </TouchableOpacity>
      </View>




    </View>







  )
}

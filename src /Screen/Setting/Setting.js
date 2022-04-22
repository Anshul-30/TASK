import { types } from '@babel/core'
import React, { useEffect } from 'react'
import {Text,TextInput} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import dataInput from '../../redux/reducer/DatnInput'
import type from '../../redux/type'
import { getLogin } from '../../utils/utils'



export default function Setting() {
   

const userStatus = useSelector(state => state.userState.userdata);
// console.log(userStatus[0].email)

// const email = userStatus?.user?.email
const loginemail = userStatus?.email
const pass = userStatus?.pass


  return (<>
    <Text style={{color:'black'}}>
        settings
    </Text>
    
{/* <Text style={{color:'black'}}>{email}</Text> */}
<Text style={{color:'black'}}>{loginemail}</Text>
<Text style={{color:'black'}}>{pass}</Text>


    {/* {userStatus.map((item)=>{
      return(
        <Text>Email:-{item.email}</Text> 

      )
    })} */}
   
    

  </>
  )
}

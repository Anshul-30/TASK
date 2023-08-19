import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
export const apiReq = (url, method, header, data) => {
  return new Promise((resolve, reject) => {
    console.log('data sending>>>>',data)
    axios({
      url: url,
      method: method,
      data: data,
      header: header,
    })
      .then((response) => {
        console.log('successresp>>>',response)
        return resolve(response);
      })
      .catch((error) => {
        console.log(error,'erorr')
        return reject(error);
      });
  });
};

//common post api

export const apipost = (url, data, header={}) => {
  return apiReq(url, "POST", header, data);
};
//COMMON GET API

export const apiGet = (url, header) => {
  return apiReq(url, "GET", header);
};








//  ------------------set and get data in async--------------------------

export const setData = async (data) => {
    try {
        let jsonvalue = JSON.stringify(data)
        await AsyncStorage.setItem('myList', jsonvalue)
        return jsonvalue;
    }
    catch (error) {
        console.log('error raised')
    }
}


export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('myList')
        let jsonvalue = JSON.parse(value)
        console.log("get Item local", jsonvalue);
        return jsonvalue;
    }
    catch (error) {
        console.log(error);
    }
}
// --------------------- set and get and remove login details  async ---------------------


export const setLogin = async (login) => {
    try {
        const value = JSON.stringify(login)
        await AsyncStorage.setItem("login", value)
        // console.log("value",login)
        return value
    }
    catch (e) {
        console.log("error", e)
    }
}

export const getLogin = async () => {
    try {
        const value = await AsyncStorage.getItem("login")
        const jsonvalue = JSON.parse(value)
        return jsonvalue
    }
    catch (e) {
        console.log("error", e)
    }
}

export const removelogin = async () => {
    try {
        await AsyncStorage.removeItem("login")
    }
    catch (e) {
        console.log("error", e)

    }

}



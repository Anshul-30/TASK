import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from "axios";
import { LoginManager } from 'react-native-fbsdk';
import { useDispatch } from 'react-redux';
export const apiReq = (url, method, header={}, data={}) => {
  return new Promise((resolve, reject) => {
    console.log('data sending>>>>',data)
    console.log("endpoint",url)
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

export const apiDelete = (url, header) => {
  return apiReq(url, "DELETE", header);
};
export const apiPut = (url, header) => {
  return apiReq(url, "PUT", header);
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

export const googleLogin = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log('google login in try block');
      return userInfo;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
        return error;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
        return error;
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
        return error;
      } else {
        console.log(error, 'error in gmail');
        return error;
      }
    }
  };

  export const fbLogin = (resCallback) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      (result) => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }
        if (result.isCancelled) {
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture,friends',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {},
    );
  };



    const fbLogIn = resCallBack => {
        LoginManager.logOut();
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
          result => {
            console.log('fb result ****************', result);
            if (
              result.declinedPermissions &&
              result.declinedPermissions.includes('email')
            ) {
              resCallBack({message: 'Email is required'});
            }
            if (result.isCancelled) {
              console.log('dxcfgvbhjn');
            } else {
              const infoRequest = new GraphRequest(
                'me?fields= email,name, picture',
                null,
                resCallBack,
              );
              new GraphRequestManager().addRequest(infoRequest).start();
            }
          },
          function (errror) {
            console.log('login failed', errror);
          },
        );
      };
    
      const _resInfoCallback = async (error, result) => {
        if (error) {
          console.log('error raised at response', error);
          return;
        } else {
          const userData = result;
          console.log('id', userData);
          dispatch(Login1(userData));
        }
      };
      export const onFBlogIn = async () => {
        try {
          await fbLogIn(_resInfoCallback);
          console.log('hii');
        } catch (error) {
          console.log('error', error);
        }
      };

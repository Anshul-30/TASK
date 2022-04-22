
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging'


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log("Authorization status", authStatus)
    getfcmToken()
  }
}

const getfcmToken = async () => {
  // const fcmTOken = await messaging().getToken();
  //   console.log(fcmTOken, "old token")
  let fcmToken = await AsyncStorage.getItem('fcmToken')

console.log("old token", fcmToken)
  if (!fcmToken) {

    try {
      const fcmTOken = await messaging().getToken();
      if (fcmTOken) {
        console.log(fcmTOken, 'new genrated token');
        await AsyncStorage.setItem('fcmToken', fcmTOken);
      }
    }

    catch (error) {
      console.log("error raised",error)
    }
  }
}
export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
          'Notification caused app to open from background state:', remoteMessage.notification);
  });
  messaging().onMessage(async remoteMessage => {
      console.log("recived in foreground", remoteMessage)
  })
  messaging()
      .getInitialNotification()
      .then(remoteMessage => {
          if (remoteMessage) {
              console.log(
                  'Notification caused app to open from quit state:', remoteMessage.notification);

          }
      });
}
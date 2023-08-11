import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import OneSignal from 'react-native-onesignal';

import { tagUserInfoCreate } from './src/notifications/notificationTags'

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading'

import { CartContextProvider } from './src/contexts/CartContext';

OneSignal.setAppId('2a2b3e7b-507d-4ef5-832c-52465e2e9d62')

OneSignal.setEmail('italovinicius2018@gmail.com')

OneSignal.promptForPushNotificationsWithUserResponse()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate()

  useEffect(() => {
    const onSubscribe = OneSignal.setNotificationOpenedHandler((response) => {
      const { actionId } = response.action as any

      switch(actionId){
        case "1": return console.log("Ver todos")
        case "2": return console.log("ver pedido")
        default: return console.log("Nenhum")
      }
    })

    return () => onSubscribe
  }, [])
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
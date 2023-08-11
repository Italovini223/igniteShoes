import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate(){
  OneSignal.sendTags({
    'user_name': 'Ítalo Vinícius',
    'user_email': 'italovinicius2018@gmail.com'
  })
}

export function tagCartUpdate(itemsCount: string){
  OneSignal.sendTag('cart_items_count', itemsCount)
}


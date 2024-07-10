import { DrawerItemList } from "@react-navigation/drawer";
import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function TourDrawerContent (props) {
   return (
    <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: "#99f6e4"}}>
            <View style={{justifyContent: "center", alignItems: "center", height: 140}}>
              <Image style={styles.logo} 
                      source={require("../assets/images/tour_splash.png")}
                      />
            </View>
            <Text className='flex-row text-center font-bold mb-2 text-bold text-xl'>Hello 👋 Dawud</Text>

            <DrawerItemList  {...props} />
          </SafeAreaView>

   )
}

const styles = StyleSheet.create({
        logo: {
          width: 120,
          resizeMode:'contain',
        }
})
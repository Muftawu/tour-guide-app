import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";

export default function Wrapper ({children}) {
    const status_bar_height = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS == "ios" ? 30: 0

    return (
        <View className='flex-1 mt-2 mx-4'>
            {children}
        </View>
    )
}
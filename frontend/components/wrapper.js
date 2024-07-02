import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";

export default function Wrapper ({children}) {
    const status_bar_height = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS == "ios" ? 30: 0

    return (
        <View className='' style={{marginTop: status_bar_height}}>
            {children}
        </View>
    )
}
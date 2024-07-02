import { ActivityIndicator, View } from "react-native";

export default function Indicator () {
    return(
        <View>
            <ActivityIndicator animating={true} size='large' color='green' />
        </View>
    )
}
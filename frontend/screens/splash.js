import { Image, Text, View } from "react-native"
import Wrapper from "../components/wrapper"
import Indicator from "../components/indicator"

export default function Splash () {
    return (
        <Wrapper>
            <View className='flex justify-center items-center'>

            <View className='h-100 w-100 bg-red-200'>

                <Image className='w-100 h-100 bg-gre' src={require("../assets/images/tour_splash.png")} />

            </View>

                <Text>Splash Screen</Text>

                <Indicator />

            </View>
        </Wrapper>
    )
}
import { Text, View } from "react-native"
import Wrapper from "../components/wrapper"

export default function Settings () {
    return (
        <Wrapper>
           <View className='flex-row justify-start items-center mt-4 mb-4'>
                    <Text className='text-center font-bold text-xl'>My Settings Screen</Text>
                </View>
        </Wrapper>
    )
}
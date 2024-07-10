import { Image, Text, View } from "react-native"
import Wrapper from "../../components/wrapper"
import { ScrollView } from "react-native-gesture-handler"
import { Button } from "../../components/button"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { renderRating } from "../../components/rating"

export default function TourDetails(props) {

    const navigation = useNavigation()
    const { id, location, distance, img } = props.route.params

    return (
        <Wrapper>
            <View className='flex-col'>

                <View className='flex-row justify-center items-center bg-green-100 rounded-2xl'>
                    <Image className='w-60 h-60' source={img} />
                </View>

                <ScrollView>
                    <View className='flex-1 mt-4' style={{ position: 'relative', bottom: 1 }}>
                        <Text className='font-bold text-start text-xl mb-4'>Site Info</Text>

                        <View className='bg-blue-100 p-2 rounded-xl mb-2'>
                            <Text className='text-start text-lg'>{location}</Text>
                            <Text className='text-start text-sm'>Location</Text>
                        </View>

                        <View className='bg-blue-100 p-2 rounded-xl mb-2'>
                            <Text className='text-start text-lg'>{distance}</Text>
                            <Text className='text-start text-sm'>Distance</Text>
                        </View>

                        <View className='bg-blue-100 p-2 rounded-xl mb-2'>
                            <Text className='text-start text-lg'>Amount</Text>
                            <Text className='text-start text-sm'>{distance}</Text>
                        </View>

                        <View className='bg-blue-100 p-2 rounded-xl mb-2'>
                            {renderRating()}
                            <Text className='text-start text-sm'>Rating</Text>
                        </View>

                    </View>

                </ScrollView>

                <View className='mt-10'>
                    <Button btn_name="Book Tour" onPress={() => navigation.navigate("Book")} />
                </View>
            </View>
        </Wrapper>
    )
}
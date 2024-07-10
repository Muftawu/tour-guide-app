import { Ionicons } from "@expo/vector-icons"
import { View, TouchableOpacity, Image, Text } from "react-native"
import { renderRating } from "./rating"


export function RecommendedLocation ({item, navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate("Details", {...item})}} className='flex-row mb-3 rounded-2xl justify-between items-center bg-blue-100 p-2'>
            <View>
                <Text className='text-start font-bold text-lg'>{item.location}</Text>
                <Text className='text-start text-sm'>{item.distance}m</Text>
                {renderRating()}
            </View>
            <View>
                <Image className='w-20 h-20 mx-4' source={item.img} />
            </View>
        </TouchableOpacity>
        </View>
    )
}

export function EmptyComponent ({msg}) {
    return (
        <View>
            <Text className='text-center text-lg'>{msg}</Text>
        </View>
    )
}
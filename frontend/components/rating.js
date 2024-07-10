import { Ionicons } from "@expo/vector-icons"
import { View } from "react-native"

export const renderRating = () => {
    const max = 5
    const min = 2
    const rand_num = parseInt(Math.random() * (max - min) + min)
    console.log(rand_num)
    let stars = []

    for (let i = 0; i < rand_num; i++) {
        stars.push(
            <Ionicons key={i} id={i} style={{ marginLeft: 2 }} name='star' size={20} color='yellow' />
        )
    }

    return (
        <View className='flex-row flex-start mb-2'>
            {stars}
        </View>
    )
}
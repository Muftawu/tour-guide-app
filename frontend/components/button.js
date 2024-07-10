import { View, Text, TouchableOpacity } from "react-native";

export function Button ({btn_name, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}
            className='flex-row justify-center items-center bg-green-300 p-2 rounded-xl'
        >
            <Text className='text-center text-lg'>{btn_name}</Text>
        </TouchableOpacity>
    )
}
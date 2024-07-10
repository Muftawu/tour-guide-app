import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"

export function DrawerComponent () {
    const navigation = useNavigation()

    return (
       <TouchableOpacity onPress={() => navigation.toggleDrawer()} className='mx-4'>
         <Ionicons name='menu' size={30} color="blue" />
       </TouchableOpacity>
    )
}
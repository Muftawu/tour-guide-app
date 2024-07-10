import { Image, Text, View, FlatList, RefreshControl } from "react-native"
import Wrapper from "../components/wrapper"
import { SuggestedLocations } from "../utils/constants"
import { EmptyComponent, RecommendedLocation } from "../components/cards"
import { useNavigation } from "@react-navigation/native"

export default function Home() {

    const navigation = useNavigation()

    return (
        <Wrapper>
            <View className='flex-1'>
                <View className='flex-row justify-center items-center bg-green-200 p-2 rounded-2xl'>
                    <Image className='w-40 h-40' source={require("../assets/images/tour_splash.png")} />
                </View>

                <View className='flex-row justify-start items-center mt-4 mb-4'>
                    <Text className='text-center font-bold text-xl'>Popular Tourist sites near you</Text>
                </View>

                    <FlatList
                        data={SuggestedLocations}
                        numColumns={1}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 10}}
                        ListEmptyComponent={<EmptyComponent msg="No suggested locations available" />}
                        refreshControl={<RefreshControl refreshing={false} onRefresh={() => { }} />}
                        renderItem={({ item }) => {
                            return (
                                <RecommendedLocation item={item} navigation={navigation} />
                            )
                        }}
                    />

            </View>
        </Wrapper>
    )
}
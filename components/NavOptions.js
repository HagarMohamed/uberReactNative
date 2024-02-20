import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { selectOrigin } from "../redux/reducers/navReducer";


const data = [
    {
        id: "1",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen: "EatScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation()
    const orign = useSelector(selectOrigin)
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-md`}
                    disabled = {!orign}
                    onPress={() => {
                        navigation.navigate(item.screen)
                    }}
                >
                    <View style={tw`${!orign && "opacity-50"}`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw` bg-black w-10 mt-4 p-2 rounded-full`}
                            name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            )} />

    )
}

export default NavOptions
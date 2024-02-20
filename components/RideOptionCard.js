import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Icon, Image, Text } from "react-native-elements"
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { selectTravelTimeInformation } from "../redux/reducers/navReducer";


const data = [
    {
        id: "1",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
    },
    {
        id: "2",
        title: "Uber XL",
        multiplier: 1.3,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png"
    },
    {
        id: "3",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png"
    }
]



const RideOptionCard = () => {

    const SURGE_CHARGE_RATE = 1.5

    const navigation = useNavigation()
    const [selected, useSelected] = useState()
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white`}>
            <View style={tw` flex-grow`} >
                <TouchableOpacity  style={tw` absolute top-0 left-5 z-50 p-2 rounded-full`}>
                    <Icon onPress={() => {
                        navigation.navigate("NavigationCard")
                    }}
                        name="chevron-left" type="font-awesome" size={16} />
                </TouchableOpacity>
                <Text style={tw`pb-5 text-xl text-center font-semibold`}>Select a Ride - {travelTimeInformation?.distance?.text} </Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            useSelected(item)
                        }} style={tw`flex-row justify-between bg-white items-center px-10 ${id === selected?.id && "bg-gray-200"}`} >
                        <Image source={{ uri: image }} style={{ width: 80, height: 80, resizeMode: "contain" }} />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>it will take {travelTimeInformation?.distance.text}</Text>
                        </View>
                        <Text style={tw`text-xl font-semibold`}>
                            {new Intl.NumberFormat("en-gb",{
                                style:"currency",
                                currency:"GBP"
                            }).format(
                                (travelTimeInformation?.distance?.value * SURGE_CHARGE_RATE * multiplier)/100
                            )
                            }
                        </Text>
                    </TouchableOpacity>
                )} />


            <View>
                <TouchableOpacity disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-xl text-center text-white `}>choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionCard
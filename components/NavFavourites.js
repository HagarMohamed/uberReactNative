import { FlatList, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-elements"
import tw from 'twrnc';


const data = [
    {
        id: "1",
        location: "Home",
        icon: "home",
        destination: "Code Street, London , UK"
    },
    {
        id: "2",
        location: "Work",
        icon: "briefcase",
        destination: "London Eye, London , UK"
    }
]



const NavFavourites = () => {
    return (

        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {
                    height: 0.5
                }]}
                />
            )}
            renderItem={({ item: { id, location, icon, destination }, item }) => (
                <TouchableOpacity style={tw`flex-row items-center p-2`}>
                    <Icon style={tw` bg-gray-400 mr-4 p-3 rounded-full`}
                        name={icon} color="white" type="ionicon" size={18} />

                    <View>
                        <Text style={tw`font-bold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )} />
    )
}

export default NavFavourites

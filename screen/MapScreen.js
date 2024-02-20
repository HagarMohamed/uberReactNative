import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native"
import tw from 'twrnc';
import Map from "../components/Maps";
import NavigationCard from "../components/NavigationCard";
import RideOptionCard from "../components/RideOptionCard";

const MapScreen = () => {
    const Stack = createNativeStackNavigator()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`pt-7 pl-2 pr-2 h-1/2`}>
                <Map />
            </View>
            <View style={tw` h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigationCard" component={NavigationCard} options={{ headerShown: false }} />
                    <Stack.Screen name="RideOptionCard" component={RideOptionCard} options={{ headerShown: false }} />
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-elements"
import tw from 'twrnc';
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch } from "react-redux"
import { setDestination } from "../redux/reducers/navReducer"
import NavFavourites from "./NavFavourites"
import { GOOGLE_MAP_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const NavigationCard = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`p-2 text-xl font-semibold text-center`}>Hi Ahmed Again</Text>
            <View style={tw`flex-shrink border-t border-gray-200`}>
                    <GooglePlacesAutocomplete
                        debounce={400}
                        placeholder={"What is your location ..."}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        styles={MytextInputStyle}
                        query={{
                            key: GOOGLE_MAP_API_KEY ,
                            language: "en"
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            )
                            navigation.navigate("RideOptionCard")
                        }}
                    />
                <NavFavourites />
            </View>

            <View 
            style={tw`flex-row bg-white justify-evenly  mt-auto border-t border-gray-100`}>
                
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("RideOptionCard")
                }} 
                style={[tw`flex flex-row items-center w-24 bg-black mt-5 rounded-full `,{
                    height: 30
                }]}>
                    <Icon 
                    style={tw` w-10 p-2 justify-between`}
                        name="car" 
                        color="white" 
                        type="font-awesome" 
                        size={16} />
                    <Text style={tw`text-white text-center`}>Ride</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row items-center w-24 p-5`}>
                    <Icon style={[tw` w-10 p-2 justify-between`,{
                    height: 30
                }]}
                        name="fast-food-outline" color="black" type="ionicon" size={16} />
                    <Text style={tw` text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


const MytextInputStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 0,
        paddingTop: 2
    },
    textInput: {
        backgroundColor: "#dddddd",
        fontSize: 18,
        borderRadius: 2
    },
    textInputContainer: {
        paddingHorizontal: 5,
        paddingTop: 5
    }
})

export default NavigationCard

import { Image, SafeAreaView, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAP_API_KEY } from '@env'
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/reducers/navReducer";
import NavFavourites from "../components/NavFavourites";


const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={
                        {
                            width: 100,
                            height: 100,
                            resizeMode: "contain"
                        }
                    }

                    source={{
                        uri: "https://mma.prnewswire.com/media/1671139/Uber_Logo.jpg?w=200"
                    }} />

                <GooglePlacesAutocomplete
                    placeholder={"What is your destination ..."}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    query={{
                        key: GOOGLE_MAP_API_KEY,
                        language: "en"
                    }}
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    minLength={2}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }

                    }
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
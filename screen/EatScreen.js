import {  SafeAreaView, Text, View } from "react-native"
import tw from 'twrnc';

const EatScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
            <Text style={tw`mt-2 text-lg font-semibold`}>"Eat"</Text>
            </View>
        </SafeAreaView>
    )
}

export default EatScreen
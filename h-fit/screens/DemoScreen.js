import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import {Ionicons} from '@expo/vector-icons'

export default function DemoScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`py-10 px-5 bg-orange-500 flex-1 `}>
        <TouchableOpacity style={tw`flex-row items-center py-5`}>
            <Ionicons name="arrow-back" size={32} color="white" onPress={() => navigation.goBack()}/>
            <Text style={tw`text-white`}>Go back</Text>
        </TouchableOpacity>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-white text-3xl font-bold`}>Hooray!</Text>
        <Text style={tw`text-white text-3xl`}>You did it!</Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View style={tw`-mt-16 -ml-8`}>
            <Ionicons name="checkmark-circle-outline" size={60} color="green" />
        </View>
        <Text style={tw`text-white text-3xl`}>You unlocked this feature</Text>
      </View>
    </SafeAreaView>
  )
}
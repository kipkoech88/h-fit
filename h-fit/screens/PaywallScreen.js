import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function PaywallScreen() {
    const navigation = useNavigation()
  return (
    <ScrollView style={tw`bg-blue-300 flex-1`}>
        <View style={tw`m-10 py-2`}>
                <Text style={tw`uppercase font-bold text-xl items-center text-center text-white`}>
                    Upgrade
                </Text>
                <Text style={tw`text-white text-center`}>
                    Upgrade to pro to access all features
                </Text>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
            <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D"/>
        </TouchableOpacity>
    </ScrollView>
  )
}
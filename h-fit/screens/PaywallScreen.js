import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

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
        style={tw`top-0 absolute right-0 p-5`}
        >
            <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D"/>
        </TouchableOpacity>

        {/*logo*/}
        <View style={tw`items-center`}>
            <MaterialCommunityIcons
                name='trophy-award'
                size={150}
                color="orange"
            />
        </View>

        <View style={tw`px-10 pt-5 space-y-5 pb-5`}>
            <View style={tw`flex-row space-x-10 items-center`}>
                <Ionicons name='md-key' size={32} color="orange"/>
                <View style={tw`flex-1`}>
                    <Text style={tw`text-white text-lg font-bold`}>Access to all Pro Features</Text>
                    <Text style={tw`text-white text-sm font-extralight`}>
                        Upgrade to the premium version of the app to access all features available 
                    </Text>
                </View>
            </View>
            <View style={tw`flex-row space-x-10 items-center`}>
                <Ionicons name='md-person-add-outline' size={32} color="orange"/>
                <View style={tw`flex-1`}>
                    <Text style={tw`text-white text-lg font-bold`}>Helpline 24/7 to professional trainers</Text>
                    <Text style={tw`text-white text-sm font-extralight`}>
                        Get unlimited support to our fitness team at any time 
                    </Text>
                </View>
            </View>
            <View style={tw`flex-row space-x-10 items-center`}>
                <Ionicons name='md-star' size={32} color="orange"/>
                <View style={tw`flex-1`}>
                    <Text style={tw`text-white text-lg font-bold`}>Unlock unlimited edition</Text>
                    <Text style={tw`text-white text-sm font-extralight`}>
                        Upgrade to the premium version of the app to access all features available 
                    </Text>
                </View>
            </View>
            {/* monthly subscribe */}
            
            {/* annual subscribe */}
            {/* restore purchase */}
        </View>
    </ScrollView>
  )
}
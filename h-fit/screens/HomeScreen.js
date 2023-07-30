import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Touchable } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`relative flex-1`}>
    <ScrollView>
      <Text>HomeScreen</Text>
      {/* PRO/Upgrade */}
      <TouchableOpacity style={tw`absolute z-50 top-5 right-5 items-center`}>
        <Ionicons name="person-circle" size={32} color="orange" />
        <Text style={tw``}>PRO/Upgrade</Text>
      </TouchableOpacity>
      {/* image */}
      <Image
        style={tw`w-full h-64`}
        source={{uri: "https://www.shutterstock.com/shutterstock/photos/1663692082/display_1500/stock-vector-fitness-gym-logo-design-template-with-exercising-athletic-man-and-woman-isolated-on-white-vector-1663692082.jpg"}}
      />
      {/* actionrow */}
      {/*actionrow */}
      {/*actionrow */}
      </ScrollView>

    </SafeAreaView>
  )
}
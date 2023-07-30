import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function ActionRow({title, icon, screen, vertical, color}) {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={[{backgroundColor: color}, tw`flex-1 m-2 flex justify-center items-center py-6 rounded-lg ${vertical ? "flex-col":"flex-row"}`]}
        onPress={() => navigation.navigate(screen)}
      >
        <Ionicons name={icon} size={32} color="white"/>
        <Text style={tw`text-white font-bold text-lg`}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
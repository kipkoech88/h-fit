import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Touchable } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import ActionRow from '../components/ActionRow';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`relative flex-1`}>
    <ScrollView>
      {/* PRO/Upgrade */}
      <TouchableOpacity style={tw`absolute z-50 top-5 right-5 items-center`}
        onPress={() => navigation.navigate('Paywall')}
      >
        <Ionicons name="person-circle" size={32} color="orange" />
        <Text style={tw`text-orange-500 text-center`}>PRO/Upgrade</Text>
      </TouchableOpacity>
      {/* image */}
      <Image
        style={tw`w-full h-64 mt-8`}
        source={{uri: "https://www.shutterstock.com/shutterstock/photos/1663692082/display_1500/stock-vector-fitness-gym-logo-design-template-with-exercising-athletic-man-and-woman-isolated-on-white-vector-1663692082.jpg"}}
      />
      <View style={tw`mx-3`}>
        {/* actionrow */}
      <View style={tw`flex justify-between flex-row space-x-2`}>
        <ActionRow
            title="Track Workout"
            icon="fitness"
            screen="Demo"
            vertical
            color="orange"s
        />
        {/*actionrow */}
            <ActionRow
            title="Browse Workouts"
            icon="library-outline"
            screen="Demo"
            vertical
            color="blue"
            />
      </View>
      {/*actionrow */}
      <ActionRow
        title="Connect with Friends"
        icon="share-social"
        screen="Demo"
        vertical
        color="lightblue"
      />
      {/*actionrow */}
      <ActionRow
        title="Create Workout Plan"
        icon="create-outline"
        screen="Demo"
        requiresPro
        color="red"
      />
       <ActionRow
        title="Join Challange"
        icon="trophy-outline"
        screen="Demo"
        requiresPro
        color="green"
      />
        <ActionRow
        title="Create Challange"
        icon="add-circle-outline"
        screen="Demo"
        requiresPro
        color="gray"
        />
      </View>
    </ScrollView>
     
    </SafeAreaView>
  )
}
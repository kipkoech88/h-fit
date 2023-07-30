import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-red-500`}>
    <View style={tw`text-5xl bg-red-500`}>
      <Text style={tw`text-lg py-6`}>Welcome to H-Fit</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

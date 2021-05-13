import * as React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Header} from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
 
export default class App extends React.Component {
  
  render(){
    return(
      <SafeAreaProvider>
      <SafeAreaView>
     <View style={styles.container}>
     <Header
          backgroundColor={'#03fce8'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <HomeScreen/>
     </View>
     </SafeAreaView>
     </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b8b8b8',
  },
 
})
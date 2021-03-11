import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import searchScreen from './searchScreen'
import bookTransactionScreen from './bookTransactionScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer 

      />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:bookTransactionScreen},
  Search:{screen:searchScreen},
});
const AppContainer = createAppContainer(TabNavigator)
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '@components/Header';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';

SplashScreen.preventAutoHideAsync();


export default function App() {
   const [fontsLoaded] = useFonts({
      'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
   });
   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) return null;

   return (
      <View style={styles.container} onLayout={onLayoutRootView}>
         <Text style={styles.text}>Ops hello</Text>
         <Header/>
         <StatusBar style="auto"/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      // fontFamily: 'Montserrat-Medium',
      fontFamily: 'Roboto-Bold',
   },
});

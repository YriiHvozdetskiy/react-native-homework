import {Header} from '@components/Header';
import {Container} from './styled';
import {useFonts} from 'expo-font';
import {useCallback} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {Text} from 'react-native';
import {RegistrationScreen} from '@screens/RegistrationScreen';

SplashScreen.preventAutoHideAsync();

export const AppNavigator = () => {
   const [fontsLoaded] = useFonts({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
   });
   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) return null;

   return (
      <Container onLayout={onLayoutRootView}>
         {/*<Header/>*/}
         <RegistrationScreen/>
      </Container>
   )
}
import {AppNavigator} from './src/navigation';
import {Platform, View} from 'react-native';

export default function App() {

   return (
      <View style={Platform.OS === "ios" ? null : {paddingTop: 30, backgroundColor: '#000'}}>
         <AppNavigator/>
      </View>
   );
}


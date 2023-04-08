// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//
// import ForgotPassword from '../screens/ForgotPassword';
// import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Registration from '../screens/Registration';
// import ScanOrChoose from '../screens/ScanOrChoose';
// import Catalog from '../screens/Catalog';
// import Profile from '../screens/Profile';
// import Stores from '../screens/Stores';
// import TakePhoto from '../screens/TakePhoto';
// import Wishlist from '../screens/Wishlist';
// import NoMatchFound from '../screens/NoMatchFound';
// import Goods from '../screens/Goods';
// import ProLabel from '../screens/ProLabel';
// import SimilarProducts from '../screens/SimilarProducts';
// import HowToKnit from '../screens/HowToKnit';
//
// import CustomHeader from '../components/CustomHeader';
//
// import {
//   HomeIcon,
//   LikesIcon,
//   PhotoIcon,
//   ShopIcon,
//   ProfileIcon
// } from '../assets/icons';

import {LoginScreen} from '@screens/LoginScreen';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = ({navigation}) => {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: "#A8A8A8",
            tabBarActiveTintColor: '#E5097F',
            tabBarShowLabel: false,
            tabBarStyle: {
               backgroundColor: '#F2F9FC',
               borderTopColor: '#ffffff',
               elevation: 0,
               shadowOpacity: 0,
               borderTopWidth: 2,
            },
         }}
         initialRouteName="Catalog"
      >
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({color, size}) => (
                  <ProfileIcon color={color}/>
               ),
            }}
         />
         <Tab.Screen
            name="LoginScreen"
            component={LoginScreen}
            // options={{
            //     tabBarIcon: ({ color, size }) => (
            //         <HomeIcon color={color} />
            //     )
            // }}
         />
      </Tab.Navigator>
   );
};

// const AppNavigator = ({ userToken }) => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 animation: "none"
//             }}
//         >
//             {userToken ? (
//                 <>
//                     <Stack.Screen
//                         name="Main"
//                         component={MainTabNavigator}
//                     />
//                     <Stack.Screen
//                         name="Welcome"
//                         component={Welcome}
//                     />
//                     <Stack.Screen
//                         name="ScanOrChoose"
//                         component={ScanOrChoose}
//                     />
//                     <Stack.Screen
//                         name="NoMatchFound"
//                         component={NoMatchFound}
//                     />
//                 </>
//             ) : (
//                 <>
//                     <Stack.Screen
//                         name="Welcome"
//                         component={Welcome}
//                     />
//                     <Stack.Screen
//                         name="Registration"
//                         component={Registration}
//                     />
//                     <Stack.Screen
//                         name="Login"
//                         component={Login}
//                     />
//                     <Stack.Screen
//                         name="ForgotPassword"
//                         component={ForgotPassword}
//                     />
//                 </>
//             )}
//         </Stack.Navigator>
//     );
// };

// export default AppNavigator;
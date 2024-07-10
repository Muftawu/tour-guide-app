import { createDrawerNavigator, DrawerItemList, View, Text } from '@react-navigation/drawer';
import { TourStack } from './stack';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import History from '../screens/history';
import About from '../screens/about';
import { TourDrawerContent } from '../components/drawer_content';
import { DrawerComponent } from '../components/drawer_component';

const Drawer = createDrawerNavigator();

export default function TourDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <TourDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >

      <Drawer.Screen name="My Home" component={TourStack} />
      <Drawer.Screen name="Profile" component={Profile} options={{
        headerShown: true,
        
        headerLeft: (() => (
          <DrawerComponent />
        )),
      }} />
      <Drawer.Screen name="Settings" component={Settings}
        options={{
          headerShown: true,
          headerLeft: (() => (
            <DrawerComponent />
          )),
        }}
      />
      <Drawer.Screen name="History" component={History}
        options={{
          headerShown: true,
          headerLeft: (() => (
            <DrawerComponent />
          )),
        }}
      />
      <Drawer.Screen name="About" component={About}
        options={{
          headerShown: true,
          headerLeft: (() => (
            <DrawerComponent />
          )),
        }}
      />

    </Drawer.Navigator>
  );
}   
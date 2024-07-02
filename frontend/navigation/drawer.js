import { createDrawerNavigator } from '@react-navigation/drawer';
import { TourStack } from './stack';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import History from '../screens/history';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

export default function TourDrawer () {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={TourStack} />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="About" component={About} />

    </Drawer.Navigator>
  );
}   
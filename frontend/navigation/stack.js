import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash";
import TourOptions from '../screens/tour/tour_options';
import TourDetails from '../screens/tour/tour_details';
import BookTour from '../screens/tour/book_tour';
import Payment from '../screens/tour/confirm_payment';
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";

const Stack = createNativeStackNavigator();

export const TourStack = () => {
  return (

    <Stack.Navigator initialRouteName="Splash">


      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />

      <Stack.Screen
        name="Options"
        options={{ headerShown: false }}
        component={TourOptions}
      />

      <Stack.Screen
        name="Details"
        options={{ headerShown: false }}
        component={TourDetails}
      />

      <Stack.Screen
        name="Book"
        options={{ headerShown: false }}
        component={BookTour}
      />

      <Stack.Screen
        name="Payment"
        options={{ headerShown: false }}
        component={Payment}
      />

    </Stack.Navigator>

  );
};

export const CredentialStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
  );
};
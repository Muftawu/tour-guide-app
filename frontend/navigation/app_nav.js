import { NavigationContainer } from '@react-navigation/native';
import { CredentialStack } from './stack';
import TourDrawer from './drawer';

export default function AppNav () {
    
    const verified = false 

    return (
        <NavigationContainer>
            {verified ? <TourDrawer /> : <CredentialStack /> }
        </NavigationContainer>
    )
}
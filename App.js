import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#3c0a6b',
        },
        headerTintColor:'white',
        drawerActiveTintColor:'#68336f',
        drawerActiveBackgroundColor:'#3c0a6b'

      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({size, color})=>{
            <Ionicons name='home' color={color} size={size}/>
          }
        }}/>
        <Drawer.Screen name='User' component={UserScreen} options={{
          drawerLabel: 'User Screen',
          drawerIcon: ({size, color})=>{
            <Ionicons name='person' color={color} size={size}/>
          }
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

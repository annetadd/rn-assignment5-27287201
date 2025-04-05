import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, useTheme } from './ThemeContext'; 
import Home from './Home';
import Settings from './Settings';
import MyCards from './MyCards';
import Statistics from './Statistics';
import { darkTheme, lightTheme } from './themes';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? darkTheme : lightTheme;

  
  const currentTheme = isDarkTheme
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: '#1E2A47', 
          text: '#fff', 
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff', 
          text: 'black', 
        },
      };

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/home.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name="My Cards"
          component={MyCards}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/myCards.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Statistics.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/settings.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
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

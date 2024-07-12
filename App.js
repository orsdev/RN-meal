import { StatusBar } from 'expo-status-bar';
import CategoriesPage from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import OverviewPage from './screens/Overview';
import DetailsPage from './screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          title: '',
          headerTitleStyle: {
            fontSize: 16
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          // headerTintColor: 'red',
          contentStyle: {} //TODO: Applies to main content

        }}>
          <Stack.Screen
            name="categories"
            component={CategoriesPage}
            options={{
              title: 'Categories',
              headerStyle: {
                backgroundColor: 'white',
              },
              // headerTintColor: 'red',
              contentStyle: {} //TODO: Applies to main content
            }}
          />
          <Stack.Screen
            name="overview"
            component={OverviewPage}
          // TODO: Set dynamic headers or use navigation.setOptions({})
          // options={({ route, navigation }) => {
          //   const catId = route?.params?.categoryId
          //   return {
          //     title: catId
          //   }
          // }}
          />
          <Stack.Screen
            name="details"
            component={DetailsPage}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("categories")}>
                    <Ionicons name="home-outline" size={20} />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
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

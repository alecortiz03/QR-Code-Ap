import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Dashboard from '@/Screens/Dashboard';

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Dashboard'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='Dashboard'
					component={Dashboard}
				/>
			</Stack.Navigator>
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

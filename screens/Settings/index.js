import { View, Text, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Appearance from "./Appearance";
import Notification from "./Notification";
import Profile from "./Profile";
//import Setting from "./Setting";

const Stack = createNativeStackNavigator();
const index = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={
					<View>
						<Button
							title="profile"
							onPress={() => navigation.navigate("Profile")}
						/>
						<Button
							title="Notification"
							onPress={() => navigation.navigate("Notification")}
						/>
						<Button
							title="Appearance"
							onPress={() => navigation.navigate("Appearance")}
						/>
					</View>
				}
			/>
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Notification" component={Notification} />
			<Stack.Screen name="Appearance" component={Appearance} />
		</Stack.Navigator>
	);
};
export default index;

import { View, Text } from "react-native";
import React from "react";
import { Home, Message, Settings, Sell } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const ScreenOptions = {
	tabShowLabel: false,
};

export default function Main() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Message" component={Message} />
			<Tab.Screen name="Sell" component={Sell} />
			<Tab.Screen
				screenOptions={{ headerShown: false }}
				name="Settings"
				component={Settings}
			/>
		</Tab.Navigator>
	);
}

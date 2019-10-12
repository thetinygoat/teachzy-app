import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { Card, Title } from "react-native-paper";
export default function GroupCard(props) {
	return (
		<TouchableNativeFeedback
			onPress={() => {
				props.navigation.navigate({ routeName: "Group" });
			}}
			delayPressIn={0}
			delayPressOut={0}
		>
			<Card style={styles.group}>
				<Text style={styles.studentCount}>{props.group.subject}</Text>
				<Title>{props.group.name}</Title>
				<Text style={styles.studentCount}>
					{props.group.approved_users.length} Students
				</Text>
			</Card>
		</TouchableNativeFeedback>
	);
}

const styles = StyleSheet.create({
	group: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 25,
		paddingTop: 25,
		margin: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		borderRadius: 10
	},
	studentCount: {
		color: "#11d3c1"
	}
});

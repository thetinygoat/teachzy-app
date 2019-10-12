import React, { useState, useEffect } from "react";
import { Card, Title } from "react-native-paper";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableNativeFeedback
} from "react-native";
import axios from "../axios";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
export default function AllGroups({ navigation }) {
	const [groups, setGroups] = useState([]);
	useEffect(() => {
		const fetchGroups = async () => {
			let response = await axios.get("/groups/my-groups", {
				headers: {
					"x-auth-token":
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDEzYmZlYjA4MzgzYzAwMTcxZTI1YWEiLCJpYXQiOjE1NzA3MzM5Njl9.CQk9L9iIfbgDzjP_tQ61OtJGUpkQjc5P539z4kAzCkk"
				}
			});
			setGroups(response.data);
		};
		fetchGroups();
	}, []);
	return (
		<View style={styles.container}>
			{groups.map(group => {
				return (
					<TouchableNativeFeedback
						key={group.unique_id}
						onPress={() => {
							navigation.navigate({ routeName: "Group" });
						}}
					>
						<Card style={styles.group}>
							<Text style={styles.studentCount}>{group.subject}</Text>
							<Title>{group.name}</Title>
							<Text style={styles.studentCount}>
								{group.approved_users.length} Students
							</Text>
						</Card>
					</TouchableNativeFeedback>
				);
			})}
		</View>
	);
}

AllGroups.navigationOptions = ({ navigation }) => {
	return {
		title: "Classes",
		headerTintColor: "#11d3c1",
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					label={"menu"}
					title={"menu"}
					iconName={"menu"}
					onPress={() => {
						navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
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

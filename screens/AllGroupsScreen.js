import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "../axios";
export default function AllGroups({ navigation }) {
	const fetchGroups = async () => {
		let response = await axios.get("/groups/my-groups", {
			headers: {
				"x-auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDEzYmZlYjA4MzgzYzAwMTcxZTI1YWEiLCJpYXQiOjE1NzA3MzM5Njl9.CQk9L9iIfbgDzjP_tQ61OtJGUpkQjc5P539z4kAzCkk"
			}
		});
		console.log(response.data);
	};
	// fetchGroups();
	return (
		<View style={styles.container}>
			<Text>All Groups Screen</Text>
			<Button
				title={`Go to group screen`}
				onPress={() => {
					navigation.navigate({ routeName: "Group" });
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

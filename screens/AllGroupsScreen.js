import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	ScrollView,
	KeyboardAvoidingView,
	RefreshControl
} from "react-native";
import axios from "../axios";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { Fab, GroupCard } from "../components";
import { Portal, Dialog, TextInput, Button } from "react-native-paper";
import { primaryColor, white } from "../constants/colors";

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

	const [dialogVisibility, setDialogVisibility] = useState(false);
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		setTimeout(() => setRefreshing(false), 2000);
	}, [refreshing]);
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{groups.map(group => {
					return (
						<GroupCard
							group={group}
							key={group.unique_id}
							navigation={navigation}
						/>
					);
				})}
			</ScrollView>
			<Fab onPress={() => setDialogVisibility(true)} delayPressIn={0} />

			<KeyboardAvoidingView>
				<Portal>
					<Dialog
						visible={dialogVisibility}
						onDismiss={() => {
							setDialogVisibility(false);
						}}
					>
						<Dialog.Title>Add New Group</Dialog.Title>
						<Dialog.Content>
							<ScrollView>
								<TextInput
									label={"Name"}
									style={{ backgroundColor: white }}
									mode={"outlined"}
								/>
								<TextInput
									label={"Description"}
									style={{ backgroundColor: white }}
									mode={"outlined"}
								/>
								<TextInput
									label={"Maths"}
									style={{ backgroundColor: white }}
									mode={"outlined"}
									underlineColor={primaryColor}
								/>
							</ScrollView>
						</Dialog.Content>
						<Dialog.Actions>
							<Button
								onPress={() => {
									setDialogVisibility(false);
								}}
							>
								Cancel
							</Button>
							<Button
								onPress={() => {
									setDialogVisibility(false);
								}}
							>
								Done
							</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</KeyboardAvoidingView>
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
	}
});

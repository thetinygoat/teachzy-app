import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Modal,
	ScrollView
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import { Portal, Dialog, TextInput } from "react-native-paper";
import { primaryColor, white } from "../constants/colors";
import axios from "../axios";
import moment from "moment";

let events = [
	{
		key: "1",
		date: "2019-10-10",
		eventName: "Maths test"
	},
	{
		key: "2",
		date: "2019-10-20",
		eventName: "Science test"
	},
	{
		key: "3",
		date: "2019-10-30",
		eventName: "Bio test"
	}
];

let markedDates = {};
events.forEach(event => {
	markedDates[event.date] = { selected: true };
});

export default function Planner() {
	const [newEventModalOpen, setNewEventModalOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");

	const dayPressed = day => {
		console.log(day);
		setSelectedDate(day.dateString);
		setNewEventModalOpen(true);
	};
	return (
		<View style={styles.container}>
			{/*<Text>Planner Screen</Text>*/}
			<Calendar
				markedDates={markedDates}
				onDayLongPress={day => {
					dayPressed(day);
				}}
			/>
			<View style={styles.newEventsHeader}>
				<Text> Upcoming Scheduled Events</Text>
			</View>
			{newEventModalOpen && (
				<AddNewEventModal
					visible={newEventModalOpen}
					closeModal={() => setNewEventModalOpen(false)}
					selectedDate={selectedDate}
				/>
			)}

			{/*<FlatList*/}
			{/*	data={events}*/}
			{/*	renderItem={event => (*/}
			{/*		<View>*/}
			{/*			<Text> ABX </Text>*/}
			{/*		</View>*/}
			{/*	)}*/}
			{/*	keyExtractor={event => event.key}*/}
			{/*/>*/}
		</View>
	);
}

const AddNewEventModal = props => {
	let [name, setName] = useState("");
	let [description, setDescription] = useState("");

	const submitForm = async () => {
		console.log("HI in the sunmit");
		let response = await axios.post(
			"/messages/new",
			{
				title: name,
				parent_group: "k1nxo6di",
				description: description,
				message_type: "event",
				timestamp: 1552142694,
				expiry_date: moment(props.selectedDate, "YYYY-MM-DD")
					.endOf("day")
					.toString()
			},
			{
				headers: {
					"x-auth-token":
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDEzYmZlYjA4MzgzYzAwMTcxZTI1YWEiLCJpYXQiOjE1NzA3MzM5Njl9.CQk9L9iIfbgDzjP_tQ61OtJGUpkQjc5P539z4kAzCkk"
				}
			}
		);
		console.log(response);
	};
	return (
		<KeyboardAvoidingView>
			<Portal>
				<Dialog visible={props.visible} onDismiss={props.closeModal}>
					<Dialog.Title>Add New Events</Dialog.Title>
					<Dialog.Content>
						<ScrollView>
							<TextInput
								label={"Date"}
								disabled={true}
								style={{ backgroundColor: white }}
								editable={false}
								mode={"outlined"}
								value={moment(props.selectedDate, "YYYY-MM-DD")
									.endOf("day")
									.format("LL")
									.toString()}
							/>
							<TextInput
								label={"Name"}
								value={name}
								style={{ backgroundColor: white }}
								onChangeText={text => setName(text)}
								mode={"outlined"}
							/>
							<TextInput
								label={"Description(optional)"}
								value={description}
								style={{ backgroundColor: white }}
								onChangeText={text => setDescription(text)}
								mode={"outlined"}
								underlineColor={primaryColor}
							/>
						</ScrollView>
					</Dialog.Content>
					<Dialog.Actions>
						<Button onPress={props.closeModal}>Cancel</Button>
						<Button onPress={submitForm}>Done</Button>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#fff"
		// alignItems: "center"
		// justifyContent: "center"
	},
	newEventsHeader: {
		backgroundColor: "#11d3c1",
		height: 30
	}
});

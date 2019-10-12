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

			<KeyboardAvoidingView>
				<Portal>
					<Dialog
						visible={newEventModalOpen}
						onDismiss={() => {
							setNewEventModalOpen(false);
						}}
					>
						<Dialog.Title>Add New Event</Dialog.Title>
						<Dialog.Content>
							<ScrollView>
								<TextInput
									label={"Date"}
									disabled={true}
									style={{ backgroundColor: white }}
									editable={false}
									mode={"outlined"}
									value={selectedDate}
								/>
								<TextInput
									label={"Name"}
									style={{ backgroundColor: white }}
									mode={"outlined"}
								/>
								<TextInput
									label={"Description(optional)"}
									style={{ backgroundColor: white }}
									mode={"outlined"}
									underlineColor={primaryColor}
								/>
							</ScrollView>
						</Dialog.Content>
						<Dialog.Actions>
							<Button
								onPress={() => {
									setNewEventModalOpen(false);
								}}
							>
								Cancel
							</Button>
							<Button
								onPress={() => {
									setNewEventModalOpen(false);
								}}
							>
								Done
							</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</KeyboardAvoidingView>

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

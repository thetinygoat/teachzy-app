import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal, Button } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { Dimensions } from "react-native";
// import {Button} from "react-native-paper";

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
	const [modalOpen, setModalStatus] = useState(false);
	const [eventDetails, setEventDetails] = useState({});

	const dayPressed = day => {
		events.forEach(function(event) {
			console.log("event is", event);
			if (event.date === day.dateString) {
				setModalStatus(true);
				setEventDetails(event);
			}
		});
	};
	return (
		<View style={styles.container}>
			{/*<Text>Planner Screen</Text>*/}
			<Calendar
				markedDates={markedDates}
				onDayPress={day => {
					dayPressed(day);
				}}
			/>
			<View style={styles.newEventsHeader}>
				<Text> Upcoming Scheduled Events</Text>
			</View>

			<AddNewEventModal
				visible={modalOpen}
				eventDetails={eventDetails}
				closeModal={() => setModalStatus(false)}
			/>
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
	return (
		<Modal visible={props.visible} animationType="slide">
			<View>
				<Button title="Close Modal " onPress={props.closeModal} />
			</View>
		</Modal>
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

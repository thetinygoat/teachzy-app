import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DatePickerAndroid
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
const Attendance = () => {
  const [DatePicker, setDatePicker] = useState(false);
  const openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.log(year, month, day);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  const data = [
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Sachin",
      present: true
    }
  ];
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          openDatePicker();
        }}
        title="Date"
      />
      {data.map(student => {
        return <Text style={styles.student}>{student.name}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  student: {
    fontSize: 17,
    padding: 20,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1
  }
});

export default Attendance;

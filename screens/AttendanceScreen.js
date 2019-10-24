import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DatePickerAndroid,
  TouchableNativeFeedback
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Switch } from "react-native-paper";
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

  const handleAbsent = i => {
    data.map((student, ix) => {
      if (i === ix) {
        student.present = false;
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => openDatePicker()}>
        <View style={styles.datePicker}>
          <Text>{Date.now()}</Text>
        </View>
      </TouchableNativeFeedback>
      {data.map((student, ix) => {
        return (
          <View style={styles.student}>
            <Text>{student.name}</Text>
            <Switch
              value={student.present}
              onValueChange={() => {
                handleAbsent(ix);
              }}
            />
          </View>
        );
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
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  datePicker: {
    fontSize: 17,
    padding: 20,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default Attendance;

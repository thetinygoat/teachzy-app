import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  DatePickerAndroid,
  TouchableNativeFeedback
} from "react-native";
import { format } from "date-fns";
import { Switch } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { primaryColor, white } from "../constants/colors";
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

  const [data, setData] = useState([
    {
      name: "Sachin",
      present: true
    },
    {
      name: "Mayank",
      present: true
    },
    {
      name: "Divij",
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
  ]);

  const handleAbsent = i => {
    let updatedStudent = data[i];
    updatedStudent.present = !updatedStudent.present;
    let newData = data.filter((_, ix) => {
      return ix !== i;
    });
    newData.splice(i, 0, updatedStudent);
    setData(newData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <TouchableNativeFeedback>
          <MaterialCommunityIcons
            name={"chevron-left-circle"}
            size={30}
            color={primaryColor}
          />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => openDatePicker()}>
          <View style={styles.dateButton}>
            <Text style={{ color: white, fontWeight: "bold" }}>
              {format(new Date(), "dd/MM/yyyy")}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <MaterialCommunityIcons
            name={"chevron-right-circle"}
            size={30}
            color={primaryColor}
          />
        </TouchableNativeFeedback>
      </View>

      <ScrollView>
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
      </ScrollView>
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
  },
  dateButton: {
    borderRadius: 20,
    backgroundColor: primaryColor,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingTop: 10,
    paddingRight: 30
  }
});

export default Attendance;

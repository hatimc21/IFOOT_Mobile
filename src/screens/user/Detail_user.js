import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ScrollView, SafeAreaView, Switch } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Feather from "@expo/vector-icons/Feather";
import { Calendar } from 'react-native-calendars';
import pictures from "../../const/pictures";


const Detail_user = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedHour, setSelectedHour] = React.useState(null);
  const availableHours = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];
  const onDateChange = (date) => {
    setSelectedDate(date);
    return date;
  };
  const pitch = route.params;
  console.log(pitch)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Feather name="bookmark" size={24} color="black" />
        </View>
        <Image source={pictures[pitch.id-1].img} style={styles.img} />
        <View style={styles.count3}>
          <Text style={styles.title}>{pitch.name}</Text>
          <Text style={styles.subtitle}>{pitch.price} dh / heur</Text>
          <Text style={styles.text}>
            {pitch.about}
          </Text>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            scale={0.5}
            onDayPress={onDateChange}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
          />
          {selectedDate && (
            <View>
              <Text>Selected date: {selectedDate.dateString}</Text>
              <SelectDropdown
                data={availableHours}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  setSelectedHour(selectedItem)
                  console.log(selectedHour)
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
              {selectedHour && (
                <Text>Selected hour: {selectedHour}</Text>
              )}
            </View>
          )}
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>want to create event ?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detail_user

const PRIMARY_COLOR = "#00B761";
const SECONDARY_COLOR = "#474747";
const FONT_SIZE_LARGE = 30;
const FONT_SIZE_MEDIUM = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  contentContainer: {
    alignItems: 'center',
  },
  calendarContainer: {
    alignItems: "center",
    width: "100%",
    height: "50%",
  },
  calendar: {
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
  },
  img: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  count3: {
    flex: 1,
    alignItems: "center",
    padding: -9,
  },
  title: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: "Montserrat_700Bold",
    marginTop: 5,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: FONT_SIZE_MEDIUM,
    color: SECONDARY_COLOR,
    marginTop: 2,
    fontFamily: "Montserrat_400Regular",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: FONT_SIZE_MEDIUM,
    lineHeight: 25,
    color: SECONDARY_COLOR,
    marginTop: 3,
  },
});
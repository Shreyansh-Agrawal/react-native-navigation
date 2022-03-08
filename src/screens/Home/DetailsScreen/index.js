import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>

      <TouchableOpacity onPress={() => navigation.push("Details")} style={styles.btn}>
        <Text style={styles.text}>Go to Details... again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btn}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Text style={styles.text}>Go back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.btn}>
        <Text style={styles.text}>Go back to first screen in stack</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin:5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  heading:{
    fontSize:40,
    margin:50,
    marginBottom:150
  }
});

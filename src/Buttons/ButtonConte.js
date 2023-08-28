import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ButtonConte() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={ () => navigation.navigate('Conte_nos') }>
        <Text style={styles.text}>Conte-nos</Text>
        <Image source={require('../../assets/plus.png')} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#fafafa",
    borderColor: "rgb(200,200,200)",
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 50,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  text:{
    fontSize: 25,
    fontWeight: "900",
  },
  icon:{
    height: 25,
    width: 25,
    position: "absolute",
    right: 15
  }
});
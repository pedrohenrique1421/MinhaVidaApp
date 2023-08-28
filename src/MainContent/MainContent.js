import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import ButtonConte from '../Buttons/ButtonConte.js';
import Monitor from '../Buttons/Monitor.js'
import Diario from '../Buttons/Diario.js'
import Lembre from '../Buttons/Lembre.js'


export default function MainContent() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Como você está{"\n"}se sentindo hoje?</Text>
        <ButtonConte textP="Conte" textS="-" textT="nos"></ButtonConte>
        <View style={styles.view}>
          <Text style={styles.textView}>Mais funções</Text>
          <View style={styles.viewButtons}>
          <Monitor />
          <Diario />
          <Lembre />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 100,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 100,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  text:{
    color: "#000",
    fontSize: 35,
    fontWeight: "900",
  },
  view:{
    borderColor: "rgb(200,200,200)",
    borderWidth: 3,
    borderRadius: 50,
    width: "100%",
    height: 180,
    marginTop: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  viewButtons:{
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  textView:{
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 15
  }
});
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Monitor() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/MonitorPassos.png")} style={styles.img} />
        <Text style={styles.text}>Monitor de atividades físicas</Text>
    </View>
  );
}

let size = 53;

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
  },
  text:{
    textAlign: "center",
    fontWeight: "600",
  },
  img:{
    width: 45,
    height: 53,
  }
});
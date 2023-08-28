import { StyleSheet, View, Text, Image } from 'react-native';

export default function Diario() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/Diario.png")} style={styles.img} />
        <Text style={styles.text}>Diario emocional</Text>
    </View>
  );
}

let size = 45;

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
    width: size,
    height: (size + 8),
  }
});
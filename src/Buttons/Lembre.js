import { StyleSheet, View, Text, Image } from 'react-native';

export default function Lembre() {
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/Lembre.png")} style={styles.img} />
        <Text style={styles.text}>Lembrede de {'\n'}necessidades</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
  },
  text:{
    textAlign: "center",
    fontWeight: "600",
  },
  img:{
    width: 37,
    height: 53,
  }
});
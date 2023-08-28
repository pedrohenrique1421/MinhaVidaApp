import { StyleSheet, View, Image, Text } from 'react-native';


export default function TabBar() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/Inicio.png")} style={styles.img1} />
        <Text style={styles.text}>Início</Text>
      </View>
      <View style={styles.contentOff}>
        <Image source={require("../../assets/Conteudo.png")} style={styles.img2} />
        <Text style={styles.text}>Conteúdos</Text>
      </View>
      <View style={styles.contentOff}>
        <Image source={require("../../assets/Social.png")} style={styles.img3} />
        <Text style={styles.text}>Social</Text>
      </View>
      <View style={styles.contentOff}>
        <Image source={require("../../assets/Perfil.png")} style={styles.img4} />
        <Text style={styles.text}>Perfil</Text>
      </View>
    </View>
  );
}


let size = 30;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 92,
    backgroundColor: '#fff',
    flexDirection: "row",
    paddingTop: 17,
    paddingLeft: 44,
    paddingRight: 44,
    position: "absolute",
    justifyContent: "space-between",
    bottom: 0,
    borderRadius: 25,
  },
  content: {
    width: 75,
    height: 60,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 2,
  },
  contentOff: {
    width: 75,
    height: 60,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 2,
    opacity: 0.2
  },
  img1:{
    height: 38,
    width: 44,
  },
  img2:{
    height: 34.56,
    width: 34.56,
  },
  img3:{
    height: 35,
    width: 35,
  },
  img4:{
    height: 37,
    width: 35,
  },
  text:{
    color: "#00AC5A",
    fontWeight: "600",
  }
});

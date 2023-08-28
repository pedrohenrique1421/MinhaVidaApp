import { StyleSheet, View, Image, Text } from 'react-native';


export default function NavBar() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Menu.png')} style={styles.iconMenu}></Image>
      <Text style={styles.text}>Inicio</Text>
      <Image source={require('../../assets/Notificacoes.png')} style={styles.iconNotifi}></Image>
    </View>
  );
}

let size = 30;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft: 17,
    paddingRight: 28,
    height: "13%",
    width: "100%",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  iconNotifi:{
    width: 28,
    height: 32,
  },
  iconMenu:{
    width: 59,
    height: 59,
  },
  text:{
    color: "#00AC5A",
    fontWeight: "900",
    fontSize: 25
  }
});
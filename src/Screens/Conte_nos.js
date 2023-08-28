import { StyleSheet,SafeAreaView, Text } from 'react-native';

export default function Conte_nos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Amanhã é Terça
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

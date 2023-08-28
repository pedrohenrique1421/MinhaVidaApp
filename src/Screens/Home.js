import { StyleSheet, View, ScrollView } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';


import NavBar from '../Bars/Navbar';
import MainContent from '../MainContent/MainContent';
import TabBar from '../Bars/TabBar';

export default function Home() {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
      <ScrollView>
        <MainContent></MainContent>
      </ScrollView>
      <TabBar></TabBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stack:{
    width: "100%",
    height: 200,
    backgroundColor: "#000"
  }
});

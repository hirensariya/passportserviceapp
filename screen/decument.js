/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useDarkMode } from 'react-native-dark-mode';




export default function App() {
  const isDarkMode = useDarkMode();
  const [main, mainlist] = useState([
    {
      listName: 'Proof of Identity', listdetail: [{ name: 'Pan Card', id: '1' },
      { name: 'Aadhar Card', id: '2' },
      { name: 'Driving License', id: '3' },
      { name: 'Voter ID', id: '4' },], id: '3'
    },
    {
      listName: 'Proof of Address', listdetail: [{ name: 'Aadhar Card', id: '1' },
      { name: 'Electricity Bill', id: '2' },
      { name: 'Telephone Bill ', id: '3' },
      { name: 'Water Bill', id: '4' },
      { name: 'Spouse Passport ', id: '5' },
      { name: 'Parents Passport', id: '6' },
      { name: 'Rent Agreement', id: '7' },
      { name: 'Bank Passbook', id: '8' },
      { name: 'Gas Connection Bill', id: '9' },
      { name: 'IT Order', id: '10' },
      { name: 'Employer Certificate', id: '11' },], id: '1'
    },

    {
      listName: 'Proof of Date of Birth', listdetail: [{ name: 'Pan Card', id: '1' },
      { name: 'Aadhar Card', id: '2' },
      { name: 'Driving License', id: '3' },
      { name: 'Voter ID', id: '4' },
      { name: 'Birth Certificate ', id: '5' },
      { name: 'Transfer', id: '6' },
      { name: 'Matriculation', id: '7' },
      { name: 'Policy Bond', id: '8' },
      { name: 'Orphan Declaration', id: '9' },], id: '2'
    },
    
  ]);
  return (
    <SafeAreaView style={isDarkMode ? styles.newcontainer : styles.container}>
      <FlatList
        numColumns={0}
        data={main}
        renderItem={({ item }) => (
          <View style={isDarkMode ? styles.newviewstyle: styles.viewstyle}>
            <View>
              <Text style={{ textAlign: 'center', fontSize: 24, marginTop: 10, fontWeight:'bold' }} >
                {item.listName}
              </Text>
            </View>
            <View style={styles.divid}>
            </View>
            <View style={styles.details}>
              <FlatList
                numColumns={0}
                keyExtractor={(item) => item.id}
                data={item.listdetail}
                renderItem={({ item }) => (
                  <Text style={{ fontSize: 20, }}>{item.name}</Text>
                )}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#676e75',
  },
  newcontainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'black',
  },
  viewstyle: {
    borderColor: 'white',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,

  },
  newviewstyle: {
    borderColor: 'white',
    width: '100%',
    backgroundColor: '#676e75',
    borderRadius: 20,
    marginBottom: 20,

  },
  divid: {
    height: 3,
    backgroundColor: 'black',
    margin: 3,
  },
  details:
  {
    alignItems: 'center',
  },

});

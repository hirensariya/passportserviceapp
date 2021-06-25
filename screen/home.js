/* eslint-disable prettier/prettier */
import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { useDarkMode } from 'react-native-dark-mode';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

export default function Home({ navigation }) {
  const isDarkMode = useDarkMode();
  const [people, setPeople] = useState([
    {name: 'New Application', id: '1'},
    {name: 'Required Documents', id: '2'},
    {name: 'Fees Calculation', id: '3'},
    {name: 'FAQ', id: '4'},
    {name: 'Contact Us', id: '5'},
  ]);

  const pressHandler = id => {
    // console.log(id)
    var newscreen;

    if (id == 1) {
      newscreen = 'Application';
      navigation.navigate(newscreen);
    } else if (id == 2) {
      newscreen = 'Decoument';
      navigation.navigate(newscreen);
    } else if (id == 3) {
      newscreen = 'Fee';
      navigation.navigate(newscreen);
    } else if (id == 4) {
      newscreen = 'Faq';
      navigation.navigate(newscreen);
    } else if (id == 5) {
      newscreen = 'Constact';
      navigation.navigate(newscreen);
    }
  };

  return (
    <View style={isDarkMode ? styles.newcontainer : styles.container}>
      <FlatList
        style={{marginTop: '20%'}}
        numColumns={0}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={isDarkMode ? styles.newitem : styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    // backgroundColor: '#8a97aa',
    backgroundColor: '#676e75',
  },
  newcontainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    // backgroundColor: '#8a97aa',
    backgroundColor: 'black',
  },
  item: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    marginTop: 30,
    height: 50,
    borderRadius: 20,
    marginVertical: '3%',
    // eslint-disable-next-line no-dupe-keys
    fontSize: 23,
  },
  newitem: {
    flex: 1,
    padding: '2%',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#676e75',
    color: 'black',
    fontSize: 20,
    marginTop: 30,
    height: 50,
    borderRadius: 20,
    marginVertical: '3%',
    // eslint-disable-next-line no-dupe-keys
    fontSize: 23,
  },
});

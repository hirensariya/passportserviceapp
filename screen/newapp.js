/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {useDarkMode} from 'react-native-dark-mode';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Alert,
  View,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Formik} from 'formik';
import * as yup from 'yup';
const reviewSchema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required().min(10).max(10),
  email: yup.string().email('Enter valid email').required('Required'),
});
export default function NewApp({navigation}) {
  const isDarkMode = useDarkMode();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={isDarkMode ? styles.newcontainer : styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
            Please Wait...
          </Text>
        </View>
      </Modal>
      <Formik
        initialValues={{name: '', phone: '', email: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          const unsubscribe = NetInfo.addEventListener(state => {
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
            if (state.isConnected) {
              setModalVisible(true);
              fetch('https://passportservice.in/phone', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  application_name: values.name,
                  application_phone: values.phone,
                  application_email: values.email,
                }),
              })
                .then(responseData => {
                  setModalVisible(false);
                  Alert.alert(
                    'application submitted successfully',
                    'Thank you',
                    [
                      {
                        text: 'OK',
                        onPress: () => {
                          navigation.navigate('Home');
                        },
                      },
                    ],
                  );
                })
                .catch(error => {
                  console.log(error);
                });
            } else {
              Alert.alert('Network is no connected', 'Thank you', [
                {
                  text: 'OK',
                  onPress: () => {
                    // navigation.navigate('Home');
                  },
                },
              ]);
            }
          });
          unsubscribe();
        }}>
        {props => (
          <View>
            <TextInput
              style={isDarkMode ? styles.newtextitem : styles.textitem}
              placeholder="Enter Your Name"
              selectionColor="yellow"
              placeholderTextColor="white"
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
            />
            <Text style={styles.error}>
              {props.touched.name && props.errors.name}
            </Text>
            <TextInput
              style={isDarkMode ? styles.newtextitem : styles.textitem}
              placeholder="Enter Your Phone Number"
              placeholderTextColor="white"
              selectionColor="yellow"
              keyboardType="numeric"
              onChangeText={props.handleChange('phone')}
              onBlur={props.handleBlur('phone')}
              value={props.values.phone}
            />
            <Text style={styles.error}>
              {props.touched.phone && props.errors.phone}
            </Text>
            <TextInput
              style={isDarkMode ? styles.newtextitem : styles.textitem}
              placeholder="Enter Your Email Address"
              selectionColor="yellow"
              placeholderTextColor="white"
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            <Text style={styles.error}>
              {props.touched.email && props.errors.email}
            </Text>
            <TouchableOpacity
              style={isDarkMode ? styles.newbutton : styles.button}
              onPress={props.handleSubmit}>
              <Text style={isDarkMode ? styles.newtext : styles.text}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#676e75',
    padding: 22,
    justifyContent: 'center',
  },
  newcontainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 22,
    justifyContent: 'center',
  },
  textitem: {
    borderColor: 'white',
    borderRadius: 15,
    height: 40,
    marginHorizontal: '5%',
    marginTop: 5,
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
  },
  newtextitem: {
    borderColor: '#676e75',
    borderRadius: 15,
    height: 40,
    marginHorizontal: '5%',
    marginTop: 5,
    borderWidth: 2,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    margin: 12,
    paddingHorizontal: 52,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'white',
  },
  newbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    margin: 12,
    paddingHorizontal: 52,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
  newtext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  error: {
    color: '#00ffff',
    textAlign: 'center',
    fontSize: 15,
  },
  centeredView: {
    marginTop: 200,
    justifyContent: 'center',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: '15%',
    height: '15%',
  },
});

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {useDarkMode} from 'react-native-dark-mode';
import NetInfo from '@react-native-community/netinfo';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Alert,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
const reviewSchema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required().min(10).max(10),
  email: yup.string().email('Enter valid email').required('Required'),
  quary: yup.string().required(),
});
export default function Contact({navigation}) {
  const isDarkMode = useDarkMode();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={isDarkMode ? styles.newcontainer : styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={true}
          // eslint-disable-next-line react/jsx-no-duplicate-props
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
          initialValues={{name: '', phone: '', email: '', quary: ''}}
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
                    quary: values.quary,
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
              <TextInput
                style={isDarkMode ? styles.newtextitem : styles.textitem}
                placeholder="Enter Your quary"
                selectionColor="yellow"
                placeholderTextColor="white"
                onChangeText={props.handleChange('quary')}
                onBlur={props.handleBlur('quary')}
                value={props.values.quary}
              />
              <Text style={styles.error}>
                {props.touched.quary && props.errors.quary}
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
        <View style={isDarkMode ? styles.newcontactview : styles.contactview}>
          <View>
            <Text style={{color: 'white', fontSize: 22, textAlign: 'center'}}>
              Contact Details
            </Text>
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? '#676e75' : 'white',
              height: 2,
            }}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={require('../assets/call(2).png')}
              style={{marginLeft: '15%', marginTop: '2%'}}
            />
            <Text
              style={{
                color: 'white',
                marginLeft: '3%',
                marginTop: '2%',
                fontSize: 18,
              }}>
              8200668096
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={require('../assets/email.png')}
              style={{marginLeft: '15%', marginTop: '2%'}}
            />
            <Text
              style={{
                color: 'white',
                marginLeft: '3%',
                marginTop: '2%',
                fontSize: 18,
              }}>
              Akash_senjaliya@yahoo.com
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={require('../assets/address.png')}
              style={{marginLeft: '15%', marginTop: '2%'}}
            />
            <Text
              style={{
                color: 'white',
                marginLeft: '3%',
                marginTop: '2%',
                fontSize: 18,
              }}>
              Sky Computer
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: 'white', marginLeft: '25%', fontSize: 18}}>
              Kankiya Plot, Near raj bank
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: 'white', marginLeft: '25%', fontSize: 18}}>
              jetpur-360370
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#676e75',
    padding: 22,
    // justifyContent: 'center'
  },
  newcontainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 22,
    // justifyContent: 'center'
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
  contactview: {
    marginTop:'5%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
    borderRadius: 15,
    paddingBottom: '4%',
  },
  newcontactview: {
    marginTop:'5%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#676e75',
    borderRadius: 15,
    paddingBottom: '4%',
  },
});

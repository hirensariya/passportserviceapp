/* eslint-disable prettier/prettier */
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
} from 'react-native';
import { useDarkMode } from 'react-native-dark-mode';
// import newmodal from '../comp/modal';

export default function Fee() {
  const isDarkMode = useDarkMode();
  const [modalVisible, setModalVisible] = useState(false);
  const [secondmodalVisible, setsecondModalVisible] = useState(false);
  const [thirdmodalVisible, setthirdModalVisible] = useState(false);
  const [fourmodalVisible, setfourModalVisible] = useState(false);
  const [age, setage] = useState('1');
  const [defaultStyle, setDefaultStyle] = useState(true);
  const [defaultStyle1, setDefaultStyle1] = useState(true);
  const [defaultStyle2, setDefaultStyle2] = useState(true);
  const [amount, setamount] = useState('Total Amount');
  const [appfor, setappfor] = useState('Select Applying for');
  const [apptype, setapptype] = useState('Select Type of Application');
  const [appbook, setappbook] = useState('Select Type of Passport Booklet');
  const fresh = () => {
    setModalVisible(false);
    setappfor('New/Fresh Passport');
    setDefaultStyle(false);
  };
  const reissue = () => {
    setModalVisible(false);
    setappfor('Reissue Passport');
    setDefaultStyle(false);
  };
  const normal = () => {
    setsecondModalVisible(false);
    setapptype('Normal');
    setDefaultStyle1(false);
  };
  const talkal = () => {
    setsecondModalVisible(false);
    setapptype('Tatkaal');
    setDefaultStyle1(false);
  };
  const thrtysix = () => {
    setthirdModalVisible(false);
    setappbook('36-Page');
    setDefaultStyle2(false);
  };
  const sixtee = () => {
    setthirdModalVisible(false);
    setappbook('60-page');
    setDefaultStyle2(false);
  };

  const amountprice = () => {
    if(apptype=='Select Applying for')
    var a;
    if (apptype == 'Normal' && appbook == '36-Page' && age > 18) {
      a = 'Total Amount is 3500';
      setamount(a);
    } else if (apptype == 'Tatkaal' && appbook == '36-Page' && age > 18) {
      a = 'Total Amount is 4000';
      setamount(a);
    } else if (apptype == 'Normal' && appbook == '60-Page' && age > 18) {
      a = 'Total Amount is 4000';
      setamount(a);
    } else if (apptype == 'Tatkaal' && appbook == '60-Page' && age > 18) {
      a = 'Total Amount is 4500';
      setamount(a);
    } else if (apptype == 'Normal' && appbook == '36-Page' && age < 18) {
      a = 'Total Amount is 3000';
      setamount(a);
    } else if (apptype == 'Tatkaal' && appbook == '36-Page' && age < 18) {
      a = 'Total Amount is 3500';
      setamount(a);
    } else if (apptype == 'Normal' && appbook == '60-Page' && age < 18) {
      a = 'Total Amount is 3500';
      setamount(a);
    } else {
      a = 'Total Amount is 4000';
      setamount(a);
    }
    setfourModalVisible(true);
  };
  return (
    <SafeAreaView style={isDarkMode ? styles.newcontainer : styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={true}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View>
            <TouchableOpacity onPress={fresh}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                New/Fresh Passport
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reissue}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                Reissue Passport
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={secondmodalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setsecondModalVisible(!secondmodalVisible);
        }}>
        <View style={styles.centeredView}>
          <View>
            <TouchableOpacity onPress={normal}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                Normal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={talkal}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                Tatkaal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={thirdmodalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setthirdModalVisible(!thirdmodalVisible);
        }}>
        <View style={styles.centeredView}>
          <View>
            <TouchableOpacity onPress={thrtysix}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                36 Pages
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sixtee}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 25,
                }}>
                60 Pages
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={fourmodalVisible}
        onRequestClose={true}
        onRequestClose={() => {
          setfourModalVisible(!fourmodalVisible);
        }}>
        <View style={styles.newview}>
          <Text style={{textAlign: 'center', color: 'black',fontSize:20}}>
            {amount}
          </Text>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={isDarkMode ? defaultStyle ? styles.newtextStyle : styles.textStyle2 : defaultStyle ? styles.textStyle : styles.textStyle2}>
          {appfor}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setsecondModalVisible(true)}>
        <Text style={isDarkMode ? defaultStyle1 ? styles.newtextStyle : styles.textStyle2 : defaultStyle1 ? styles.textStyle : styles.textStyle2}>
          {apptype}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setthirdModalVisible(true)}>
        <Text style={isDarkMode ? defaultStyle2 ? styles.newtextStyle : styles.textStyle2 : defaultStyle2 ? styles.textStyle : styles.textStyle2}>
          {appbook}
        </Text>
      </TouchableOpacity>

      <TextInput
        style={ isDarkMode ? styles.newtextitem : styles.textitem}
        placeholder="Enter Your Age"
        placeholderTextColor="white"
        keyboardType="numeric"
        onChangeText={text => setage(text)}
      />
      <TouchableOpacity style={styles.button} onPress={amountprice}>
        <Text style={styles.text}>Check Fee</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#676e75',
    paddingTop:'30%',
  },
  newcontainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'black',
    paddingTop:'30%',
  },
  textStyle: {
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    height: 30,
    borderRadius: 20,
    marginBottom: 10,
    color: 'black',
  },
  newtextStyle: {
    width: '100%',
    backgroundColor: '#676e75',
    textAlign: 'center',
    fontSize: 18,
    height: 30,
    borderRadius: 20,
    marginBottom: 10,
    color: 'black',
  },
  textStyle2: {
    width: '100%',
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 18,
    height: 30,
    borderRadius: 20,
    marginBottom: 10,
    color: 'white',
  },
  centeredView: {
    marginTop: 200,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: '15%',
    height: '15%',
  },
  newview: {
    marginTop: 200,
    width: '70%',
    backgroundColor: 'white',
    justifyContent:'center',
    borderRadius: 25,
    marginHorizontal: '15%',
    height: '15%',
  },
  textitem: {
    borderColor: 'white',
    borderRadius: 15,
    height: 40,
    borderWidth: 1,
    color: 'black',
    textAlign: 'center',
  },
  newtextitem: {
    borderColor: 'white',
    borderRadius: 15,
    height: 40,
    borderWidth: 1,
    color: 'black',
    textAlign: 'center',
    borderColor:'#676e75',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 15,
    paddingHorizontal: 52,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'skyblue',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

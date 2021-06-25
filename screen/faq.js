/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { useDarkMode } from 'react-native-dark-mode';
export default function Faq() {
  const isDarkMode = useDarkMode();
  const [people, setPeople] = useState([
    {
      name: 'What is Passport?',
      dis: `A passport is a travel document issued by a country’s government to its citizens that verifies the identity and nationality of the holder for the purpose of international travel.
Passports are small booklets that typically contain the bearer’s name, place of birth, date of birth, the date of issue, date of expiry, passport number, photo and signature.`,
      id: '1',
    },
    {
      name: 'Who qualifies for an Indian passport?',
      dis: 'You can qualify for Indian citizenship by being born in the country, being born elsewhere but with at least one Indian parent, or by being granted citizenship through a naturalization process. If none of these categories apply you will not be classed as an Indian citizen, and will not be entitled to an Indian passport.',
      id: '2',
    },
    {
      name: ' What is Ordinary, Diplomatic or Official Passport?',
      dis: 'All private citizens applies for an ordinary passport however the other two types of passports are for government workers who are being send overseas on official business only.',
      id: '3',
    },
    {
      name: 'What happens if lose my passport?',
      dis: 'Passports are important legal documents and if you lose your passport or suspect it might have been stolen, this has to be reported to the Police. You can then apply to have your passport reissued.',
      id: '4',
    },
    {
      name: 'How many days it will take to get Passport?',
      dis: 'As per Govt. the standard timeline is 30 days from the date of application. ',
      id: '5',
    },
    {
      name: ' What are the documents required for Fresh passport?',
      dis: 'https://www.passportsevaindia.in/documents/',
      id: '6',
    },
    {
      name: 'What are the documents required for Re-Issue Passport?',
      dis: 'https://www.passportsevaindia.in/documents/',
      id: '7',
    },
    {
      name: 'What is Tatkaal Passport?',
      dis: 'This is the service, allowing you to obtain your passport in a shorter time. It costs twice as much as the standard passport service but is a good option for people who require their passport in a hurry.',
      id: '8',
    },
    {
      name: 'What are the documents required for Tatkal passport?',
      dis: 'https://www.passportsevaindia.in/documents/',
      id: '9',
    },
    {
      name: 'How much time it will take to get Tatkaal Passport?',
      dis: 'Tatkaal Passport takes 3-4 working days excluding date of submission and without Police Verification.',
      id: '10',
    },
    {
      name: ' What are the documents required for Lost / Damaged Passport?',
      dis: 'Affidavit with details of how a passport got damaged or was lost (Annexure ‘L’) No Objection Certificate (Annexure ‘M’) / Prior Intimation Letter (Annexure ‘N’) Current address (proof) / Address Proof / Identity Proof Police report (FIR) Semi-literate or literate applicants: Affidavit sworn before a notary stating the place and date of birth (Annexure ‘A’) Photocopy of the first and last pages of old passport (ECR/Non-ECR page), if available (optional) Passport-size photographs',
      id: '11',
    },
    {
      name: ' What happens if you want to Cancel/Reschedule a Visit to Passport Seva Kendra?',
      dis: 'Applicants with confirmed appointments, due to any reason/reasons if you are not able to make the visit on appointment date, you can cancel or reschedule the appointment for 2 times with in that year of first appointment date. ',
      id: '12',
    },
    {
      name: 'What is a PSK?',
      dis: 'PSK – Passport Service Kendra – is the passport office where you can get information about your passport and apply for either a new passport or renewal of an existing passport. There are dozens of different PSK offices across India.  ',
      id: '13',
    },
    {
      name: 'I’m living outside India, do I have to travel back to get my passport',
      dis: 'If you have lost your passport while overseas, or have moved overseas permanently but want to renew an Indian passport, then Indian Embassies, Consulates and High Commissions across the globe can perform the same services as the passport offices in India.',
      id: '14',
    },
    {
      name: 'Are the PSK offices open at the weekend?',
      dis: 'No, the PSK core hours are between 9.30am and 4.30pm, Monday to Friday. They are not open at the weekend, even for urgent issues. Make an appointment online for a time which is most convenient for you.',
      id: '15',
    },
    {
      name: 'How long do I have to book my appointment after filling in the form?',
      dis: 'It’s wise to book your appointment for as soon as you can after filling in your application online. System allows you to select the appointment time which is most suitable, try not to let things slip too long.',
      id: '16',
    },
    {
      name: 'Can I change details on my passport?',
      dis: 'If you’ve changed your name because you’ve got married, or other details on your passport are incorrect, then you can apply to have these corrected.',
      id: '17',
    },
    {
      name: 'What languages are passports issued in?',
      dis: 'Indian passports have two languages on them, English and Hindi. There is no option to choose to have passports issued in other languages.',
      id: '18',
    },
  ]);
  return (
    <SafeAreaView style={isDarkMode ? styles.newcontainer : styles.container}>
      <FlatList
        numColumns={0}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <Collapse style={ isDarkMode ? styles.newCollapse: styles.Collapse}>
            <CollapseHeader style={styles.head}>
              <View>
                <Text style={{textAlign: 'center', fontSize: 22}}>
                  {item.name}
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  height: 3,
                }}
              />
              <View>
                <Text style={{fontSize: 18}}>{item.dis}</Text>
              </View>
            </CollapseBody>
          </Collapse>
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
    justifyContent: 'center',
  },
  Collapse: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    padding:'3%',
  },
  newcontainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  newCollapse: {
    backgroundColor: '#676e75',
    borderRadius: 15,
    marginBottom: 15,
    padding:'3%',
  },
});

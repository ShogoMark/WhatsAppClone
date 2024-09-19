import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import { router, useRouter } from 'expo-router';




export default function SignIn() {
    const [country, setCountry] = useState('Nigeria');
    const [countryCode, setCountryCode] = useState('+234');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [borderWidth, setBorderWidth] = useState(1);
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    async function signInWithPhoneNumber() {
        try {
          const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
          setConfirm(confirmation);
          setIsModalVisible(true); // Show the modal
        } catch (error) {
          console.log('Error sending code:', error);
        }
      }


       // Function to confirm the verification code
  async function confirmCode() {
    try {
      await confirm.confirm(code);
      setIsModalVisible(false); // Close the modal
      // Continue with sign-up process or navigation
    } catch (error) {
      console.log('Invalid code:', error);
    }
  }

    return (
        <View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headText}>Enter your phone number</Text>
                    <View style={styles.iconContainer}>
                        <Entypo name="dots-three-vertical" size={15} color="black" />
                    </View>
                </View>
                <View style={styles.verifyText}>
                    <Text style={styles.text}>
                        WhatsApp will need to verify your phone number. Carrier charges may apply. What's my number?
                    </Text>
                </View>
                <View>
                    <View style={styles.input}>
                        <Picker
                            onFocus={() => setBorderWidth(3)}   // Increase border width on focus
                            onBlur={() => setBorderWidth(1)}    // Reset border width on blur
                            dropdownIconColor={'#0C935A'}
                            selectedValue={country}
                            onValueChange={(country, countryIndex) =>
                            setCountry(country)
                            }>
                            <Picker.Item label="Nigeria" value="Nigeria" />
                            <Picker.Item label="India" value="India" />
                        </Picker>
                    </View>
                    <View style={styles.inputTwoThree}>
                        <TextInput
                            style={[styles.inputTwo, { borderBottomWidth: borderWidth }]}
                            onChangeText={setCountryCode}
                            value={countryCode}
                            keyboardType="numeric"
                            onFocus={() => setBorderWidth(3)}   // Increase border width on focus
                            onBlur={() => setBorderWidth(1)}    // Reset border width on blur
                        />
                        <TextInput
                            style={[styles.inputThree, { borderBottomWidth: borderWidth }]}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Phone Number"
                            keyboardType="numeric"
                            onFocus={() => setBorderWidth(3)}   // Increase border width on focus
                            onBlur={() => setBorderWidth(1)}    // Reset border width on blur
                        />
                        <Button title="Send Code" onPress={signInWithPhoneNumber} />
                    </View>
                    {/* Modal for entering the verification code */}
                    <Modal
                        visible={isModalVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setIsModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter verification code"
                            value={code}
                            onChangeText={setCode}
                            keyboardType="numeric"
                        />
                        <Button title="Confirm Code" onPress={confirmCode} />
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={styles.buttonLong}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        textAlign: 'center'
    },

    input: {
        borderBottomWidth: 1,
        width: 242,
        borderColor: '#0C935A',
        paddingTop: 20,
        fontSize: 18,
        borderRadius: 6,
    },

    inputTwo: {
        borderBottomWidth: 1,
        width: 70,
        borderColor: '#0C935A',
        paddingTop: 20,
        fontSize: 18,
        borderRadius: 6,
    },

    inputThree: {
        borderBottomWidth: 1,
        width: 170,
        borderColor: '#0C935A',
        paddingTop: 20,
        fontSize: 18,
        borderRadius: 6,
    },

    inputTwoThree: {
        flexDirection: 'row'
    },


    content: {
        alignItems: 'center',
        marginTop: 50,
    },

    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0C935A',
        marginLeft: 65,
    },

    verifyText: {
        marginTop: 20,
        width: 260
    },

    iconContainer: {
        marginLeft: 60,
    },

    buttonLong: {
        backgroundColor: "#026D53",
        width: 320,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 120,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

     modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 20,
  },
})
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function UploadImageUsername() {
    const [username, setUsername] = useState('');
    const [image, setImage] = useState();
    const [text, setText] = useState('');

    const maxLength = 16;

    const handleChange = (input) => {
        if (input.length <= maxLength) {
            setText(input);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headText}>Profile info</Text>
                <View style={styles.iconContainer}>
                    <Entypo name="dots-three-vertical" size={15} color="black" />
                </View>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>Please provide your name and an optional profile photo</Text>
            </View>

            <View style={styles.imageContainer}>
                <Feather name="camera" size={50} color="#ddd" />
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputText}>
                    <TextInput 
                        style={styles.input}
                        value={text}
                        onChangeText={handleChange}
                        placeholder="Username"
                        autoFocus={true}
                    />
                    <Text style={styles.charCount}>{maxLength - text.length}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonLong}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
        
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    header: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 50, 
       marginLeft: 100,
    },

    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0C935A',
    },

    iconContainer: {
        marginLeft: 100,
    },

    imageContainer: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#ddd',
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subtitle: {
        alignItems: 'center',
        marginTop: 30,
    },

    subtitleText: {
        width: 280,
        textAlign: 'center'
    },

    input: {
        marginTop: 50,
        width: 300,
        borderBottomWidth: 2,
        borderColor: '#0C935A'
    },

    inputText: {
        flexDirection: 'row',
    },

    inputContainer: {
        alignItems: 'center'
    },
    
    charCount: {
        marginTop: 60,
    },

    buttonContainer: {
        marginTop: 210,
    },

    buttonLong: {
        backgroundColor: '#026D53',
        width: 330,
        padding: 12,
        borderRadius: 20,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
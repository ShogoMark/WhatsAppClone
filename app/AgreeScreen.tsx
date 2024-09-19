import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Agree() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/WhatsApp.png')}/>
            <View style={styles.textContainer}>
                <Text style={styles.textHead}>Welcome to WhatsApp</Text>
                <Text style={styles.textPrivacy}>
                    Read our Privacy Policy. Tap "Agree nd continue" to 
                    accept the Terms of Service
                </Text>
                <View style={styles.button}>
                    <Fontisto name="world-o" size={16} color="#09A060" />
                    <Text style={styles.text}>English</Text>
                    <MaterialCommunityIcons name="chevron-down" size={24} color="#09A060" />
                </View>   
            </View>
            <TouchableOpacity style={styles.buttonLong}>
                <Text style={styles.buttonText}>Agree and continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: 'center',
        flex: 1,
    },

    image: {
        width: 300,
        height: 300,
        marginTop: 70,
    },

    textHead: {
        fontSize: 28,
    },

    textPrivacy: {
        textAlign: 'center',
        marginTop: 17,
        color: 'gray'
    },

    textContainer: {
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 55,
    },

    button: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        width: 120,
        height: 35,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
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

    text: {
        color: "#09A060",
        marginLeft: 10,
        marginRight: 10,
    }
})
import { Text, View, StyleSheet, Image } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import ButtonNext from "@/src/components/buttonNext";
import { useRouter } from 'expo-router';


export default function Landing() {
    const router = useRouter();

    const handlePress = () => {
        router.push('/auth/signIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/WhatsApp.png')}/>
                <View style={styles.imageTextContainer}>
                    <Text style={styles.title}>Welcome to WhatsApp</Text>
                    <Text style={styles.subTitle}>Choose your language to get started</Text>
                </View>
            </View>
            <View style={styles.languageList}>
                <View style={styles.language}>
                    <Fontisto name="radio-btn-active" size={20} color="#22BF99" />
                    <View style={styles.languageItem}>
                        <Text style={styles.subTitle}>English</Text>
                        <Text style={styles.subLanguageText}>(device language)</Text>
                    </View>
                </View>

                <View style={styles.language}>
                    <Fontisto name="radio-btn-passive" size={20} color="gray" />
                    <View style={styles.languageItem}>
                        <Text style={styles.subTitle}>Yoruba</Text>
                        <Text style={styles.subLanguageText}>Yoruba</Text>
                    </View>
                </View>

                <View style={styles.language}>
                    <Fontisto name="radio-btn-passive" size={20} color="gray" />
                    <View style={styles.languageItem}>
                        <Text style={styles.subTitle}>Hausa</Text>
                        <Text style={styles.subLanguageText}>Hausa</Text>
                    </View>
                </View>
            </View>

            <ButtonNext onPress={handlePress} />
        </View>
       
        
    )
}


const styles = StyleSheet.create({
    languageItem: {
        marginLeft: 25,
    },

    languageList: {

    },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    imageContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 70,
    },

    image: {
        width: 300,
        height: 250,
    },

    imageTextContainer: {
        backgroundColor: 'white',
        opacity: 50,
        width: 250,
        height: 120,
        marginTop: -120,
        alignItems: 'center'
    },

    title: {
        fontSize: 26,
        marginBottom: 10,
    },

    subTitle: {
        fontSize: 15,
    },

    language: {
        marginLeft: 25,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },

    subLanguageText: {
        color: 'gray'
    }
})
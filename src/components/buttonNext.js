import Feather from '@expo/vector-icons/Feather';
import { View, StyleSheet, TouchableOpacity } from "react-native";


export default function ButtonNext({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Feather name="arrow-right" size={24} color="#E1E1E1" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#026D53",
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 12,
        marginTop: 80,
    }
})
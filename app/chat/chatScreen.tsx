import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, ImageBackground, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function ChatScreen() {
    const [message, setMessage] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/images/Demola.jpg')} 
                            style={styles.imageOne}
                        />
                    </View>
                    <Text style={styles.headerText}>Demola</Text>
                </View>

                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name="video-outline" size={30} color="black" style={styles.icon} />
                    <MaterialIcons name="call" size={25} color="black" style={styles.icon} />
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </View>
            </View>

            <ImageBackground source={require('../../assets/images/backgrounddd.jpeg')} style={styles.backgroundImage}>
                <View style={styles.chatsContainer}>
                    <View style={styles.chatInnerContainer}>
                        <ScrollView>
                            <View style={styles.chatBox}>
                                <Text>Hello welcome to whatsapp</Text>
                            </View>

                            <View style={styles.chatBox}>
                                <Text>Hello welcome to whatsapp</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.messageInputContainer}>
                            <View style={styles.messageInputLeft}>
                                <Entypo name="emoji-happy" size={20} color="#656565" />
                                <TextInput
                                multiline
                                style={styles.messageInput}
                                onChangeText={setMessage}
                                value={message}
                                placeholder="Message"
                                />
                            </View>
                           
                            <View style={styles.messageInputRight}>
                                <MaterialIcons name="attach-file" size={24} color="#656565" />
                                <Ionicons name="camera-outline" size={24} color="#656565" style={{ marginLeft: 15 }} />
                            </View>
                        </View>
                        <View style={styles.micContainer}>
                            <FontAwesome6 name="microphone" size={20} color="#fff" />
                        </View>
                    </View>
                </View>
            </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize: 19,
        marginLeft: 7,
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 2,
    },

    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },

    imageContainer: {
        width: 40,
        height: 40,
        overflow: 'hidden',
        borderRadius: 20,
        borderColor: 'transparent',
        marginLeft: 3
    },

    imageOne: {
        height: '100%',
        width: '100%' 
    },

    icon: {
        marginRight: 18,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    chatsContainer: {
        paddingHorizontal: 7,
        paddingVertical: 7,
        flex: 1,
        backgroundColor: 'transparent',
    },

    chatInnerContainer: {
        flex: 1,
    },

    chatBox: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 4,
    },

    messageInputContainer: {
        width:  '84%',
        backgroundColor: '#fff',
        height: 'auto',
        paddingHorizontal: 9,
        borderRadius: 20,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 7,
    },

    messageInput: {
        fontSize: 18,
        marginLeft: 10,
        width: 150,
        height: 'auto'
    },

    messageInputRight: {
        flexDirection: 'row',
        marginRight: 7,
    },

    messageInputLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    micContainer: {
        height: 46,
        width: 46,
        borderRadius: 23,
        backgroundColor: '#4ECB71',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainer: {
        flexDirection: 'row',
    }
})

import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, FlatList } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from "react-native";




export default function ChatList() {
    const [chatList, setChatList] = useState();


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WhatsApp</Text>
                <View style={styles.headerRight}>
                    <Feather style={styles.iconSpace} name="camera" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={15} color="black" />
                </View>
            </View>
            <View style={styles.motherContainer}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.searchBar}>
                        <Image source={require('../../assets/images/download-removebg-preview.png')}
                                style={styles.image}
                        />
                        <TextInput 
                            placeholder="Ask Meta AI or Search"
                        />
                    </View>
                    <View style={styles.allMessages}>
                        <View style={styles.allActive}>
                            <Text style={styles.allTextActive}>All</Text>
                        </View>
                        <View style={styles.allInactive}>
                            <Text style={styles.allTextInactive}>Unread</Text>
                        </View>
                        <View style={styles.allInactive}>
                            <Text style={styles.allTextInactive}>Favorites</Text>
                        </View>
                        <View style={styles.allInactive}>
                            <Text style={styles.allTextInactive}>Groups</Text>
                        </View>
                    </View>
                    <View style={styles.chatListContainer}>
                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chatItem}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                            <View>
                                <Text style={styles.username}>Username</Text>
                                <Text style={styles.recentMessage}>recentMessage</Text>
                            </View>

                            <View style={styles.chatItemRight}>
                                <Text style={styles.messageTime}>17:00</Text>
                                <View style={styles.messageNotificationCount}>
                                    <Text style={styles.messageCount}>2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.footIcons}>
                    <MaterialIcons name="chat-bubble-outline" size={24} color="black" />
                    <Text style={styles.description}>Chats</Text>
                </View>

                <View style={styles.footIcons}>
                    <MaterialIcons name="wifi-tethering" size={24} color="black" />
                    <Text>Updates</Text>
                </View>

                <View style={styles.footIcons}>
                    <Ionicons name="people-outline" size={24} color="black" />
                    <Text>Communities</Text>
                </View>

                <View style={styles.footIcons}>
                    <Ionicons name="call-outline" size={24} color="black" />
                    <Text>Calls</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 25,
        width: '100%',
        height: 60,
        backgroundColor: 'white',
    },

    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },

    headerText: {
        fontSize: 30,
        marginLeft: 15,
        fontWeight: 'bold',
        color: '#4ECB71',
    },

    iconSpace: {
        marginRight: 30,
    },

    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: 330,
        borderRadius: 30,
        alignSelf: 'center',
        padding: 7,
    },

    image: {
        width: 35,
        height: 35,
    },

    imageOne: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },

    allMessages: {
        marginTop: 13,
        flexDirection: 'row',
        marginLeft: 15,
    },

    allActive: {
        backgroundColor: '#BDFBBB',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: 10,
        borderRadius: 15,
        marginRight: 5,
    },

    allInactive: {
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: 10,
        borderRadius: 15,
        marginRight: 5,
    },

    allTextActive: {
        color: '#058402',
    },

    allTextInactive: {
        color: '#686868',
    },

    imageContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: 'transparent',
        borderWidth: 1,
        marginLeft: 10,
        overflow: 'hidden',
        marginRight: 10,
    },

    chatListContainer: {
        marginTop: 25,
    },

    chatItem: {
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },

    username: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    recentMessage: {
        color: '#686868',
        marginTop: 4,
    },

    messageNotificationCount: {
        width: 20,
        height: 20,
        backgroundColor: '#089147',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
    },

    messageCount: {
        color: 'white',

    },

    chatItemRight: {
        marginLeft: 160,
        marginTop: 4,
        alignItems: 'center'
    },

    messageTime: {
        color: '#089147'
    },

    footer: {
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    description: {
        fontWeight: 'bold',
    },

    footIcons: {
        alignItems: 'center'
    },

    motherContainer: {
        flex: 1,
    },

    scrollview: {
        paddingVertical: 6,
    }
})
import { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




export default function CallList() {
    const [callList, setCallList] = useState();
   


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Calls</Text>
                <View style={styles.headerRight}>
                    <Feather style={styles.iconSpace} name="camera" size={24} color="black" />
                    <MaterialIcons style={styles.iconSpace} name="search" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={15} color="black" />
                </View>
            </View>
            <View style={styles.motherContainer}>
                <View style={styles.staticOne}>
                    <MaterialIcons name="add-call" size={24} color="#fff" />
                </View>

                <ScrollView style={styles.scrollview}>
                   <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Favorites</Text>
                   </View>

                    <View style={styles.chatItem}>

                        <View style={styles.imageContainer}>
                            <FontAwesome name="heart" size={18} color="#fff" />
                        </View>
                    
                        <View style={styles.mystatus}>
                            <Text style={styles.status}>Add favorite</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.recentUpdate}>
                            <Text style={styles.recentUpdateText}>Recent</Text>
                        </View>
                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/Demola.jpg')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>ShogoMark</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-bottom-left" size={15} color="red" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/img.jpeg')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>Sweetness</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-top-right" size={15} color="#0BA954" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/shogo.png')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>Sweetness</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-top-right" size={15} color="#0BA954" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/Demola.jpg')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>Sweetness</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-bottom-left" size={15} color="red" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/Demola.jpg')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>Sweetness</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-bottom-left" size={15} color="red" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.userCall}>
                               <Image source={require('../assets/images/Demola.jpg')}
                                    style={styles.imageOne}
                               /> 
                            </View>

                            <View style={styles.callerInfo}>
                                <Text style={styles.callerName}>Sweetness</Text>
                                <View style={styles.callTime}>
                                    <MaterialCommunityIcons name="arrow-bottom-left" size={15} color="red" />
                                    <Text style={styles.callTimeText}>Today, 02:12</Text>
                                </View>
                            </View>

                            <View style={styles.callerRight}>
                                <MaterialIcons name="call" size={24} color="black" />
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
        fontSize: 24,
        marginLeft: 15,
    },

    iconSpace: {
        marginRight: 30,
    },

    imageOne: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },

    statusContainer: {
        marginLeft: 25,
        marginTop: 20
    },

    statusText: {
        fontSize: 19,
        fontWeight: 'bold',
    },

   


    imageContainer: {
        width: 43,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        backgroundColor: '#0BA954'
    },

    chatListContainer: {
        marginTop: 25,
    },

    chatItem: {
        marginBottom: 25,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },

    status: {
        fontSize: 18,
    },

    recentMessage: {
        color: '#686868',
        marginTop: 4,
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
        paddingBottom: 10,
    },

    mystatus: {
        marginLeft: 20,
    },

    statusImg:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
    },

    recentUpdate: {
        marginLeft: 15,
        marginBottom: 24,
    },

    recentUpdateText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    staticOne: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0BA954',
        height: 52,
        width: 55,
        position: 'absolute',
        right: 15,
        bottom: 90,
        borderRadius: 13,
        zIndex: 20,
    },

    staticTwo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 38,
        width: 38,
        position: 'absolute',
        right: 22,
        bottom: 160,
        borderRadius: 12,
        elevation: 3,
    },

    userCall: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden'
    },

    callTime: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    callTimeText: {
        color: '#686868',
        marginLeft: 5,
    },

    callerName: {
        fontSize: 18,
    },

    callerInfo: {
        marginLeft: 10,
    },

    callerRight: {
        marginLeft: 150,
    }
})
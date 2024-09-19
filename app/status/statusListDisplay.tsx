import { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




export default function StatusList() {
    const [statusList, setStatusList] = useState();
    const [isExpanded, setIsExpanded] = useState(false);


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Updates</Text>
                <View style={styles.headerRight}>
                    <Feather style={styles.iconSpace} name="camera" size={24} color="black" />
                    <MaterialIcons style={styles.iconSpace} name="search" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={15} color="black" />
                </View>
            </View>
            <View style={styles.motherContainer}>
                <View style={styles.staticOne}>
                    <Fontisto name="camera" size={18} color="#fff" />
                </View>

                <View style={styles.staticTwo}>
                    <MaterialCommunityIcons name="pencil" size={24} color="black" />
                </View>

                <ScrollView style={styles.scrollview}>
                   <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Status</Text>
                   </View>

                    <View style={styles.chatItem}>
                        <View style={styles.containerImg}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/img.jpeg')}
                                style={styles.imageOne}/>
                            </View>
                        </View>
                        
                        <View style={styles.mystatus}>
                            <Text style={styles.status}>My status</Text>
                            <Text style={styles.recentMessage}>08:54</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.recentUpdate}>
                            <Text style={styles.recentUpdateText}>Recent update</Text>
                        </View>
                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
                            </View>
                        </View>

                        <View style={styles.statusImg}>
                            <View style={styles.containerImg}>
                                <View style={styles.imageContainer}>
                                    <Image source={require('../../assets/images/img.jpeg')}
                                    style={styles.imageOne}/>
                                </View>
                            </View>
                            
                            <View style={styles.mystatus}>
                                <Text style={styles.status}>My status</Text>
                                <Text style={styles.recentMessage}>08:54</Text>
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

   
    image: {
        width: 35,
        height: 35,
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
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: 'transparent',
        borderWidth: 1, 
        overflow: 'hidden',
    },

    chatListContainer: {
        marginTop: 25,
    },

    chatItem: {
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },

    status: {
        fontSize: 18,
        fontWeight: 'bold'
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

    containerImg: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: '#4ECB71',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },

    mystatus: {
        marginLeft: 10,
    },

    statusImg:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    recentUpdate: {
        marginLeft: 15,
        marginBottom: 10
    },

    recentUpdateText: {
        color: '#686868'
    },

    staticOne: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4ECB71',
        height: 52,
        width: 55,
        position: 'absolute',
        right: 15,
        bottom: 90,
        borderRadius: 13
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
    }
})
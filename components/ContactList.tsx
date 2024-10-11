import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const Contacts = [
        {
            uid: 1,
            name: "Saddam Ahmed",
            status: 'Software Developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/126758805?s=96&v=4',
        },
        {
            uid: 2,
            name: "Muhammad Toussef",
            status: 'Data Analyst',
            imageUrl: 'https://avatars.githubusercontent.com/u/126146773?v=4',
        },
        {
            uid: 3,
            name: "Zia-ur-rehman",
            status: 'AI Researcher',
            imageUrl: 'https://avatars.githubusercontent.com/u/77435711?v=4',
        },
        {
            uid: 4,
            name: "Muhammad Talha",
            status: 'Python Developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/123146390?v=4',
        }];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {Contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{
                            uri: imageUrl
                        }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        paddingHorizontal: 16,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:10,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10
    },
    userImage: {
        marginRight:14,
        height: 60,
        width: 60,
        borderRadius: 60 / 2
    },
    userName: {
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    },
    userStatus: {
        fontSize:14,
    }
})
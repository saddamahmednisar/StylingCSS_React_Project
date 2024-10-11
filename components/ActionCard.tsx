import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog-card</Text>

            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,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'
                    }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyContainerText}>
                        JavaScript got better at finding patterns in text. There's a new setting for searching more efficiently and new ways to learn about the text you're working with. This means you can find exactly what you're looking for in a big chunk of text, easier than before.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.opacity}
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                    >
                        <Text style={styles.footerContainerText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: 'bold',
        color: 'white',
        marginTop:10
    },
    card: {
        height: 335,
        width: 400,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    elevatedCard: {
        backgroundColor: '#e74c3c',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },

    },
    headingContainer: {
        height: 20,
        marginHorizontal: 16,
        alignItems: 'center',
        marginTop:2

    },
    headerText: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 16,
    },
    cardImage: {
        height: 180,
        marginTop:8,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    bodyContainer: {
        paddingHorizontal: 10,

        marginBottom: 6
    },
    bodyContainerText: {
        color: 'black',
        fontSize: 16,
    },
    footerContainer: {
        paddingHorizontal: 10,
        width: 110,
        marginTop: 10,

    },
    opacity: {
        height: 30,
        backgroundColor: "#ffbe76",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerContainerText: {

        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
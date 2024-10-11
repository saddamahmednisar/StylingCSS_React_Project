import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated-Cards</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated1]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated2]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card , styles.cardElevated3]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card , styles.cardElevated4]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated5]}>
            <Text>more..</Text>
        </View>
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
    container:{
         padding: 8
    },
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 6,
        margin: 8
    },
    cardElevated:{
        backgroundColor: '#00a8ff',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardElevated1:{
        backgroundColor: '#ED4C67',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardElevated2:{
        backgroundColor: '#9c88ff',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardElevated3:{
        backgroundColor: '#4cd137',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardElevated4:{
        backgroundColor: '#e84118',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    },
    cardElevated5:{
        backgroundColor: '#00a8ff',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    }
})
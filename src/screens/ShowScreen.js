import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)

    const post = state.find((post) => post.id === navigation.getParam('id'))

    return (
        <View style={styles.row}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <Feather name="edit" size={30} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 25,
    },
    content: {
        fontSize: 18,
    }
})

export default ShowScreen

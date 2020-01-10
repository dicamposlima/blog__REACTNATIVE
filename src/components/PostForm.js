import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const PostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View style={styles.row}>
            <Text style={styles.title}>Enter Title: </Text>
            <TextInput value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input} />
            <Text style={styles.title}>Enter Content: </Text>
            <TextInput value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input} />
            <Button title="Save"
                onPress={() => onSubmit(title, content)} />
        </View>
    )
}

PostForm.defaultProps = {
    initialValues: { title: '', content: '' }
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
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        margin: 5

    }
})

export default PostForm

import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import PostForm from '../components/PostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editPost } = useContext(Context)
    const post = state.find((post) => post.id === id)
    return <PostForm initialValues={{ title: post.title, content: post.content }}
        onSubmit={(title, content) => {
            editPost(id, title, content, () => {
                navigation.pop()
            })
        }} />
}

const styles = StyleSheet.create({})

export default EditScreen

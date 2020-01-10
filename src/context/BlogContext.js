import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_post':
            return action.payload
        case 'add_post':
            return [...state,
            {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'edit_post':
            return state.map((post) => {
                return (post.id === action.payload.id) ? action.payload : post
            })
        case 'delete_post':
            return state.filter((post) => action.payload !== post.id)
        default:
            return state
    }
}

const getPost = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_post', payload: response.data })
    }
}

const addPost = (dispatch) => {
    return async (title, content, cb) => {
        await jsonServer.post('/blogposts', { title, content })
        dispatch({ type: 'add_post', payload: { title, content } })
        if (cb) {
            cb()
        }
    }
}

const editPost = (dispatch) => {
    return async (id, title, content, cb) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_post', payload: { id, title, content } })
        if (cb) {
            cb()
        }
    }
}

const deletePost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_post', payload: id })
    }
}

export const { Context, Provider } = createDataContext(blogReducer,
    { getPost, addPost, editPost, deletePost },
    [])
import axios from 'axios'

const base_url = 'https://5f2266fd0e9f660016d880f6.mockapi.io'

export const getPosts = () => axios.get(`${base_url}/posts`)
export const createPost = (data) => axios.post(`${base_url}/posts`, data)
export const getPost = (id) => axios.get(`${base_url}/posts/${id}`)
export const deletePost = (id) => axios.delete(`${base_url}/posts/${id}`)

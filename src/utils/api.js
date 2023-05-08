import axios from 'axios'
import { constants } from './constats'

async function getFeeds() {
    const response = await axios.get(`${constants.apiUrl}/api/feeds`)
    return response.data.data
}

async function getPhotos(pageNumber) {
    const response = await axios.get(`${constants.apiUrl}/api/photos?page=${pageNumber}`)
    return response.data.data
}

async function getDetail(photoId) {
    const response = await axios.get(`${constants.apiUrl}/api/photos/${photoId}`)
    return response.data.data
}

async function getSearch(query, pageNumber) {
    const response = await axios.get(`${constants.apiUrl}/api/search?tags=${query}&page=${pageNumber}`)
    return response.data.data
}

export { getFeeds, getPhotos, getDetail, getSearch }

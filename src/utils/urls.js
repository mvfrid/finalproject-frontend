export const API_KEY = process.env.REACT_APP_API_KEY
export const PLACES_URL = process.env.REACT_APP_PLACES_URL
export const MONGO_API_URL = process.env.REACT_APP_MONGO_API_URL

export const API_URL = (slug) => `${MONGO_API_URL}/${slug}`

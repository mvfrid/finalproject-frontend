export const API_KEY = process.env.REACT_APP_API_KEY
export const PLACES_URL = process.env.REACT_APP_GOOGLE_PLACES_API_URL
export const MONGO_URL = process.env.REACT_APP_MONGO_URL

export const MONGO_DB_URL = (slug) => `${MONGO_URL}/${slug}`

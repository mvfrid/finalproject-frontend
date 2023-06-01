export const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL = process.env.REACT_APP_BASE_URL

export const API_URL = (slug) => `${BASE_URL}/${slug}`

const devBaseURL = 'https://httpbin.org'
const proBaseURL = 'http://production.org'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 500
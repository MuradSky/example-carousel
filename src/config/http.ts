import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND ?? '/'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://66f969d5.ngrok.io'
})

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


export default instance;
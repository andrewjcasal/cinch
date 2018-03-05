import axios from 'axios'

const instance = axios.create({
  url: 'http://localhost:3000',
  crossdomain: true,
  headers: '*'
})


export default instance;
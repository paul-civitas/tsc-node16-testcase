import axios from 'axios'

const response = await axios.get('https://ifconfig.me')
console.log(response.data)

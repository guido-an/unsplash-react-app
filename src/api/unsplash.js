import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lPabBoF-3b6DCwvXrwUp9Sbf84qjCBmaq1HnmmpF0_8'
      }
})


import axios from 'axios'

export const callApi = async ({endpoint, method, headers, params, data}) => {
    const baseUrl = 'https://restcountries.com/v3.1/all'
    const option = {
        baseUrl,
        url: endpoint,
        method,
        headers,
        params,
        data
    }

    const response = await axios(option)
    return response.data
}

export const searchCountry = async (q) => {
    const resultCountry = await axios.get(`https://restcountries.com/v3.1/name/${q}`)
    return resultCountry.data
}

export const filterCountry = async (e) => {
    const filterCountries = await axios.get(`https://restcountries.com/v3.1/region/${e}`)
    return filterCountries.data
}


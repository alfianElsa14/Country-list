import React from 'react'
import style from '../style/style.module.scss'
import Navbar from './Navbar'
import Card from './Card'
import { callApi, filterCountry, searchCountry } from '../domain/api'
import { useState, useEffect } from 'react'


function Home() {
    const [countries, setCountries] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await callApi({ endpoint: 'https://restcountries.com/v3.1/all', method: 'GET' })
                setCountries(response);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    const search = async (q) => {
        const query = await searchCountry(q)
        setCountries(query)
    }

    const filter = async (e) => {
        const query = await filterCountry(e)
        setCountries(query)
    }


    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.header}>
                <input type="search" placeholder="Cari..." id="searchInput"
                    onChange={({ target }) => search(target.value)}
                />
                <select id="regionSelect" onChange={({ target }) => filter(target.value)}>
                    <option value="" disabled selected>Filter Region</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <Card countries={countries} />
        </div>
    )
}

export default Home
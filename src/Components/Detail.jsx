import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail() {
    const [detailCount, setDetailCount] = useState()
    const { id } = useParams()
    const lower = id.toLowerCase()

    useEffect(() => {
        async function fetchDataByName() {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${lower}`);
                setDetailCount(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchDataByName();
    }, [lower]);

    const combinedLanguages = detailCount?.languages ? Object.values(detailCount.languages): '';
    const combineNative = detailCount?.name?.nativeName ? Object.values(detailCount?.name?.nativeName): '';
    const combineCurencies = detailCount?.currencies ? Object.values(detailCount?.currencies): '';

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.detail}>
                <img src={detailCount?.flags.png} alt="" />
                <div className={style.cardDetail}>
                    {


                        detailCount && (
                            <>
                                <h1>{detailCount?.name?.common}</h1>
                                <div className={style.paraph}>
                                    <div className={style.paraph1}>
                                        <p>Native Name: <strong>{combineNative[0].official}</strong></p>
                                        <p>Population: <strong>{detailCount?.population}</strong></p>
                                        <p>Region: <strong>{detailCount?.region}</strong></p>
                                        <p>Sub Region: <strong>{detailCount?.subregion}</strong></p>
                                        <p>Capital: <strong>{detailCount?.capital}</strong></p>
                                    </div>
                                    <div className={style.paraph2}>
                                        <p>Top Level Domain: <strong>{detailCount?.tld[0]}</strong></p>
                                        <p>Currencies: <strong>{combineCurencies[0].name}</strong></p>
                                        <p>Languages: <strong>{combinedLanguages}</strong></p>
                                    </div>

                                </div>
                            </>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default Detail
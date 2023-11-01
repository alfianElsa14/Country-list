import style from '../style/style.module.scss'
import { callApi } from '../domain/api'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Card({ countries }) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = async (country) => {
        try {
            const response = await axios.post('http://localhost:3000/posts', {
                name: country.name?.common,
                population: country.population,
                region: country.region,
                capital: country.capital,
                flags: country.flags?.png,
            });
            setFavorites((prevFavorites) => [...prevFavorites, country]);
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    return (
        <div className={style.content}>
            {
                countries?.map((el) => (
                    <div className={style.card}>
                        <img src={el.flags?.png} className={style.cardImgTop} alt="Image Alt Text" />
                        <div className={style.cardBody}>
                            <h5 className={style.cardTitle}>{el.name?.common}</h5>
                            <p className={style.cardText}>population: {el.population}</p>
                            <p className={style.cardText}>region: {el.region}</p>
                            <p className={style.cardText}>capital: {el.capital}</p>
                            <div className={style.move}>
                                <Link to={`/${el.name?.common.toLowerCase()}`}>
                                    <a href="#" class="btn">Detail</a>
                                </Link>
                                <div>
                                    <button type='submit'
                                        class="btn"
                                        onClick={() => addToFavorites(el)}
                                    >
                                        add to Favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
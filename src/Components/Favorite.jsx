import React from 'react'
import Navbar from './Navbar'
import style from '../style/style.module.scss'
import Card from './Card'

function Favorite() {
    return (
        <div className={style.container}>
            <Navbar />
            <h1>Card</h1>
        </div>
    )
}

export default Favorite
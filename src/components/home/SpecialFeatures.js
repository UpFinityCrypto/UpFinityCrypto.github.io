import React from 'react'
import classes from './SpecialFeatures.module.css'
import CoinMarketCap from './CoinMarketCap'
import '../../generalStylesheet.css'



function SpecialFeatures() {
    return (
        <div className={classes.specialFeatures}>
            <h1>Special Features</h1>
            <p>30+ unique features and utilities in a SINGLE token</p>

            <div className={classes.coinmarketcap}>

                <CoinMarketCap />

            </div>
            <button className={classes.learnMoreBtn}>LEARN MORE</button>
        </div>
    )
}

export default SpecialFeatures

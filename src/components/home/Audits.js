import React from 'react';
import classes from './Audits.module.css'
import DessertFinance from '../../assets/images/dessertFinance-resized.png'
import Bitrise from '../../assets/images/Bitrise=resized.png'
import Coinbase from '../../assets/images/coinbase-Logo.png'
import Coinmarketcap from '../../assets/images/coinmarketcap-white.png'
import Coingeko from '../../assets/images/coingecko-white.png'
import Dext from '../../assets/images/dext-white.png'
import Boggedfinance from '../../assets/images/boggedFinance-white.png'

function Audits() {
    return (
        <div className={classes.container}>
            <div className={classes.audits}>
                <h1>AUDITS</h1>
                <p>AUDITED WITH 0 ISSUE BY:</p>
                <div className={classes.auditImages}>
                    <img src={DessertFinance} alt="dessertfinance"></img>
                    <img src={Bitrise} alt="bitrise"></img>
                </div>
            </div>

            <div className={classes.listings}>
                <h1>LISTINGS</h1>
                <div className={classes.listingsImages}>

                    <img src={Coinbase} alt="coinbase"></img>
                    <img src={Coinmarketcap} alt="marketcap"></img>
                    <img src={Coingeko} alt="coingeko"></img>
                    <img src={Dext} alt="dext"></img>
                    <img src={Boggedfinance} alt="boggedFinance"></img>
                </div>
            </div>
        </div>

    )
}

export default Audits

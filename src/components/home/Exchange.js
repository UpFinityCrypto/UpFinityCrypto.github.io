import React from 'react';
import classes from './Exchange.module.css'
import logoBnb from '../../assets/images/binance-logo.png'
import logoUpf from "../../assets/images/UPFLOGO.png"
import OnramperWidget from "../home/OnramperWidget"

export default function Exchange() {
    const [value, setValue] = React.useState('');


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.exchanges}>
            <div id="Exchange" className={classes.exchange}>
                <h1>EXCHANGE</h1>
                <p>BUY tokens easily / instantly
                    (Sell part soon)</p>
                <p>BUY STATUS: <span id="buyStatus"></span></p>
                <div className={classes.calculator}>
                    <div className={classes.inputContainer}>

                        <input id="exchangeInput" value={value} type="text" inputMode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" minLength="1" placeholder="from BNB" onChange={handleChange}></input>
                        <img src={logoBnb} alt="logo" className={classes.logo} />

                    </div>

                    <div className={classes.inputContainer}>

                        <input id="exchangeOutput" placeholder="to UPF"></input>
                        <img src={logoUpf} alt="logo" className={classes.logo} />

                    </div>
                    <div className={classes.walletButtons}>
                        <button className={classes.buyBtn} onClick={window.fbuyUPF}>BUY</button>
                    </div>

                </div>
            </div>

            <div className={classes.fiat}>
                <h2>FIAT (Soon!)</h2>
                {/*<OnramperWidget />*/}


            </div>
        </div >

    );
}




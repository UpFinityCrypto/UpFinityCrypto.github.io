import React from 'react'
import classes from '../../components/home/Intro/IntroNew.module.css'

// import { BsTelegram, BsTwitter, BsGithub } from 'react-icons/bs';
import Dext from "../../assets/images/dext-icon.ico";
import Pancake from "../../assets/images/pancake-blue-icon.ico";
import PooCoin from '../../assets/images/poocoin-icon.png'


function Icons() {
    return (

        <div className={classes.icons}>
            <span>FIND US ON</span>
            <img src={Dext} alt="trades" />
            <img src={Pancake} alt="trades" />
            <img src={PooCoin} alt="trades" />
        </div>


    )
}

export default Icons

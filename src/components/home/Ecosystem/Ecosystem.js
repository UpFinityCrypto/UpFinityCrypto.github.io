import React, { useState } from 'react';
import classes from './Ecosystem.module.css'
import "../../../generalStylesheet.css"
import token from '../../../assets/images/UPFLOGO.png'
import nft from '../../../assets/images/NFTs.png'
import coinVote from '../../../assets/images/Coin_Vote.png'
import staking from '../../../assets/images/Staking.png'
import marketplace from '../../../assets/images/Marketplace.png'
import p2e from '../../../assets/images/P2E_Game.png'
import mysterybox from '../../../assets/images/Mystery_Box.png'
import nftfarming from '../../../assets/images/NFT_Farming.png'
import swap from '../../../assets/images/Swap.png'
import safu from '../../../assets/images/Safu_Checker.png'
import merchandise from '../../../assets/images/merchandise.png'


function Ecosystem() {
    // const [show, setShow] = useState(false);

    // const handleClick = () => {
    //     setShow(true);
    // }

    // const renderDiv = () => {
    //     if (show) {
    //         return (
    //             <p>30+ FEATURES AND UTILITIES IN A SINGLE TOKEN</p>
    //         )
    //     }
    // }




    return (
        <div className={classes.ecosystem}>

            <div className={classes.innerEcosystem}>
                <div className={classes.ecosystemTop}>
                    {/* <img src={ecosystem} alt="ecosystem" /> */}
                    <h1>ECOSYSTEM</h1>
                </div>
                <p>ACTUAL USECASE OF UPFINITY</p>

                <div className={classes.itemsContainer}>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={token} alt="token" /> </button>
                        <h3>TOKEN</h3>
                        <p>30+ FEATURES AND UTILITIES IN A SINGLE TOKEN</p>
                        <p>$UPF (Upfinity) is the multi-feature governance token of "The Upfinity" ecosystem.</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>     <img src={nft} alt="nft" /> </button>
                        <h3>NFT</h3>
                        <p>GET TAX REDUCTION BY NFT</p>
                        <p>Amazing NFTs created by our professional Artist. They come in different rarities and with special perks to the holder.</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>   <img src={coinVote} alt="coinVote" /> </button>
                        <h3>COIN VOTE</h3>
                        <p>CHECK WHAT IS REALLY FAMOUS</p>
                        <p>We bringing a revolution to current coin voting websites.Very excited to talk about our one of a kind community driven Coin Leaderboard where only authenticated wallets will be able to vote.Making it a lot harder for bots or macros to participate. The best part is that whenever a coin wins, our reward tokens go to that coin and at the same time spread to UPF holders giving the winning token and UPF holders a massive boost!</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>   <img src={staking} alt="staking" /> </button>
                        <h3>STAKING</h3>
                        <p>N/a </p>
                        <p>Stake your UPF to get much more rewards!</p>
                    </div>

                </div>
                <div className={classes.itemsContainer}>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={marketplace} alt="marketplace" /> </button>
                        <h3>MARKETPLACE</h3>
                        <p>N/a</p>
                        <p>UpFinity marketplace will be the place to trade all your NFTs. It will reward UPF holders with a percentage of the tx fee!</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={p2e} alt="p2e" /> </button>
                        <h3>P2E GAME</h3>
                        <p>N/a</p>
                        <p>Enjoy gaming? Want to turn your skills into money? Coming soon, a fun easy to play, yet challenging game on our platform, where you can earn UPF based on your score and play time. So get ready to PLAY TO WIN!</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={mysterybox} alt="mysterybox" /> </button>
                        <h3>MYSTERY BOX</h3>
                        <p>N/a</p>
                        <p>Available to be purchased with $UPF. Mystery Boxes will happen in seasons and give you a chance to win very rare NFTs that will come with unique features. So look out for this and try your luck, you might be the next owner of an Emerald NFT!</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={nftfarming} alt="nftfarming" /> </button>
                        <h3>NFT FARMING</h3>
                        <p>N/a</p>
                        <p>N/a</p>
                    </div>
                </div>
                <div className={classes.itemsContainerLast}>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={swap} alt="swap" /> </button>
                        <h3>SWAP</h3>
                        <p>N/a</p>
                        <p>N/a</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={safu} alt="safu" /> </button>
                        <h3>SAFU CHECKER</h3>
                        <p>N/a</p>
                        <p>N/a</p>
                    </div>
                    <div className={classes.items}>
                        <button className={classes.ecosystemBtn}>  <img src={merchandise} alt="merchandise" /> </button>
                        <h3>MERCHANDISE</h3>
                        <p>N/a</p>
                        <p>N/a</p>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default Ecosystem

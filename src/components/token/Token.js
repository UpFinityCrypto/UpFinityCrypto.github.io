import React from 'react'
// import { useNavigate } from 'react-router-dom';
import '../../generalStylesheet.css'
import './Token.css'

import Ecosystem from '../../assets/images/Ecosystem.png'
import nft from '../../assets/images/NFTs.png'
import staking from '../../assets/images/Staking.png'
import marketplace from '../../assets/images/Marketplace.png'
import p2e from '../../assets/images/P2E_Game.png'
import mysterybox from '../../assets/images/Mystery_Box.png'
import nftfarming from '../../assets/images/NFT_Farming.png'




function Token() {
    // let navigate = useNavigate()

    return (
        <div className="token">
            <div className="tokenWrapper">

                <div className='circle-container'>

                    <div href="#" className='center'>
                        <div className='innerCenter'>
                        </div>
                        <div className='content'>
                            <h1>TOKEN</h1>
                            <p>Copy
                                Here comes not only a Token explanation, but it’s supposed to have all explanation for all the other things, such as NFTs, Mystery Boxes, P2E game, Marketplace and NFT Farming, depending on which circle/image the user will click.</p>
                            <button className='buyBtn'>BUY NOW</button>
                        </div>
                    </div>


                    <div href='#' className='deg0'>
                        <p>MYSTERYBOX</p>
                        <img src={mysterybox} alt="mysterybox" />

                    </div>

                    <div href='#' className='deg45'>
                        <p>NFTs</p>
                        <img src={nft} alt="nft" />

                    </div>
                    <div href='#' className='deg135'>
                        <p>NFT FARMING</p>
                        <img src={nftfarming} alt="nftfarming" />

                    </div>
                    <div href='#' class='deg180'>
                        <p>P2E</p>
                        <img src={p2e} alt="pe2" />

                    </div>
                    <div href='#' className='deg225'>
                        <p>MARKETPLACE</p>
                        <img src={marketplace} alt="marketplace" />

                    </div>

                    <div href='#' className='deg315'>
                        <p>UPF</p>
                        <img src={staking} alt="staking" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Token


  // let navigate = useNavigate()

//  /* TOKEN
//             <button onClick={() => {
//                 navigate("./home")
//             }}>BACK TO HOME</button> */
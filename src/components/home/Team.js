import React from 'react'
import classes from './Team.module.css'

import lab from '../../assets/team/labs_cropped.png'
import angel from '../../assets/team/Angel.png'
import isa from '../../assets/team/isa_cropped.png'
import zag from '../../assets/team/zagfinity.png'
import kami from '../../assets/team/Kami_cropped.png'
import felippi from '../../assets/team/felippi_cropped.png'
import milton from '../../assets/team/milton_cropped.png'
import { MdOutlineLocationOn } from "react-icons/md"

function Team() {
    return (
        <div className={classes.team}>
            <div className={classes.teamContainer} >
                <h1>MEET THE TEAM</h1>
                <div className={classes.teamProfiles}>

                    <div className={classes.profile}>
                        <img src={lab} alt="pfp"></img>
                        <h6>ALLCOINLAB </h6>
                        <h6>LEAD DEV / Founder</h6>
                        <span> <MdOutlineLocationOn /> Seoul, South Korea</span>

                        <p>This shy owner is the mastermind developer behind all UpFinity's infrastructure. Whatever crazy idea you can think of, LAB will make it happen, like a magic. It is rumored he doesn't sleep and when he says something "will take long time", he will have it done in 15 minutes.</p>
                    </div>
                    <div className={classes.profile}>
                        <img src={angel} alt="pfp"></img>
                        <h6>ANGEL </h6>
                        <h6>LEAD MARKETING / OPERATIONS</h6>
                        <span> <MdOutlineLocationOn /> USA</span>

                        <p>He is the link between all the UpFinity's mechanisms. He makes sure everything is working smoothly to acheive the team's daily goals and organizes the marketing strategies. Don't say something cannot be done because he surely will prove you wrong. Legend says he wakes up every morning screaming "To UpFinity and Beyond"</p>
                    </div>
                    <div className={classes.profile}>
                        <img src={isa} alt="pfp"></img>
                        <h6>ISA</h6>
                        <h6>LEAD ARTIST</h6>
                        <span> <MdOutlineLocationOn />BRAZIL</span>

                        <p>She spends her days behind a sketch book. Her love and passion for art and design has lead her to work for multiple big titles. She joined UpFinity's team seeking a taste for the NFT world and quickly fell in love with the project.

                        </p>
                    </div>

                    <div className={classes.profile}>
                        <img src={zag} alt="pfp"></img>
                        <h6>ZAG </h6>
                        <h6>COMMUNITY MANAGER</h6>
                        <span> <MdOutlineLocationOn />USA</span>

                        <p>Zag is the core behind our community platforms. A night owl with a kind heart and a chill vibe that will always be looking to make our community feel welcome. Just don't fud around him though.</p>
                    </div>
                    <div className={classes.profile}>
                        <img src={kami} alt="pfp"></img>
                        <h6>KAMI </h6>
                        <h6>ARTIST</h6>
                        <span> <MdOutlineLocationOn />Brazil</span>

                        <p>Fresh girl added to the team! This shy artist with lots of potential doesn't talk much but she lets her skills with the pen do all the talking.</p>
                    </div>
                    <div className={classes.profile}>
                        <img src={felippi} alt="pfp"></img>
                        <h6>FELIPI </h6>
                        <h6>FREELANCER</h6>
                        <span> <MdOutlineLocationOn />Brazil</span>

                        <p>Artist behind our next NFT game!</p>
                    </div>
                    <div className={classes.profile}>
                        <img src={milton} alt="pfp"></img>
                        <h6>MILTON </h6>
                        <h6>FREELANCER</h6>
                        <span> <MdOutlineLocationOn /> Australia</span>

                        <p>Developer behind our next NFT game!</p>
                    </div>

                </div >
            </div>

        </div>
    )
}

export default Team

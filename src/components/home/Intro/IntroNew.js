import React, { useState } from 'react'
import classes from './IntroNew.module.css'
import banner from '../../../assets/images/Upf Banner.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icons from '../Icons'
import { AiOutlineCopy } from 'react-icons/ai'
import { AiFillCopy } from 'react-icons/ai'
import '../../../generalStylesheet.css'


function IntroNew() {
    const [copied, setCopied] = useState(false);

    const copyIcon = <AiOutlineCopy className={classes.iconCopy} color="white" onClick={() => setCopied(!copied)} />
    const copiedIcon = <AiFillCopy className={classes.iconCopy} color="white" onClick={() => setCopied(copied)} />


    return (
        <div className={classes.introNew}>
            <div className={classes.banner}>
                <img src={banner} alt="uof banner"></img>
            </div>
            <div className={classes.about}>
                <div className={classes.introAbout}>
                    <h1> BUY. HOLD. EARN</h1>
                    <span> THE WORLD's MOST INNOVATIVE TOKEN </span>
                    <p className={classes.accountNum}>0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae
                        <span>   <CopyToClipboard text={"0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae"}>
                            {copied ? copiedIcon : copyIcon}
                        </CopyToClipboard>
                        </span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                </div>
                <div className={classes.graph}>
                    <p>TAX: buy 9% / sell 12%</p>
                    <p>recommended slippage: buy 10+ / sell 15+</p>
                    <Icons />
                </div>

            </div>

            <div className="custom-shape-divider-bottom-1639826772">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>


            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#28A745" fill-opacity="1" d="M0,96L120,128C240,160,480,224,720,234.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        </div >
    )
}

export default IntroNew

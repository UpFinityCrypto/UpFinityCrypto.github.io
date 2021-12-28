import React from 'react';

function Airdrops() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthHalf = {width: "50%"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Airdrops">
      <div className="container">

        <div className="section-title">
          <h2>Airdrops</h2>
          <h5>Airdrop Phase 1 <span>finished</span></h5>
          <p>Wait for airdrop phase 2!</p>
        </div>

        <div className="row">
          <div className="col-lg-6 text-justify content">
            <h3>How to get Airdrop</h3>
            <ul className="ul-no-style">
              <li><i className="bx bx-check-double text-color-primary"></i>Connect your wallet</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Choose 1 airdrop option and click</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Confirm transaction in metamask popup</li>
            </ul>
            
            
            <h4>Make Referral Link</h4>
            <p>Spread your link to get <span>5%</span> Referral Bonus!</p>
            <form action="">
              <input type="text" id="typedRefAdr" placeholder="Type Your Wallet Address here"/>
            </form>
            <a id="getRefLinkButton" href="#null" className="button scrollto" onClick={window.getRefLink}>Make Link</a>
            
            <h4>Referral Bonus</h4>
            <div><span>5%</span> additional token will be sent to:</div>
            <div id="referralAdrDisplay"></div>
            <h4>Community Bonus</h4>
            <div>If rugpulled community choose us for the next gem and supports us,</div>
            <div>We will add bonus if they have that token more than 0</div>
            <div>Bonus amount depends on the community volume and support, etc</div>
            <div>Tell all rugpulled community to support us. We will add all of them one by one :)</div> 
            <div>Currently we support: <img src="https://shibcake.com/img/logo.svg" style={{width: "150px"}}/> (1%)</div>
            <form action="">
              <input type="text" id="typedCommunityAdr" placeholder="Type Token Address here"/>
            </form>
            <a id="getCommunityAdrButton" href="#null" className="button scrollto" onClick={window.getCommunityAdr}>Set Bonus</a>
            <div id="displayCommunityAdrBonus"></div>
          </div>
          
          <div className="col-lg-6 text-justify content">
            <h3>Rules</h3>
            <ul className="ul-no-style">
              <li><i className="bx bx-check-double text-color-primary"></i>Should be <span>new wallet</span> with <span>NO</span> UPFINITY TOKEN</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Can choose <span>ONLY 1</span> option</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Tokens will be <span>vested</span> until 21.12.07 1PM UTC (Auto unlock will be set near that time to decrease gas fee)</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Airdropped wallet <span>cannot trade with UpFinity</span> until vesting period</li>
              <li><i className="bx bx-check-double text-color-primary"></i>Details in the Telegram <a href="https://t.me/UpFinityTG" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a></li>
            </ul>
            
            <h4>Airdrop Options</h4>
            <div id="freeAirdropBalance"></div>
            <div id="airdropBalance"></div>
            <span>AIRDROP FINISHED! TOKENS WILL BE DISTRIBUTED VERY SOON AFTER SOME TESTS!</span>
            {/*<div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={window.claimFreeAirdrop}>Free Airdrop</a>
                  get 1$ free tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(3);}}>3$ Airdrop</a>
                  1% More Tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(5);}}>5$ Airdrop</a>
                  2% More Tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(10);}}>10$ Airdrop</a>
                  3% More Tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(30);}}>30$ Airdrop</a>
                  5% More Tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(50);}}>50$ Airdrop</a>
                  7% More Tokens!
                </h6>
            </div>
            <div className="social-links">
                <h6>
                  <a href="#null" id="claim" className="button scrollto" onClick={() => {window.claimAirdrop(100);}}>100$ Airdrop</a>
                  10% More Tokens!
                </h6>
            </div>*/}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Airdrops;

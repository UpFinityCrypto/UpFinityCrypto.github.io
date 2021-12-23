import React from 'react';
import { Link } from "react-router-dom";

function Ecosystem() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Ecosystem">
      <div className="container">

        <div className="section-title">
          <h2>Ecosystem</h2>
          <p>Actual <span>USECASE</span> of the UpFinity</p>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/UPFLOGO.png"/>
              <h2>Token</h2>
              <h6>20+ Features. 10+ Utilities. All in One</h6>
              <p>Enjoy all the things and get <span>profit!</span></p>

              <p><Link id="tokenLink" to="/upfinity" className="button scrollto">UpFinity</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFTs.png"/>
              <h2>NFT</h2>
              <h6>Limited Sale. Holders Only. Special Perks</h6>
              <p>Buy NFT to get <span>Tax Reduction!</span></p>
              <p><Link id="NFTLink" to="/nft" className="button scrollto">NFT</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Swap.png"/>
              <h2>Swap</h2>
              <p><Link to="/swap" className="button scrollto">Swap</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Staking.png"/>
              <h2>Staking</h2>
              <h6>Buy UPF. Stake UPF. Earn UPF</h6>
              <p>Stake your UPF to get much more UPF rewards!</p>
              <p><Link to="/Staking" className="button scrollto">Staking</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Rewards.png"/>
              <h2>Rewards</h2>
              <h6>Buy UPF. Hold UPF. Earn BNB</h6>
              <p>Buy/Hold UPF to get much more BNB Rewards!</p>
              <p><Link to="/Rewards" className="button scrollto">Rewards</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFTs.png"/>
              <h2>NFT Avatar</h2>
              <h6>8 Parts. 4 Grades. 3 Perks</h6>
              <p>Decorate your avatar with useful items!</p>
              <p><Link id="P2ELink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Mystery_Box.png"/>
              <h2>Mystery Box</h2>
              <h6>Random items. Try your luck. More to Come.</h6>
              <p>Open the box to get legendary items!</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Coin_Vote.png"/>
              <h2>Coin Vote</h2>
              <h6>Check what is <span>REALLY</span> famous</h6>

              <p>We bringing a revolution to current coin voting websites.</p>
              <p>Very excited to talk about our one of a kind community driven Coin Leaderboard where only authenticated
                wallets will be able to vote.</p>
              <p>Making it a lot harder for bots or macros to participate. The best part is that whenever a coin wins, our
                reward tokens go to that coin and at the same time spread to UPF holders giving the winning token and UPF
                holders a massive boost!</p>
              <p><a id="coinVoteLink" href="https://upfvote.com" className="button scrollto">Upgrading!</a></p>
            </div>
          </div>


          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Marketplace.png"/>
              <h2>Marketplace</h2>
              <p>UpFinity marketplace will be the place to trade all your NFTs. It will reward UPF holders with a percentage
                of the tx fee!</p>
              <p><Link id="MarketplaceLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/P2E_Game.png"/>
              <h2>P2E Game</h2>
              <p>Enjoy gaming? Want to turn your skills into money? Coming soon, a fun easy to play, yet challenging game on
                our platform, where you can earn UPF based on your score and play time. So get ready to PLAY TO WIN!</p>
              <p><Link id="P2ELink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFT_Farming.png"/>
              <h2>NFT Farming</h2>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Safu_Checker.png"/>
              <h2>SAFU Checker</h2>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/merchandise.png"/>
              <h2>UPF Store</h2>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/merchandise.png"/>
              <h2>Merchandise</h2>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;

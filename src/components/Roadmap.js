import React from 'react';

function Roadmap() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font3em = {fontSize: "3em"};
  const font0_5em = {fontSize: "0.5em"};
  
  const divStyle = {width: "20px", height: "20px"};
  
  return (
    <section id="Roadmap">
      <div className="section-title">
        <h2>Roadmap</h2>
        <p>What we will do with our community</p>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <i className="ri-stack-line"></i>
        </div>
        <div className="cssanimations cd-timeline-content bounce-in">
          <h2>2021 Q4</h2>
          <div><i className="bi bi-check-circle text-success"></i>Preparation: Website, Fair Launch</div>
          <div><i className="bi bi-check-circle text-success"></i>Massive Marketing: Reddit, Twitter, CoinSniper, etc</div>
          <div><i className="bi bi-check-circle text-success"></i>New Features: Circuit Breaker</div>
          <div><i className="bi bi-check-circle text-success"></i>New Features: First Penguin</div>
          <div><i className="bi bi-check-circle text-success"></i>New Services: Coin Vote</div>
          <div><i className="bi bi-check-circle text-success"></i>New Services: NFT</div>
          <div><i className="bi bi-check-circle text-success"></i>Milestones: 5K TG Members</div>
          <div><i className="bi bi-check-circle text-success"></i>Milestones: 1K Holders</div>
          <div><i className="bi bi-check-circle text-success"></i>New Services: Swap (Buy)</div>
          <div><i className="bi bi-check-circle text-success"></i>New Services: Staking Season 1</div>
          <div><i className="bi bi-check-circle text-success"></i>Listings: CoinMarketCap</div>
          <div><i className="bi bi-check-circle text-success"></i>Milestones: 1M Market Cap</div>
          <div><i className="bi bi-check-circle text-success"></i>Listings: CoinGecko</div>
          <div><i className="bi bi-check-circle text-success"></i>Audit: DessertFinance</div>

        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <i className="ri-stack-line"></i>
        </div>
        <div className="cssanimations cd-timeline-content bounce-in">
          <h2>2022 Q1</h2>
          <div><i className="bi bi-check-circle text-success"></i>New Services: Swap (Sell)</div>
          <div><i className="bi bi-check-circle text-success"></i>New Services: Staking Season 2</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: Lottery</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: Casino (Roulette)</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: Casino (Sic Bo)</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: NFT Avatar</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: Mystery Box</div>
          <div><div className="spinner-border text-warning" role="status" style={divStyle}></div>New Services: Play-to-Earn Game #1</div>
          <div>New Services: NFT MarketPlace</div>
          <div>New Services: Lock Launchpad</div>
          <div>New Services: Infinite Pump</div>
          <div>New Services: Up & Down</div>
          <div>New Services: Advanced Swap</div>
          <div>Listings: Minor Exchanges</div>
          <div>Audit: CertiK</div>
          <div>Milestones: 50K TG Members</div>
          <div>Milestones: 10K Holders</div>
          <div>Milestones: 10M Market Cap</div>
        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <i className="ri-stack-line"></i>
        </div>
        <div className="cssanimations cd-timeline-content bounce-in">
          <h2>2022 Q3/Q4</h2>
          <div>New Services: Presale Launchpad</div>
          <div>New Services: NFT Launchpad</div>
          <div>New Services: Charting Tool</div>
          <div>New Services: Analytics</div>
          <div>New Services: Multi-Chain Swap</div>
          <div>Listings: Major Exchanges</div>
          <div>Milestones: 500K TG Members</div>
          <div>Milestones: 1M Holders</div>
          <div>Milestones: 1B Market Cap</div>
        </div>
      </div>
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <i className="ri-stack-line"></i>
        </div>
        <div className="cssanimations cd-timeline-content bounce-in">
          <h2>2023</h2>
          <div><span>To the UpFinity and beyond</span></div>
        </div>
      </div>

    </section>
  );
}

export default Roadmap;

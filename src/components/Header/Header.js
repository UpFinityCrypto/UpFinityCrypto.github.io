import React from 'react';
import { Link } from "react-router-dom";

export function Header() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};  

  return (
    <header id="Header">
      <i className="bi bi-list mobile-nav-toggle"></i>
      <Link to="/" className="logo d-flex align-items-center">
        <img src="assets/img/logo_xmas.png" className="small-icon" alt="" style={{margin:"10px"}}/>
        <h6 className="desktop"> UpFinity</h6>
      </Link>
        
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className="dropdown">
            <a className="nav-link scrollto" >Token<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/upfinity">Features</Link></li>
              <li><Link to="/swap">Swap</Link></li>
              <li><Link to="/staking">Staking</Link></li>
              <li><Link to="/rewards">Rewards</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" >NFT<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/nft">NFT Origin</Link></li>
              <li><Link to="/mysterybox">NFT Mystery Box</Link></li>
              <li><Link to="/p2egame">P2E Game</Link></li>
              <li><a href="">NFT MarketPlace<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>

            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" >Utility<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="https://upfinity.gitbook.io/upfinity/ecosystem/utility/autoshill/how-to-use-autoshill">Auto Shill (Free 25$!)</a></li>
              <li><a href="https://upfvote.com/">Coin Vote<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">SAFU Checker<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">Lottery<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">Trade Competition<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">UPF & DOWN <div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" >About<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/roadmap">Roadmap</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><a href="https://upfinity.gitbook.io">Whitepaper</a></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/community">Community</Link></li>
          <li className="dropdown">
            <a className="nav-link scrollto">More<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/donations">Donations</Link></li>
              <li><Link to="/airdrops">Airdrops</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="nav-item dropdown" style={{margin:"0 5px"}}>
        <a className="nav-link nav-icon" data-bs-toggle="dropdown" aria-expanded="false" style={{padding: "0px"}}>
          <i id="curStatus" className="bi" style={{fontSize:"25px"}}></i>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications text-center" style={{backgroundColor: "#222222"}}>
          <li className="notification-item">
            <div>
              <p id="cbStatus" style={white}></p>
              <a href="https://upfinity.gitbook.io/upfinity/special-features/advanced-tax-algorithms#stabilizing-the-market-more">
                <i className="bi bi-info-circle text-primary"></i>
              </a>
              <p id="cbDuration" style={white}></p>
            </div>
          </li>
        </ul>

      </div>

      <div className="row listed" style={{display: "contents"}}>
        <div style={{padding:"0px", margin:"5px"}}><span id="curPrice"></span>$ = 1B UPF</div>
        <Link to="/swap" className="button scrollto" style={{margin:"0px", marginRight:"5px"}}>BUY!</Link>
      </div>

      <nav id="connectButton" className="header-nav ms-auto" style={ {marginRight:"50px"} }>
        <div className="text-center">
          <a href="" id="connect" className="button scrollto" onClick={window.afconnect}>Connect Wallet</a>
        </div>
      </nav>
      <script type="text/javascript">
      </script>
    </header>
  );
}

export function HeaderMargin() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};  

  return (
    <div id="HeaderMargin" style={{marginTop: "90px"}}>
      
    </div>
  );
}

export default Header;

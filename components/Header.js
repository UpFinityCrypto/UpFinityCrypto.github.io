function Header() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  
  return (
    <section id="Header">
      <i className="bi bi-list mobile-nav-toggle"></i>
      <a href="https://www.theupfinity.com/" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" className="small-icon" alt="" style={{margin:"10px"}}/>
        <h6 className="desktop"> UpFinity</h6>
      </a>
        
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto" href="dashboard.html">Dashboard</a></li>
          <li className="dropdown">
            <a className="nav-link scrollto" href="#">Token<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="upfinity.html">Features</a></li>
              <li><a href="swap.html">Swap</a></li>
              <li><a href="dashboard.html#Staking">Staking</a></li>
              <li><a href="dashboard.html#Rewards">Rewards</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" href="#">NFT<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="nft.html">NFT Origin</a></li>
              <li><a href="mysterybox.html">NFT Mystery Box</a></li>
              <li><a href="p2egame.html">P2E Game</a></li>
              <li><a href="">NFT MarketPlace<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>

            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" href="#">Utility<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="https://upfinity.gitbook.io/upfinity/ecosystem/utility/autoshill/how-to-use-autoshill">Auto Shill</a></li>
              <li><a href="https://upfvote.com/">Coin Vote<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">SAFU Checker<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">Lottery<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">Trade Competition<div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
              <li><a href="">UPF & DOWN <div className="spinner-border text-warning" role="status" style={menu}></div></a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" href="#">About<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="roadmap.html">Roadmap</a></li>
              <li><a href="index.html#Team">Team</a></li>
              <li><a href="https://upfinity.gitbook.io">Whitepaper</a></li>
              <li><a href="faqs.html">FAQs</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="community.html">Community</a></li>
          <li className="dropdown">
            <a href="#"><div>More</div> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="donations.html">Donations</a></li>
              <li><a href="airdrop.html">Airdrop</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="nav-item dropdown" style={{margin:"0 5px"}}>
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown" aria-expanded="false" style={{padding: "0px"}}>
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
        <a href="swap.html" className="button scrollto" style={{margin:"0px", marginRight:"5px"}}>BUY!</a>
      </div>

      <nav id="connectButton" className="header-nav ms-auto" style={ {marginRight:"50px"} }>
        <div className="text-center">
          <a href="#null" id="connect" className="button scrollto" onClick={window.afconnect}>Connect Wallet</a>
        </div>
      </nav>
      <script type="text/javascript">
      </script>
    </section>
  );
}

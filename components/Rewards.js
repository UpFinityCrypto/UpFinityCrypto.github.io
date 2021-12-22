function Rewards() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font3em = {fontSize: "3em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Rewards">
      <div className="container">

        <div className="section-title">
          <h2>Rewards</h2>
          <p>Buy/Hold <img src="assets/img/logo.png" className="small-icon"/>UPF, Earn <img src="assets/img/trade/bin.ico" className="small-icon"/>BNB</p>
          <p>Total Rewards Left</p>
          <p><span id="totalUnclaimed" className="text-center" style={font3em}></span><img src="assets/img/trade/bin.ico" className="small-icon"/>BNB</p>
          <p>Rewards Contract Address</p>
          <a href="https://bscscan.com/address/0x373764c3deD9316Af3dA1434ccba32caeDeC09f5" target="_tab">
            0x373764c3deD9316Af3dA1434ccba32caeDeC09f5
          </a>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 text-justify content">
            <h3>How to get BNB rewards</h3>
            <ul>
                <li><i className="bi bi-chevron-right"></i>1. Connect wallet</li>
                <li><i className="bi bi-chevron-right"></i>2. Click 'Claim'</li>
                <li><i className="bi bi-chevron-right"></i>3. Click 'Confirm' in the Wallet Dapp </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 pt-4 pt-lg-0 content">
            <div className="row mt-5">
              <span id="devNotice"></span>
            </div>
            <div className="row mt-5 bold" style={font3em}>
              <div className="col-6 align-items-stretch">
                <div className="icon-box">
                    <h6 className="text-center ">You can claim</h6>
                    <div id="claimable" className="text-center" style={font0_5em}></div>BNB
                </div>
              </div>
              <div className="col-6 align-items-stretch">
                  <div className="icon-box">
                      <h6 className="text-center ">Your claimed rewards</h6>
                      <div id="claimed" className="text-center" style={font0_5em}></div>BNB
                  </div>
              </div>
              <a href="#null" id="claim" className="button scrollto" onClick={window.fclaim}>Claim</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

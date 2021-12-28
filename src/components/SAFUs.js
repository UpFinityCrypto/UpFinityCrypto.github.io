import React from 'react';

function SAFUs() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2.5em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="SAFUs">
      <div className="section-title">
        <h2>SAFU Proofs</h2>
        <p>More details in <a href="https://upfinity.gitbook.io/upfinity/main-infos/liquidity-lock">whitepaper</a></p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 text-justify content">
          <h3>Doxxed</h3>
          <a href="https://www.dessertswap.finance/dessertdoxxed.html" target="_tab">
            view in dessertdoxxed
            <img src="assets/img/safu/doxxed.png"/>
          </a>
        </div>
        <div className="col-12 col-md-6 text-justify content">
          <h3>Audit</h3>
          <div>
            <a href="https://github.com/UpFinityCrypto/UpFinityCrypto.github.io/blob/675dd736fc7b87eecfb4330bc86b051718b9cca9/UpFinity.sol" target="_tab">
              view in github (Audited Version)
            </a>
          </div>
          <div>
            <a href="https://github.com/UpFinityCrypto/UpFinityCrypto.github.io/releases/tag/audit" target="_tab">
              Auditted Tag
            </a>
          </div>
          <div>
            <a href="https://dessertswap.finance/idverified.html" target="_tab">
              view in dessertswap (Search UpFinity!)
              <img src="assets/img/safu/audited.png"/>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-6 text-justify content">
          <h3>LP Locked or Burned</h3>
          <a href="https://dxsale.app/app/v3/dxlockview?id=0&add=0xe7F0704b198585B8777abe859C3126f57eB8C989&type=lplock&chain=BSC" target="_tab">
            view in dxsale (connect wallet!)
            <img src="assets/img/safu/locked.jpg"/>
          </a>
        </div>
        <div className="col-12 col-md-6 text-justify content">
          <h3>auto/manual burned</h3>
          <p id="dappNeeded"></p>
            <p><span id="_manualburned">50</span>%. multiple burn event done and more to come</p>
            <a href="https://bscscan.com/tx/0xc99a53913ded6e672ed7e61722c4d02a88829cb4b852490eb3a9c2fbd0fbbc16" target="_tab">
              view in bscscan
              <img src="assets/img/safu/burned.jpg"/>
          </a>
        </div>
        <div className="col-12 col-md-6 text-justify content">
          <h3>manual LP burned</h3>
          <p id="dappNeeded"></p>
          <p><span id="_manuallpburned">100</span>%. multiple LP burn will be done</p>
          <a href="https://bscscan.com/tx/0xc99a53913ded6e672ed7e61722c4d02a88829cb4b852490eb3a9c2fbd0fbbc16" target="_tab">
            view in bscscan
            <img src="assets/img/safu/lpburned.jpg"/>
          </a>
        </div>
      </div>
    </section>
  );
}


export default SAFUs;

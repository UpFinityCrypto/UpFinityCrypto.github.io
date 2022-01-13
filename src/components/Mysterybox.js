import React from 'react';

function Mysterybox() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2.5em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Mysterybox">
      <div className="section-title">
        <h2>NFT Mystery Box + Avatar (SOON)</h2>
      </div>

      <div className="row">
        <div className="col-6 col-lg-4 center">
          <picture>
            <source media="(max-width:992px)" className="full-width" srcSet="assets/img/mysterybox/yin_400.png" />
            <img src="assets/img/mysterybox/yin_200.png" className="full-width" />
          </picture>
        </div>
        <div className="col-6 col-lg-4 center">
          <picture>
            <source media="(max-width:992px)" className="full-width" srcSet="assets/img/mysterybox/yang_400.png" />
            <img src="assets/img/mysterybox/yang_200.png" className="full-width" />
          </picture>
        </div>
        <div className="col-12 col-lg-4 center">
          <h4>Rarities Inside</h4>
          <p>Uncommon 60%</p>
          <p>Rare 35%</p>
          <p>Epic 4.5%</p>
          <p>Legendary 0.5%</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-12 center">
          <picture>
            <source media="(max-width:992px)" className="full-width" srcSet="assets/img/avatar/perks_400.png" />
            <img src="assets/img/avatar/perks_1000.png" className="full-width" />
          </picture>
        </div>
        <div className="col-12 col-lg-12 center">
          <h4>3 Perks</h4>
          <p>Tax Reduction</p>
          <p>BNB Reward Increase</p>
          <p>Stake Reward Increase</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-12 center">
          <picture>
            <source media="(max-width:992px)" className="full-width" srcSet="assets/img/avatar/combinations_400.png" />
            <img src="assets/img/avatar/combinations_1000.png" className="full-width" />
          </picture>
        </div>
        <div className="col-12 col-lg-12 center">
          <h4>Everything is possible</h4>
          <p>Mix and match your avatar to get the combination you want</p>
        </div>
        <div className="col-12 col-lg-12 center">
          <picture>
            <source media="(max-width:992px)" className="full-width" srcSet="assets/img/avatar/examples_400.png" />
            <img src="assets/img/avatar/examples_1000.png" className="full-width" />
          </picture>
        </div>
      </div>
    </section>
  );
}


export default Mysterybox;

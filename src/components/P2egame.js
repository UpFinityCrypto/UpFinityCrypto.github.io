import React from 'react';

function P2egame() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2.5em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="P2egames">
      <div className="section-title">
        <h2>UpFinity Wars (SOON)</h2>
        <p>Play to Earn Game</p>
      </div>

      <div className="row">
        <div className="col-6 col-lg-6 center">
          <h4>2 Game Modes</h4>
          <p>classNameic</p>
          <p>Guild vs Guild</p>
        </div>
        <div className="col-6 col-lg-6 center">
          <video width="100%" controls autoPlay>
            <source src="assets/img/p2egame/demo.mp4" type="video/mp4" className="" alt=""/>
          </video>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-lg-6 center">
          <img className="full-width" src="assets/img/p2egame/concept.png"/>
        </div>
        <div className="col-6 col-lg-6 center">
          <h4>3 Stats</h4>
          <p>Chasis: Bigger Growth</p>
          <p>Engine: Higer Speed</p>
          <p>Trail: Longer Tail</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-lg-6 center">
          <h4>Get Higher Tier of Rocket!</h4>
          <p>Normal</p>
          <p>Uncommon</p>
          <p>Rare</p>
          <p>Epic</p>
          <p>Legendary</p>
        </div>
        <div className="col-6 col-lg-6 center">
          <img className="full-width" src="assets/img/p2egame/rockets.png"/>
        </div>
      </div>
    </section>
  );
}


export default P2egame;

import React from 'react';

function Stats() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  
  return (
    <section id="Stats">
      <div className="section-title">
        <h2>Stats</h2>
        <p id="dappNeeded"></p>
        <p>Check realtime basic stats!</p>
      </div>
      <div className="container" style={{fontSize: "50px", fontWeight: "bold"}}>

        <div className="row gy-4">

          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Price</h5>
                <span id="priceCounter" style={font30px}></span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Burned</h5>
                <span id="burnCounter"></span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Circulating</h5>
                <span id="circulateCounter"></span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Market Cap</h5>
                <span id="marketcapCounter"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Burned by Event</h5>
                <span id="manualBurnCounter"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">LP Burned by Event</h5>
                <span id="manualLPBurnCounter"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Initial Market Cap</h5>
                <span>$</span><span id="initialMcapCounter">333</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="count-box">
              <div>
                <h5 className="text-center ">Multiplied from start</h5>
                <span id="startMultiCounter"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;

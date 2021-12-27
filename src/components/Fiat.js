import React from 'react';

function Fiat() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  
  return (
    <section id="Fiat">
      <div className="section-title">
        <h2>Fiat (Beta)</h2>
        <p>Official widget from
          <a href="https://onramper.com" style={{ background: "white" }}>
            <img src="assets/img/fiat/onramper.png" className="small-icon" style={{ width: "5em" }} />
          </a>
        </p>
        <p>Powered by
          <a href="https://www.moonpay.com" style={{ background: "white" }}>
            <img src="assets/img/fiat/moonpay.svg" className="small-icon" style={{ width: "5em" }} />
          </a>
        </p>
      </div>
      <iframe
        id="onramper-widget"
        title="Onramper widget"
        frameBorder="no"
        allow="accelerometer; autoplay; camera; gyroscope; payment;"
        src="https://widget.onramper.com/?color=28a745&defaultCrypto=BNB_BEP20&defaultAmount=1000&onlyCryptos=BNB_BEP20&apiKey=pk_prod_okK66ZwhpIVCg53cyS1ZzdPKxNz6wZWrhMclvjn0nXg0"
        style={{ height: "600px" }}>
      </iframe>
    </section>
  );
}

export default Fiat;

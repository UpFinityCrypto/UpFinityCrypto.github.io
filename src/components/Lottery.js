import React from 'react';
import { Link } from "react-router-dom";

function Lottery() {
  const menu = { width: "20px", height: "20px" };
  const white = { color: "#fff" };
  const baseFontColor = { color: "#aaaaaa" };
  const center = { margin: "0 auto" };
  const noMargin = { margin: "0px" };
  const width30px = { width: "30px" };
  const font2_5em = { fontSize: "2em" };
  const font0_5em = { fontSize: "0.5em" };

  return (
    <section id="Lottery">
      <div className="section-title">
        <h2>Lottery (TEST)</h2>
        <p>Bet <img src="assets/img/logo.png" className="small-icon" />UPF, Win <img src="assets/img/logo.png" className="small-icon" />UPF</p>
        <p>Lottery Contract Address</p>
        <a href="https://bscscan.com/address/0xB48c64D9b8C9862522cb4971ddc0A01612d9F847" target="_tab">
          0xB48c64D9b8C9862522cb4971ddc0A01612d9F847
        </a>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12 col-lg-6">
              <p>Max Prize</p>
              <span id="totalValueLocked" className="text-center" style={font2_5em}></span>
            </div>
            <div className="col-12 col-lg-6">
              <p>Your Balance</p>
              <span id="totalStaked" className="text-center" style={font2_5em}></span><img src="assets/img/logo.png" className="small-icon" />UPF
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <a id="approveLottery" className="button scrollto"></a>
          <a id="getTicket" className="button scrollto" onClick={() => { window.fgetLottery(1, false); }}>Get 1 Ticket</a>
          <a id="getTicket" className="button scrollto" onClick={() => { window.fgetLottery(5, false); }}>Get 5 Ticket</a>
        </div>
      </div>
    </section>
  );
}

export default Lottery;

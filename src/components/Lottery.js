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
      </div>

      <a id="getTicket" className="button scrollto" onClick={() => { window.fgetLottery(5); }}>Get Ticket</a>
      
    </section>
  );
}

export default Lottery;

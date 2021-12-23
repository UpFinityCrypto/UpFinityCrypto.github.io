import React from 'react';

export default function Mynft() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  
  return (
    <section id="Mynft">
      <div className="section-title">
        <h2>my NFT</h2>
        <p>Total Minted: <span id="totalMyNFTCount">0</span></p>
        <p>Buy Tax Reduction: <span id="taxReduction" className="text-center">-0%</span></p>
      </div>

      <div id="myNFTs" className="row">
      </div>
    </section>
  );
}

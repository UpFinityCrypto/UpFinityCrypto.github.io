import React from 'react';

function Features() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2.5em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Features">
      <div className="section-title">
        <h2>Features</h2>
        <p><span>20+</span> unique features in a single token</p>
        Details in <a id="WhitePaperLink" href="https://upfinity.gitbook.io" className="scrollto">WhitePaper</a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body no-margin">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <div className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      3x Reward Algorithms
                    </button>
                  </div>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Enjoy the Profit by buy and hold :)</strong></p>

                      <h4>Dip Reward Algorithm</h4>
                      <div>Buyers at the dip should get <span>MORE</span></div>
                      <div><span>CHOOSE</span> the reward token you would like to receive!</div>
                      <div><span id="_dipRewardFee"></span>+% tax will be stacked to this <span>REWARD</span></div>
                      <div>Rewards will be included in every buy until ATH</div>
                      <div>Community can request to <span>CHANGE</span> reward token (CAKE, DOGE, SHIB, etc)</div>
                      <div>Current Reward Token: <span id="_rewardToken">CAKE</span></div>

                      <h4>Advanced BNB Reward Algorithm</h4>
                      <div>Most reward systems nowadays are <span>LACKING</span></div>
                      <div><span id="_improvedRewardFee"></span>+% tax will be set to BNB reward</div>
                      <div><span>NO</span> claim cooltime</div>
                      <div><span>NO</span> minimum amount needed</div>
                      <div>Your reward will be completely <span>PRESERVED</span></div>

                      <h4>Redistribution</h4>
                      <div><span id="redistributionFee"></span>+% tax is reflected back to holders!</div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      2x Sell Protection Algorithms
                    </button>
                  </div>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div id="Rules" className="accordion-body">
                      <p><strong>Investors should be protected</strong></p>

                      <h4>Personal Anti-Dump Algorithm</h4>
                      <div>Each wallet can only sell/transfer <span id="_maxSellNume"></span>% of price impact in 1 transaction</div>


                      <div>Only 1 sell per <span id="_antiDumpDuration"></span> seconds can happen, globally.</div>
                      <h4>Personal Anti-Panic Algorithm</h4>
                      <div>Each wallet can sell once every <span id="_buySellTimeDuration"></span> seconds</div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      4x Stability Algorithms						</button>
                  </div>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Achieve Long-term organic Growth</strong></p>

                      <h4>Sell Recovery Algorithm</h4>
                      <div><span id="priceRecoveryFee"></span>+% of every sell will be BOUGHT BACK Instantly</div>

                      <h4>Anti-Whale Algorithm</h4>
                      <div>1 wallet can hold a maximum of <span id="_maxBalanceNume"></span>% of total supply</div>
                      <div>(Can be exceeded by redistribution etc)</div>

                      <h4>Advanced Anti-Dump Algorithm</h4>
                      <div>1 wallet can sell/transfer a total of <span id="_maxSellNume"></span>% of price impact at once</div>

                      <h4>Advanced Anti-Pump Algorithm</h4>
                      <div>1 wallet can buy/transfer up to <span id="_maxTxNume"></span>% of current liquidity at once</div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      4x Events
                    </button>
                  </div>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Encourage and Motivate the community</strong></p>

                      <h4>Dividend Party</h4>
                      <div>Profit should be done as a <span>Party!</span></div>
                      <div>If contract balance exceeds <span id="_dividendPartyThreshold"></span> tokens,</div>
                      <div>a sell will be triggered.</div>
                      <div>Liquidity / Rewards / Redistribution will happen in <span>BULK</span></div>

                      <h4>Manual BuyBack Event</h4>
                      <div><span id="_manualBuyFee"></span>% tax will be stacked as BNB</div>
                      <div>And it will be used for manual buyback</div>

                      <h4>Manual Token Burn Event</h4>
                      <div>By the community request and at certain event,</div>
                      <div>Token will be burned!</div>

                      <h4>Manual LP Token Burn Event</h4>
                      <div>By the community request and at certain event,</div>
                      <div>LP Token will be burned!</div>

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      4x Advanced Tax Algorithms
                    </button>
                  </div>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Managing the overall UpFinomics Effectively</strong></p>

                      <h4>Impact Tax Algorithm</h4>
                      <div>Whales <span>CANNOT</span> do workaround to avoid tax</div>
                      <div>Extra tax will be set proportionally to <span>price impact</span></div>
                      <div>If a sell/transfer with 1% price impact => <span id="_accuMulFactor"></span>% more tax</div>
                      <div>Current multiplication: <span id="_accuMulFactor"></span></div>

                      <h4>Circuit Breaker Algorithm</h4>
                      <div>Stabilizing the market <span>MORE</span></div>
                      <div>When current price drops by <span id="_curcuitBreakerThreshold">15</span>% within <span id="_accuTaxTimeWindow"></span> day,</div>
                      <div>[Impact Tax Algorithm] is doubled for <span id="_curcuitBreakerDuration"></span> hours</div>

                      <h4>First Penguin Algorithm</h4>
                      <div>Breaking the uptrend should pay tax <span>MORE</span></div>
                      <div>If sell after the buy, [Impact Tax Algorithm] is doubled</div>

                      <h4>Penalty Tax Algorithm</h4>
                      <div>Whales <span>CANNOT</span> dump it all quickly</div>
                      <div>Penalty Tax will be added if sold in a <span>SHORT PERIOD</span></div>
                      <div>If a sell/transfer with 1% price impact => <span id="_accuMulFactor"></span>% more tax</div>
                      <div>if same wallet sells again for 1% price impact within <span id="_accuTaxTimeWindow"></span> day => <span id="_accuMulFactor"></span>% + <span id="_accuMulFactor"></span>% more tax</div>
                      <div>This tax resets <span id="_accuTaxTimeWindow"></span> day after each first sell</div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      3x Automatic Systems
                    </button>
                  </div>
                  <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p><strong>Making Our Project more promising</strong></p>

                      <h4>Auto-Liquidity System</h4>
                      <div><span id="_liquidityFee"></span>% tax will be added to the liquidity</div>


                      <h4>Auto-Burn System</h4>
                      <div><span id="_autoBurnFee"></span>% tax will be auto-burned</div>


                      <h4>Tracking Algorithm</h4>
                      <div>Will reveal the details soon :)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section>
  );
}


export default Features;

const runs = {};
const runPersonals = {};
runs['Airdrop'] = async function runAirdrop() {
  // airdrop
  freeAirdropBalance = (await funcs['upf'].balanceOf(adrs['freeair']))[0];
  dollarsPerBNB = (await funcs['airdrop']._dollarsPerBNB())[0] / 1;
  oneDollarBNB = 1 / dollarsPerBNB; // 1 BNB = 400$ for simplicity + optimize gas fee
  oneDollarUPF = (await funcs['router'].getAmountOut(ethers.utils.parseEther(oneDollarBNB.toString()), rI, rO))[0];
  _freeAirdropSystem = (await funcs['upf']._freeAirdropSystem())[0]
  displayText("freeAirdropBalance", "Free Airdrop (" + _freeAirdropSystem + ") balance: [" + numberWithCommas(Math.floor(freeAirdropBalance.div(oneDollarUPF) / 1)) + " $]");

  airdropBalance = (await funcs['upf'].balanceOf(adrs['airdrop']))[0];
  _airdropSystem = (await funcs['upf']._airdropSystem())[0]
  displayText("airdropBalance", "Airdrop (" + _airdropSystem + ") balance: [" + numberWithCommas(Math.floor(airdropBalance.div(oneDollarUPF) / 1)) + "$]");
}

runs['Status'] = async function runStatus() {
  maxBuyUPF = rO / 10000 * _maxTxNume; // 10% of current liquidity
  maxBuyBNB = (await funcs['router'].getAmountIn(ethers.utils.parseEther(String(maxBuyUPF / bnbDiv)), rI, rO))[0];

  sellCooltime = 0;
  if (_curcuitBreakerFlag == 2) { // breaker on?
    sellCooltime_ = _curcuitBreakerTime / 1 + _curcuitBreakerDuration / 1 + 0.5 * 60 * 60; // reliable rough estimation
    if (NOW < sellCooltime_) {
      if (sellCooltime / 1 < sellCooltime_ / 1) {
        sellCooltime = sellCooltime_;
        d = new Date(sellCooltime * 1000);
        displayText("sellCooltime", d);
        }
      }
    }

  //     sellCooltime_ = _antiDumpTimer / 1 + _antiDumpDuration / 1;
  //     if (NOW < sellCooltime_) {
  //       sellCooltime = sellCooltime_;
  //       d = new Date(sellCooltime * 1000);
  //       displayText("sellCooltime", d);
  //     }

}


runPersonals['Status'] = async function runStatusPersonal() {
  balanceUPF = (await funcs['upf'].balanceOf(currentAccount))[0];
  displayText("balanceStatus", numberWithCommas(Math.floor(balanceUPF / 1e18)));

  balancePercentage = round(balanceUPF / totalSupply * 100, 2);
  displayText("balancePercentageStatus", balancePercentage);
  if (balancePercentage >= 1) {
    displayText("balanceIcon", String.fromCodePoint(0x1F40B)); // 🐳
  } else if (balancePercentage >= 0.3) {
    displayText("balanceIcon", String.fromCodePoint(0x1F988)); // 🦈
  } else if (balancePercentage >= 0.1) {
    displayText("balanceIcon", String.fromCodePoint(0x1F42C)); // 🐬
  } else if (balancePercentage >= 0.03) {
    displayText("balanceIcon", String.fromCodePoint(0x1F41F)); // 🐟
  } else if (balancePercentage >= 0.01) {
    displayText("balanceIcon", String.fromCodePoint(0x1F419)); // 🐙
  } else if (balancePercentage >= 0.003) {
    displayText("balanceIcon", String.fromCodePoint(0x1F980)); // 🦀
  } else if (balancePercentage >= 0.001) {
    displayText("balanceIcon", String.fromCodePoint(0x1F990)); // 🦐
  }



  balanceLimit = totalSupply.mul(_maxBalanceNume).div(10000); // 1.1% of total supply
  buyLimit = balanceLimit.sub(balanceUPF);
  if (buyLimit / 1 < 0) {
    displayText("oneBuyLimitStatus", 'already max!');
    buyLimit = 0;
  } else {
    maxBuyBNB_ = (await funcs['router'].getAmountIn(buyLimit, rI, rO))[0];
    if (maxBuyBNB_ / 1 < maxBuyBNB / 1) {
      maxBuyBNB = maxBuyBNB_;
    }

    displayText("oneBuyLimitStatus", round(maxBuyBNB / bnbDiv, 2) + ' BNB');
  }




  // it may display last big value

  _buySellTimer = (await funcs['upf']._buySellTimer(currentAccount))[0] / 1;
  sellCooltime_ = _buySellTimer + _buySellTimeDuration;
  if (sellCooltime / 1 < sellCooltime_ / 1) {
    sellCooltime = sellCooltime_;
    d = new Date(sellCooltime * 1000);
    d = d.toString().split(' ').slice(1, 5).join(' ');
    displayText("sellCooltime", d);
  }

  blacklisted = (await funcs['upf'].blacklisted(currentAccount))[0];


  maxSellUPF = rO;
  if (NOW < _timeAccuTaxCheckGlobal + _accuTaxTimeWindow) { // in time window
    maxSellRate_ = _curcuitBreakerThreshold - _taxAccuTaxCheckGlobal;
    if (maxSellRate_ / 1 < 0) {
      maxSellRate_ = 0;
    }
  } else {
    maxSellRate_ = _curcuitBreakerThreshold;
  }

  maxSellUPF_ = rO.mul(maxSellRate_).div(10000); // not exactly right but roughly to avoid confusion
  if (maxSellUPF_ / 1 < maxSellUPF / 1) {
    maxSellUPF = maxSellUPF_;
  }


  if (NOW < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
    maxSellRate_ = _taxAccuTaxThreshold - _taxAccuTaxCheck; // reverted if exceed limit, so always little value left
    if (maxSellRate_ / 1 < 0) {
      maxSellRate_ = 0;
    }
  } else {
    maxSellRate_ = _taxAccuTaxThreshold;
  }

  maxSellUPF_ = rO.mul(maxSellRate_).div(10000);
  if (maxSellUPF_ / 1 < maxSellUPF / 1) {
    maxSellUPF = maxSellUPF_;
  }

  if (0 < maxSellUPF / 1) {
    // maxSellBNB = (await routerC.functions.getAmountIn(maxSellUPF, rI, rO))[0];
    maxSellBNB = maxSellUPF / rO * rI; // workaround 
    maxSellBNB = maxSellBNB / 1.5; // roughly estimated
  } else {
    maxSellBNB = 0;
  }

  displayText("oneSellLimitStatus", round(maxSellBNB / bnbDiv, 2) + ' BNB');

  taxPenalty = 0;
  if (NOW < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
    taxPenalty = _taxAccuTaxCheck * _accuMulFactor / 100;
    if (15 < taxPenalty / 1) {
      taxPenalty = 15; // check
    }
    // displayText("_taxAccuTaxCheck", round(_taxAccuTaxCheck / 100, 2));
  }
  // displayText("_taxAccuTaxCheck", 0);
  displayText("yourTaxPenalty", taxPenalty);


  // price impact 1 / ( 1 + x / r0) = (1 - I)
  // smart contract, change x,r0 equation to 1 / (1 + x / r0) for exact result 
  // x / r0 = a => price diff = 1 / (1 + a)^2
  // for simplicity + safety, a = 0.08, 0.05

  // for user: price impact based limit
  // for graph: price change based limit
  // so need price impact - price change relation
  // price impact accumulation => user limit
  // price change accumulation => global limit
  // x / r0 = a => price change = 1 / (1 + a)^2
}


runs['Stats'] = async function runStats() {
  displayText('priceCounter', (price / 1).toFixed(10));
  displayText('burnCounter', abbreviateNumber(parseInt(burnAmount / bnbDiv)));
  displayText('circulateCounter', abbreviateNumber(parseInt(realSupply / bnbDiv)));
  displayText('marketcapCounter', numberWithCommas(mcap.toFixed(0)));
  displayText('manualBurnCounter', burnPercentage);
  displayText('manualLPBurnCounter', burnLpPercentage);
  displayText('startMultiCounter', (mcap / 333).toFixed(0));

    //var elms_ = document.querySelectorAll("[id='priceCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', (price / 1).toFixed(10));
    //}
    //var elms_ = document.querySelectorAll("[id='burnCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', burnAmount / bnbDiv);
    //}
    //var elms_ = document.querySelectorAll("[id='circulateCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', realSupply / bnbDiv);
    //}
    //var elms_ = document.querySelectorAll("[id='marketcapCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0));
    //}
    //var elms_ = document.querySelectorAll("[id='manualBurnCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', burnPercentage);
    //}
    //var elms_ = document.querySelectorAll("[id='manualLPBurnCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', burnLpPercentage);
    //}
    //var elms_ = document.querySelectorAll("[id='startMultiCounter']");
    //if (elms_.length) {
    //elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0) / 333);
    //}
}

runPersonals['Stats'] = async function runStatsPersonal() {}

runs['Nft'] = async function runNft() {
  id2Names = {
    0: 'emeraldBoy',
    1: 'emeraldGirl',
    2: 'diamondBoy',
    3: 'diamondGirl',
  }

  var name2Ids = {};
  for (var id in id2Names) {
    var num = id2Names[id];
    name2Ids[num] = id;
  }

  totalNFTCount = 0;
  grades = ['diamond', 'emerald'];
  genders = ['Boy', 'Girl'];
  for (grade of grades) {
    for (gender of genders) {
      //         var elms_ = document.querySelectorAll("[id='" + grade + gender + "']");
      var elms_ = document.querySelectorAll("[id='" + grade + 'Border' + "']");
      if (elms_.length) {
        // jsonFile = JSON.parse(loadFile("assets/" + String(name2Ids[grade + gender]) + ".json"))
        for (var idx = 0; idx < elms_.length; idx++) {
          //             elms_[idx].setAttribute('src', 'assets/img/new/upf ' + grade.toLowerCase() + '.png');
          //             if (grade == 'diamond') {
          //               elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.png');
          //             } else if (grade == 'emerald') {
          //               elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.gif');
          //             }
        }
      }

      diamondBoyCount = (await funcs['nft']._totalItemCount(name2Ids[grade + gender]))[0] / 1;
      displayText_(grade + gender + "Count", diamondBoyCount);
      totalNFTCount += diamondBoyCount;
    }
  }

  displayText_("totalNFTCount", totalNFTCount);
  totalSupplyNFT = (await funcs['nft'].totalSupply())[0] / 1;
  console.log(totalSupplyNFT);
}


runPersonals['Nft'] = async function runNftPersonal() {
  myNFTtax = 0;
  myNFTcounts = (await funcs['nft'].balanceOf(currentAccount))[0] / 1;
  for (idx = 0; idx < myNFTcounts; idx++) {
    myNFTidx = (await funcs['nft'].tokenOfOwnerByIndex(currentAccount, idx))[0] / 1;
    myNFTitemIdx = (await funcs['nft']._itemById(myNFTidx))[0] / 1;
    myNFTimgName = JSON.parse(loadFile("assets/" + String(myNFTitemIdx) + '.json'))['name'];
    if (myNFTitemIdx == 4) {
      myNFTimgThumbSrc = "LegendaryOB.png";
      myNFTimgSrc = "OBanimationL.mp4";
      myNFTborder = "emerald";
      myNFTtax += 100;
    }
    if (myNFTitemIdx == 1) {
      myNFTimgThumbSrc = "LegendaryOG.png";
      myNFTimgSrc = "OGanimationL.mp4";
      myNFTborder = "emerald";
      myNFTtax += 100;
    }
    if (myNFTitemIdx == 2) {
      myNFTimgThumbSrc = "EpicOB.png";
      myNFTimgSrc = "EpicOB.png";
      myNFTborder = "diamond";
      myNFTtax += 50;
    }
    if (myNFTitemIdx == 3) {
      myNFTimgThumbSrc = "EpicOG.png";
      myNFTimgSrc = "EpicOG.png";
      myNFTborder = "diamond";
      myNFTtax += 50;
    }
    output = `
        <div class="col-12 col-lg-3 text-justify content">
          <div style="width: 100%; position: relative;">
            <a href="assets/img/new/${myNFTimgSrc}">
            <img src="assets/img/new/${myNFTimgThumbSrc}" style="top:0; left: 0; padding: 0px; height: auto;">
            </a>
          </div>
          <p>ID: ${myNFTidx}</p>
          <p>${myNFTimgName}</p>

        </div>
      `;
    myNFTs.innerHTML += output;


  }
  displayText_("totalMyNFTCount", myNFTcounts);

  displayText_("taxReduction", myNFTtax / 100);
}

runs['Taxs'] = async function runTaxs() { }

runPersonals['Taxs'] = async function runTaxsPersonal() {
  taxPenalty = 0;
  if (NOW < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
    taxPenalty = _taxAccuTaxCheck * _accuMulFactor / 100;
    if (15 < taxPenalty / 1) {
      taxPenalty = 15; // check
    }
  }
  displayText("yourTaxPenalty", taxPenalty);

  margin = 3;
  whaleTax = 0;
  impact = getImpact(tokenAmount, 10 ** 7);
  if (10 ** 7 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("10mSlippage", round(sellFee + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10 ** 8);
  if (10 ** 8 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("100mSlippage", round(sellFee + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10 ** 9);
  if (10 ** 9 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("1bSlippage", round(sellFee + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10 ** 10);
  if (10 ** 10 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("10bSlippage", round(sellFee + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
}



runs['Swap'] = async function runSwap() {
  source = getElement('swapInput');
  if (source) {
    source.addEventListener('input', inputHandlerBuy);
    source.addEventListener('propertychange', inputHandlerBuy); // for IE8
    // Firefox/Edge18-/IE9+ don’t fire on <select><option>
    // source.addEventListener('change', inputHandler); 
  } else {
    console.log('swapInput not ready');
  }

  swapComma("swapInput", false);
  swapComma("swapOuput", true);
}

runPersonals['Swap'] = async function runSwapPersonal() {
  balanceBNB = await provider.getBalance(currentAccount);
  displayText_("BNBbalance", round(balanceBNB / bnbDiv, 3));

  balanceUPF = (await funcs['upf'].balanceOf(currentAccount))[0];
  displayText_("UPFbalance", numberWithCommas(parseInt(balanceUPF / bnbDiv)));
  balance = balanceUPF;
}

runs['Staking'] = async function runStaking() {

  stakeBalance = await GET_VALUE(funcs['upf'], 'balanceOf', [adrs['stake']]);
  //_totalFundsReserved = await GET_VALUE(funcs['stake'], '_totalFundsReserved'); // 88315800000000000000000000000
  _totalFundsUsed = await GET_VALUE(funcs['stake'], '_totalFundsUsed');
  totalStaked = stakeBalance - (88315800000000000000000000000 - _totalFundsUsed);
  displayText('totalStaked', numberWithCommas(parseInt(totalStaked / bnbDiv)));
  displayText('totalValueLocked', '$ ' + abbreviateNumber(parseInt(price * stakeBalance / bnbDiv)));
  _totalFundsUsed = (await CALL(funcs['stake'], '_totalFundsUsed', [], false))[0] / 1;
  displayText('_totalFundsUsed', numberWithCommas(parseInt(_totalFundsUsed / bnbDiv)));

  typedStakeAmount = getElement('typedStakeAmount');
  if (typedStakeAmount) {
    typedStakeAmount.addEventListener('input', inputHandlerStake);
    typedStakeAmount.addEventListener('propertychange', inputHandlerStake); // for IE8
    // Firefox/Edge18-/IE9+ don’t fire on <select><option>
    // source.addEventListener('change', inputHandlerStake); 

    typedStakeAmount.value = '1,000,000,000';
  } else {
    console.log('typedStakeAmount not ready');
  }
}

runPersonals['Staking'] = async function runStakingPersonal() {
  allowance = (await CALL(funcs['upf'], 'allowance', [currentAccount, adrs['stake']], false))[0] / 1;
  approveStake = select("a#approveStake");
  if (10 ** 18 < allowance) { // used approve
    approveStake.classList.add('button-soon');
    approveStake.onclick = function () { return false; };
    displayText('approveStake', 'Approved');
  } else {
    approveStake.classList.remove('button-soon');
    approveStake.onclick = function () { approve(adrs['stake'], 10 ** 15); };
    displayText('approveStake', 'Approve');
  }

  _stakedAmounts = (await CALL(funcs['stake'], '_stakedAmounts', [currentAccount], false))[0] / 1 / 10 ** 18;
  _stakedTimes = (await CALL(funcs['stake'], '_stakedTimes', [currentAccount], false))[0] / 1;
  _stakedDurations = (await CALL(funcs['stake'], '_stakedDurations', [currentAccount], false))[0] / 1;
  // displayText('_stakedAmounts', numberWithCommas(_stakedAmounts));

  if (1e-18 < _stakedAmounts) {
    params = [ethers.utils.parseEther(String(_stakedAmounts)), _stakedDurations];
    calculateReward = (await CALL(funcs['stake'], 'calculateReward', params, false))[0] / 1;
  } else {
    calculateReward = 0;
  }
  displayText('calculateReward', numberWithCommas(parseInt(calculateReward / bnbDiv)));

  if (1 < _stakedAmounts) { // 0 or 1 is not staked
    stakeDurations = ['stake1d', 'stake7d', 'stake28d'];
    for (stakeDuration of stakeDurations) {
      stakeDuration_ = select('a#' + stakeDuration);
      stakeDuration_.classList.add('button-soon');
      stakeDuration_.onclick = function () { return false; }
      displayText(stakeDuration, 'Staked: ' + String(numberWithCommas(_stakedAmounts)));
    }

    _stakedTimeLeft = _stakedTimes + _stakedDurations - NOW / 1000;
    // displayText('_stakedTimeLeft', parseInt(_stakedTimeLeft / 60 / 60));
    unstake = select('a#unstake');
    if (0 < _stakedTimeLeft) {
      unstake.classList.add('button-soon');
      unstake.onclick = function () { return false; }
      displayText('unstake', 'Unstake after: ' + String(parseInt(_stakedTimeLeft / 60 / 60) + 1) + ' hours');
    } else {
      unstake.classList.remove('button-soon');
      unstake.onclick = function () { funstake(); }
      displayText('unstake', 'Unstake');
    }
  } else {
    stakeDurations = ['stake1d', 'stake7d', 'stake28d'];
    for (stakeDuration of stakeDurations) {
      stakeDuration_ = select('a#' + stakeDuration);
      stakeDuration_.classList.remove('button-soon');
    }
    displayText('stake1d', '1 days (APY 40 %) (Reward: 1M)');
    displayText('stake7d', '7 days (APY 80 %) (Reward: 12M)');
    displayText('stake28d', '28 days (APY 160 %) (Reward: 83M)');
  }

  _claimedAmounts = (await CALL(funcs['stake'], '_claimedAmounts', [currentAccount], false))[0] / 1;
  displayText('_claimedAmounts', numberWithCommas(parseInt(_claimedAmounts / bnbDiv)));
}



async function runPersonal() {
  _timeAccuTaxCheck = (await funcs['upf']._timeAccuTaxCheck(currentAccount))[0] / 1;
  _taxAccuTaxCheck = (await funcs['upf']._taxAccuTaxCheck(currentAccount))[0] / 1;
  displayText("connectResult", currentAccount + " <span>Loading</span>");

  
  if (getDiv("sellStatus").length) {
    testoverride = {
      from: currentAccount,
    };
    testUPFamount = (await conts['router'].functions.getAmountIn(ethers.utils.parseEther('0.1'), rO, rI))[0];

    // router: ETH_TRANSFER_FAILED
    conts['router'].estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(testUPFamount, 0, [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(NOW / 1000) + 100000, testoverride)
      .then((arg) => {
        console.log('SELL OK');
        displayText("sellStatus", "OK");
      }, (e) => {
        e = errMsg(e);
        console.log(e);
        displayText("sellStatus", "Check Sell Rules");
      }
     );
  }

  for (var section in runPersonals) {
    if (getDiv(section).length) {
      await runPersonals[section]();
    }
  }

  t = TT('personal done', t);
  displayText('debug', 'personal done');
  
  
}

/////////////////////////////////////////////////////////////
// to use async functions, we need to make it inits
async function runCode() {
  t = TT('codes loading', t);

  if (location.hostname == "") {
    alert('running in local!');
    console.log('running in local!');
    return false;
  }

  await loadCaches();

  if (!window.ethereum) {
    dappNeeded = "Use <span>DAPP</span> to view values correctly!";
    displayText("dappNeeded", dappNeeded);
    console.log('dapp needed');
    
    return false;
  }

  devNoticeString = "<p>If numbers not showing correctly, it means dev is upgrading :)</p><p>IF having trouble for anything, DM @ALLCOINLAB</p><p>All value can be changed or different due to network status!</p>";
  displayText("devNotice", devNoticeString);

  ethereum.on('chainChanged', handleChainChanged);
  ethereum.on('accountsChanged', handleAccountsChanged);

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  network = await provider.getNetwork();
  chainId = network.chainId;
  if (chainId != 56) {
    console.log('Not BSC');
    
    return false;
  }

  conts = {}
  funcs = {}
  for (var name in adrs) {
    if (['zero', 'burn', 'wbnb'].includes(name)) {
      continue;
    }

    conts[name] = new ethers.Contract(adrs[name], abis[name], provider);
    funcs[name] = conts[name].functions;
  }

  getRef();

  t = TT('head done', t);
  
  // without wallet connection

  connectWalletText = "<span style='font-size: 10px;'>Connect Wallet, Loading</span>";
  displayText("connectResult", connectWalletText);
  displayText("balanceStatus", connectWalletText);
  displayText("balanceIcon", connectWalletText);
  displayText("oneBuyLimitStatus", connectWalletText);
  displayText("oneSellLimitStatus", connectWalletText);

  displayText("claimable", connectWalletText);
  displayText("claimed", connectWalletText);

  displayText_("BNBbalance", connectWalletText);
  displayText_("UPFbalance", connectWalletText);


  totalSupply = (await funcs['upf'].totalSupply())[0];
  totalLpSupply = (await funcs['pair'].totalSupply())[0];

  reserveData = await funcs['pair'].getReserves();

  if (adrs['wbnb'] < adrs['upf']) { // BNB / UpFinity
    rI = reserveData[0];
    rO = reserveData[1];
  } else {
    rI = reserveData[1];
    rO = reserveData[0];
  }

  bnbAmount = rI / bnbDiv;
  tokenAmount = rO / bnbDiv;
  
  // stats
  burnAmount = (await funcs['upf'].balanceOf(adrs['burn']))[0];
  burnPercentage = burnAmount.mul(100).div(totalSupply);
  burnPercentage = burnPercentage.sub(50); // 50% burn at the start
  displayText("_manualburned", round(burnPercentage / 1, 1));
  burnLpAmount = (await funcs['pair'].balanceOf(adrs['burn']))[0];
  burnLpPercentage = burnLpAmount.mul(100).div(totalLpSupply);
  displayText("_manuallpburned", round(burnLpPercentage / 1, 1));

  busdAdr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  pricePairAdr = (await funcs['factory'].getPair(adrs['wbnb'], busdAdr))[0];
  pricePairC = new ethers.Contract(pricePairAdr, abis['pair'], provider);
  priceReserveData = await pricePairC.functions.getReserves();

  if (adrs['wbnb'] < busdAdr) { // BNB / busd
    pricerI = priceReserveData[0];
    pricerO = priceReserveData[1];
  } else {
    pricerI = priceReserveData[1];
    pricerO = priceReserveData[0];
  }

  price = rI / rO * pricerO / pricerI; // TODO: WBNB-BUSD, same decimal
  realSupply = totalSupply.sub(burnAmount);
  mcap = price * realSupply / bnbDiv;
  
  displayText("curPrice", parseInt(price * 1e9));
  
  await loadCB();
  await loadValues();

  cantsell = cantsellReason();

  if (cantsell != "") {
    displayText("cantSellStatus", "Sell Event");
    displayText("circuitBreakerStatus", cantsell);
    displayText("cbStatus", "Circuit Breaker ON");
    select("i#curStatus").classList.add('bi-exclamation-circle');
    select("i#curStatus").classList.add('text-warning');
    countDownTimer('cbDuration', (_curcuitBreakerTime / 1 + _curcuitBreakerDuration / 1 + 1.5 * 60 * 60) * 1000);
  } else {
    displayText("cbStatus", "Circuit Breaker OFF");
    select("i#curStatus").classList.add('bi-check-circle');
    select("i#curStatus").classList.add('text-success');
  }


  if (getDiv("Rewards").length) {
    rewardBalanceRaw = await provider.getBalance(adrs['reward']);
    rewardBalance = round(rewardBalanceRaw / bnbDiv, 3);
    displayText("totalUnclaimed", rewardBalance);
  }

  if ((getDiv("Status").length) | (getDiv("Taxs").length)) {
    upfinityBalance = (await funcs['upf'].balanceOf(adrs['upf']))[0];
    partyImpact = 0;
    if (_dividendPartyThreshold * 0.9 < upfinityBalance / 1) {
      displayText("dividendPartyStatus", "READY");
      partyImpact = _dividendPartyThreshold * 100 / rO; // roughly
      displayText("dividendPartyImpactMin", (partyImpact * 1).toFixed(1));
      displayText("dividendPartyImpactMax", (partyImpact * 2).toFixed(1));
    } else {
      displayText("dividendPartyStatus", "OFF");
    }
  }

  if (getDiv("buyStatus").length) {
    testoverride = {
      value: ethers.utils.parseEther('0.1'), // it require string number
    };
    conts['router'].estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(0, [adrs['wbnb'], adrs['upf']], adrs['router'], deadline, testoverride)
      .then((arg) => {
        console.log('BUY OK');
        displayText("buyStatus", "OK");
      }, (e) => {
        e = errMsg(e);
        console.log(e);
        displayText("buyStatus", "Contact @ALLCOINLAB");
      }
    );
  }
  
  if (getDiv("UpFinomics").length) {
    displayText("buyFee", buyFee / 100);
    displayText("sellFee", sellFee / 100);
    displayText("totalFee", totalFee / 100);

    displayChart();
  }

  for (var section in runs) {
    if (getDiv(section).length) {
      await runs[section]();
    }
  }

  t = TT('global done', t);
  displayText('debug', 'global done');

  // personal wallet infos
  afconnect()
  .then((res) => {
    if (res) {
      runPersonal();
    } else {
    }
  });

  var dateObj = new Date();

  dateObj.setDate(dateObj.getDate() + 1);


  t = TT('others done', t);
  displayText('debug', 'others done');

  // displayText('<iframe data-aa="1829702" src="//ad.a-ads.com/1829702?size=120x60" style="width:120px; height:60px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>');

  // if staked, run staked();

}

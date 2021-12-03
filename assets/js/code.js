console.log('init');
displayText('debug', 'init');
t = T();

body = select('body');
bodyClassList = body.classList;
bodyClassList.add('container');
bodyClassList.add('center');
bodyClassList.add('text-center');
body.style.width = 'auto';
body.style.height = 'auto';

header = select('header#header');
headerClassList = header.classList;
headerClassList.add('header');
headerClassList.add('fixed-top');
headerClassList.add('d-flex');
headerClassList.add('align-items-center');
headerClassList.add('header-scrolled');
header.style.width = 'auto';


getExtFile('header', 'sections/Header.html'); // header
getExtFile('Swap', 'sections/Swap.html');

getExtFile('Donations', 'sections/Donations.html');
getExtFile('Ecosystem', 'sections/Ecosystem.html');
getExtFile('FAQs', 'sections/FAQs.html');
getExtFile('footer', 'sections/Footer.html'); // footer
// getExtFile('Gallery', 'sections/Gallery.html');

// getExtFile('hero', 'sections/Home.html'); // hero
getExtFile('Motivation', 'sections/Motivation.html');
getExtFile('Notice', 'sections/Notice.html');
getExtFile('Patchs', 'sections/Patchs.html');
getExtFile('Roadmap', 'sections/Roadmap.html');
// getExtFile('Testimonials', 'sections/Testimonials.html');
getExtFile('Team', 'sections/Team.html');

needValue = false;
needValue |= getExtFile('Airdrop', 'sections/Airdrop.html');
needValue |= getExtFile('FAQs', 'sections/FAQs.html');
needValue |= getExtFile('Features', 'sections/Features.html');
needValue |= getExtFile('Rewards', 'sections/Rewards.html');
needValue |= getExtFile('SAFUs', 'sections/SAFUs.html');
needValue |= getExtFile('Status', 'sections/Status.html');
needValue |= getExtFile('Taxs', 'sections/Taxs.html');
needValue |= getExtFile('UpFinomics', 'sections/UpFinomics.html');
needValue |= getExtFile('Staking', 'sections/Staking.html');

NOW = Date.now();

t = TT('init done', t);
displayText('debug', 'init done');

$('#popup').show();
$(document).click(function (e) {
  if ($('#popup').is(':visible')) {
    $('#popup').hide();
  }
});

(async function() { // to use async things 
  
  
 
  /////////////////////////////////////////////////////////////
  // inits

  if (location.hostname == "") {
    alert('running in local!');
    return;

  }
  
  if (typeof window.ethereum === 'undefined') {
    if (getDiv("Team").length) {
    } else {
      alert('Website tools are available with Dapp');
    }
    init();
    return;
  }
  
  displayText("devNotice", "<p>If numbers not showing correctly, it means dev is upgrading :)</p><p>IF having trouble for anything, DM @ALLCOINLAB</p><p>All value can be changed or different due to network status!</p>");
  
  ethereum.on('chainChanged', handleChainChanged);
  ethereum.on('accountsChanged', handleAccountsChanged);
    
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();    
  
  syncDelay(100);
  network = await provider.getNetwork();
  chainId = network.chainId;
  if (chainId == 56) {
    console.log('mainnet');
    rewardAdr = '0x373764c3deD9316Af3dA1434ccba32caeDeC09f5';
    freeAirdropAdr = '0x17f90D36E2B11999CBEbf5E36e09E7079Ea9e2a4';
    airdropAdr = '0x53a1239a6C3c0cD6458C7Ee9c07815544a537004';
    nftAdr = '0x24DF47F315E1ae831798d0B0403DbaB2B9f1a3aD';
    stakeAdr = '0xCeC0Ee6071571d77cFcD52244D7A1D875f71d32D';
  } else {
    alert('Change to BSC network and refresh!');
    return;
  }
    
  routerC = new ethers.Contract(routerAdr, routerAbi, provider);
  routerF = routerC.functions;
  factoryAdr = (await CALL(routerF, 'factory', params=null, cache=false))[0];
  factoryC = new ethers.Contract(factoryAdr, factoryAbi, provider);
  factoryF = factoryC.functions;
  
  pairAdr = (await CALL(factoryF, 'getPair', [wbnbAdr, upfinityAdr], cache=false))[0];
  pairC = new ethers.Contract(pairAdr, pairAbi, provider);
  pairF = pairC.functions;
  
  upfinityC = new ethers.Contract(upfinityAdr, upfinityAbi, provider);
  upfinityF = upfinityC.functions;
  rewardC = new ethers.Contract(rewardAdr, rewardAbi, provider);
  rewardF = rewardC.functions;
  freeAirdropC = new ethers.Contract(freeAirdropAdr, freeAirdropAbi, provider);
  freeAirdropF = freeAirdropC.functions;
  airdropC = new ethers.Contract(airdropAdr, airdropAbi, provider);
  airdropF = airdropC.functions;
  nftC = new ethers.Contract(nftAdr, nftAbi , provider);
  nftF = nftC.functions;
  stakeC = new ethers.Contract(stakeAdr, stakeAbi, provider);
  stakeF = stakeC.functions;

  x = getElement("referralAdrDisplay");
  if (x != null) {
    refAdr = GetURLParameter("ref");
    if (typeof refAdr === 'undefined') {
    
      x.innerHTML = 'None';
    } else {
      refAdr = getChecksumAddress(refAdr);
      if (refAdr == '') {
        x.innerHTML = 'Wrong Format';
      } else {
        x.innerHTML = refAdr;
      }
    }
  }
  
  t = TT('head done', t);
  displayText('debug', 'head done');
  // without wallet connection
  
  
  connectWalletText = "<span style='font-size: 10px;'>Loading, Connect wallet to use claim, etc!</span>";
  displayText("connectResult", connectWalletText);
  displayText("balanceStatus", connectWalletText);
  <!-- displayText("balanceIcon", connectWalletText); --> // big icon
  displayText("oneBuyLimitStatus", connectWalletText);
  displayText("oneSellLimitStatus", connectWalletText);
  
  displayText("claimable", connectWalletText);
  displayText("claimed", connectWalletText);

  displayText_("BNBbalance", connectWalletText);
  displayText_("UPFbalance", connectWalletText);
	
  totalSupply = (await CALL(upfinityF, 'totalSupply'))[0];
  totalLpSupply = (await pairF.totalSupply())[0];
  
  reserveData = await pairF.getReserves();

  if (wbnbAdr < upfinityAdr) { // BNB / UpFinity
    rI = reserveData[0]; 
    rO = reserveData[1];
  } else {
    rI = reserveData[1];
    rO = reserveData[0];
  }
  
  bnbAmount = rI / bnbDiv;
  tokenAmount = rO / bnbDiv;
  
  if (needValue) {
    if ((getDiv('Features').length) | (getDiv('Status').length) | (getDiv('Taxs').length) | (getDiv('Rules').length)) {
			getExtFile('Rules', 'sections/Rules.html');
      await loadValues();
      t = TT('value done', t);
      displayText('debug', 'value done');
    }

  }
  
  

  
  
  if (getDiv("Airdrop").length) {
    // airdrop
    freeAirdropBalance = (await upfinityF.balanceOf(freeAirdropAdr))[0];
    dollarsPerBNB = (await airdropF._dollarsPerBNB())[0] / 1;
    oneDollarBNB = 1 / dollarsPerBNB; // 1 BNB = 400$ for simplicity + optimize gas fee
    oneDollarUPF = (await routerF.getAmountOut(ethers.utils.parseEther(oneDollarBNB.toString()), rI, rO))[0];
    _freeAirdropSystem = (await upfinityF._freeAirdropSystem())[0]
    displayText("freeAirdropBalance", "Free Airdrop (" + _freeAirdropSystem + ") balance: [" + numberWithCommas(Math.floor(freeAirdropBalance.div(oneDollarUPF) / 1)) + " $]");

    airdropBalance = (await upfinityF.balanceOf(airdropAdr))[0];
    _airdropSystem = (await upfinityF._airdropSystem())[0]
    displayText("airdropBalance", "Airdrop (" + _airdropSystem + ") balance: [" + numberWithCommas(Math.floor(airdropBalance.div(oneDollarUPF) / 1)) + "$]");
  }
  
  
  if (getDiv("Rewards").length) {
    rewardBalanceRaw = await provider.getBalance(rewardAdr);
    rewardBalance = round(rewardBalanceRaw / bnbDiv, 3);
    displayText("totalUnclaimed", rewardBalance);
  }
  
  if ((getDiv("Status").length) | (getDiv("Taxs").length)) {
    upfinityBalance = (await upfinityF.balanceOf(upfinityAdr))[0];
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
  
  if (getDiv("Status").length) {
    maxBuyUPF = rO / 10000 * _maxTxNume; // 10% of current liquidity
    maxBuyBNB = (await routerF.getAmountIn(ethers.utils.parseEther(String(maxBuyUPF / bnbDiv)), rI, rO))[0];


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

    sellCooltime_ = _antiDumpTimer / 1 + _antiDumpDuration / 1;
    if (NOW < sellCooltime_) {
      sellCooltime = sellCooltime_;
      d = new Date(sellCooltime * 1000);
      displayText("sellCooltime", d);
    }
    
    
    // stats
    burnAmount = (await upfinityF.balanceOf(burnAdr))[0];
    burnPercentage = burnAmount.mul(100).div(totalSupply);
    burnPercentage = burnPercentage.sub(50); // 50% burn at the start
    displayText("_manualburned", round(burnPercentage / 1, 1));
    burnLpAmount = (await pairF.balanceOf(burnAdr))[0];
    burnLpPercentage = burnLpAmount.mul(100).div(totalLpSupply);
    displayText("_manuallpburned", round(burnLpPercentage / 1, 1));




    busdAdr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    pricePairAdr = (await factoryF.getPair(wbnbAdr, busdAdr))[0];
    pricePairC = new ethers.Contract(pricePairAdr, pairAbi, provider);
    priceReserveData = await pricePairC.functions.getReserves();

    if (wbnbAdr < busdAdr) { // BNB / busd
      pricerI = priceReserveData[0]; 
      pricerO = priceReserveData[1];
    } else {
      pricerI = priceReserveData[1];
      pricerO = priceReserveData[0];
    }
    
    price = rI / rO * pricerO / pricerI; // TODO: WBNB-BUSD, same decimal
    realSupply = totalSupply.sub(burnAmount);
    mcap = price * realSupply / bnbDiv;

    var elms_ = document.querySelectorAll("[id='priceCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', (price / 1).toFixed(10));
    }
    var elms_ = document.querySelectorAll("[id='burnCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', burnAmount / bnbDiv);
    }
    var elms_ = document.querySelectorAll("[id='circulateCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', realSupply / bnbDiv);
    }
    var elms_ = document.querySelectorAll("[id='marketcapCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0));
    }
    var elms_ = document.querySelectorAll("[id='manualBurnCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', burnPercentage);
    }
    var elms_ = document.querySelectorAll("[id='manualLPBurnCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', burnLpPercentage);
    }
    var elms_ = document.querySelectorAll("[id='startMultiCounter']");
    if (elms_.length) {
    elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0) / 333);
    }
  }
  
  t = TT('global done', t);
  displayText('debug', 'global done');
  
  // personal wallet infos
  currentAccount = await afconnect();
  
  _timeAccuTaxCheck = (await upfinityF._timeAccuTaxCheck(currentAccount))[0] / 1;
  _taxAccuTaxCheck = (await upfinityF._taxAccuTaxCheck(currentAccount))[0] / 1;
  displayText("connectResult", currentAccount + " <span>Loading</span>");
  
  
  
	testoverride = {
    value: ethers.utils.parseEther('0.1'), // it require string number
  };
  routerC.estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(0, [wbnbAdr, upfinityAdr], currentAccount, deadline, testoverride)
  .then((arg) => {
    displayText("buyStatus", "OK");
  }, (e) => {
    e = errMsg(e);
    console.log(e);
    displayText("buyStatus", "Contact @ALLCOINLAB");
    }
  );
  
  testoverride = {
    from: currentAccount,
  };
  testUPFamount = (await routerC.functions.getAmountIn(ethers.utils.parseEther('0.1'), rO, rI))[0];
  routerC.estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(testUPFamount, 0, [upfinityAdr, wbnbAdr], currentAccount, Math.floor(NOW / 1000) + 100000, testoverride)
  .then((arg) => {
    displayText("sellStatus", "OK");
  }, (e) => {
    e = errMsg(e);
    console.log(e);
    displayText("sellStatus", "Check Sell Rules");
    }
  );
  
  if (getDiv("Status").length) {
    balanceUPF = (await upfinityF.balanceOf(currentAccount))[0];
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
      maxBuyBNB_ = (await routerF.getAmountIn(buyLimit, rI, rO))[0];
      if (maxBuyBNB_ / 1 < maxBuyBNB / 1) {
        maxBuyBNB = maxBuyBNB_;
      }

      displayText("oneBuyLimitStatus", round(maxBuyBNB / bnbDiv, 2) + ' BNB');  
    }
  
  
  
  
    // it may display last big value

    _buySellTimer = (await upfinityF._buySellTimer(currentAccount))[0] / 1;
    sellCooltime_ = _buySellTimer + _buySellTimeDuration;
    if (sellCooltime / 1 < sellCooltime_ / 1) {
      sellCooltime = sellCooltime_;
      d = new Date(sellCooltime * 1000);
      d = d.toString().split(' ').slice(1, 5).join(' ');
      displayText("sellCooltime", d);
    }

    blacklisted = (await upfinityF.blacklisted(currentAccount))[0];

    cantsell = cantsellReason();

    if (cantsell != "") {
      displayText("cantSellStatus", "Sell Event");
      displayText("circuitBreakerStatus", cantsell);
    }


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
  
  t = TT('personal done', t);
  displayText('debug', 'personal done');



  if (getDiv("Taxs").length) {
    taxPenalty = 0;
    if (NOW < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
      taxPenalty = _taxAccuTaxCheck * _accuMulFactor / 100;
      if (15 < taxPenalty / 1) {
        taxPenalty = 15; // check
      }
    }
    displayText("yourTaxPenalty", taxPenalty);

	  
    base = 12;
    margin = 3;
    whaleTax = 0;
    impact = getImpact(tokenAmount, 10**7);
    if (10**7 / tokenAmount * 100 > 1) {
      whaleTax = 4;
    } else {
      whaleTax = 0;
    }
    displayText("10mSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
    impact = getImpact(tokenAmount, 10**8);
    if (10**8 / tokenAmount * 100 > 1) {
      whaleTax = 4;
    } else {
      whaleTax = 0;
    }
    displayText("100mSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
    impact = getImpact(tokenAmount, 10**9);
    if (10**9 / tokenAmount * 100 > 1) {
      whaleTax = 4;
    } else {
      whaleTax = 0;
    }
    displayText("1bSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
    impact = getImpact(tokenAmount, 10**10);
    if (10**10 / tokenAmount * 100 > 1) {
      whaleTax = 4;
    } else {
      whaleTax = 0;
    }
    displayText("10bSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  }
 
  
  if ((getDiv("nft").length) | (getDiv("Status").length)) {
    id2Names = {
      0: 'emeraldBoy',
      1: 'emeraldGirl',
      2: 'diamondBoy',
      3: 'diamondGirl',
    }

    var name2Ids = {};
    for(var id in id2Names)
    {
        var num = id2Names[id];
        name2Ids[num] = id;
    }

    totalNFTCount = 0;
    grades = ['diamond', 'emerald'];
    genders = ['Boy', 'Girl'];
    for (grade of grades) {
      for (gender of genders) {
        var elms_ = document.querySelectorAll("[id='" + grade + gender + "']");
        if (elms_.length) {
          // jsonFile = JSON.parse(loadFile("assets/" + String(name2Ids[grade + gender]) + ".json"))
          for (var idx = 0; idx < elms_.length; idx++) {
            // elms_[idx].setAttribute('src', jsonFile['image']);
            if (grade == 'diamond') {
              elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.png');
            } else if (grade == 'emerald') {
              elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.gif');
            }
          }
        }

        diamondBoyCount = (await nftF._totalItemCount(name2Ids[grade + gender]))[0] / 1 + 5;
        displayText_(grade + gender + "Count", diamondBoyCount);
        totalNFTCount += diamondBoyCount;
      }
    }

    displayText_("totalNFTCount", totalNFTCount);
    totalSupplyNFT = (await nftF.totalSupply())[0] / 1;
    console.log(totalSupplyNFT);
    
    myNFTs = getElement("myNFTs");
    if (myNFTs) {
      myNFTtax = 0;
      myNFTcounts = (await nftF.balanceOf(currentAccount))[0] / 1;
      for (idx = 0; idx < myNFTcounts; idx++) {
        myNFTidx = (await nftF.tokenOfOwnerByIndex(currentAccount, idx))[0] / 1;
        myNFTitemIdx = (await nftF._itemById(myNFTidx))[0] / 1;
        myNFTimgName = JSON.parse(loadFile("assets/" + String(myNFTitemIdx) + '.json'))['name'];
        if (myNFTitemIdx == 0) {
          myNFTimgThumbSrc = "boy_thumb.gif";
          myNFTimgSrc = "boy.gif";
          myNFTborder = "emerald";
          myNFTtax += 100;
        }
        if (myNFTitemIdx == 1) {
          myNFTimgThumbSrc = "girl_thumb.gif";
          myNFTimgSrc = "girl.gif";
          myNFTborder = "emerald";
          myNFTtax += 100;
        }
        if (myNFTitemIdx == 2) {
          myNFTimgThumbSrc = "boy_thumb.png";
          myNFTimgSrc = "boy.png";
          myNFTborder = "diamond";
          myNFTtax += 50;
        }
        if (myNFTitemIdx == 3) {
          myNFTimgThumbSrc = "girl_thumb.png";
          myNFTimgSrc = "girl.png";
          myNFTborder = "diamond";
          myNFTtax += 50;
        }
        output = `
          <div class="col-12 col-lg-3 text-justify content">
            <div style="width: 100%; position: relative;">
              <a href="assets/img/nft/origins/${myNFTimgSrc}">
              <img src="assets/img/nft/origins/${myNFTimgThumbSrc}" style="top:0; left: 0; padding: 20px; height: auto;">
              <img src="assets/img/nft/origins/${myNFTborder}_thumb.png" style="position: absolute; top:0; left: 0;">
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
  }
  
  if (getDiv("swap").length) {
    source = getElement('swapInput');
    if (source) {
      source.addEventListener('input', inputHandlerBuy);
      source.addEventListener('propertychange', inputHandlerBuy); // for IE8
      // Firefox/Edge18-/IE9+ don’t fire on <select><option>
      // source.addEventListener('change', inputHandler); 
    } else {
      console.log('swapInput not ready');
    }
  
    balanceBNB = await provider.getBalance(currentAccount);
    displayText_("BNBbalance", round(balanceBNB / bnbDiv, 3));

    balanceUPF = (await upfinityF.balanceOf(currentAccount))[0];
    displayText_("UPFbalance", numberWithCommas(parseInt(balanceUPF / bnbDiv)));
    balance = balanceUPF;

    swapComma("swapInput", false);
    swapComma("swapOuput", true);
  }
	
  if (getDiv("Staking").length) {
    
    stakeBalance = await GET_VALUE(upfinityF, 'balanceOf', [stakeAdr]);
    //_totalFundsReserved = await GET_VALUE(stakeF, '_totalFundsReserved'); // 88315800000000000000000000000
    _totalFundsUsed = await GET_VALUE(stakeF, '_totalFundsUsed');
    totalStaked = stakeBalance - (88315800000000000000000000000 - _totalFundsUsed);
    displayText('totalStaked', numberWithCommas(parseInt(totalStaked / bnbDiv)));
    displayText('totalValueLocked', abbreviateNumber(parseInt(price * totalStaked));
    _totalFundsUsed = (await CALL(stakeF, '_totalFundsUsed', [], false))[0] / 1;
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

    allowance = (await CALL(upfinityF, 'allowance', [currentAccount, stakeAdr], false))[0] / 1;
    approveStake = select("a#approveStake");
    if (10 ** 18 < allowance) { // used approve
      approveStake.classList.add('button-soon');
      approveStake.onclick = function () { return false; };
      displayText('approveStake', 'Approved');
    } else {
      approveStake.classList.remove('button-soon');
      approveStake.onclick = function () { approve(stakeAdr, 10 ** 15); };
      displayText('approveStake', 'Approve');
    }

    _stakedAmounts = (await CALL(stakeF, '_stakedAmounts', [currentAccount], false))[0] / 1 / 10 ** 18;
    _stakedTimes = (await CALL(stakeF, '_stakedTimes', [currentAccount], false))[0] / 1;
    _stakedDurations = (await CALL(stakeF, '_stakedDurations', [currentAccount], false))[0] / 1;
    // displayText('_stakedAmounts', numberWithCommas(_stakedAmounts));

    calculateReward = (await CALL(stakeF, 'calculateReward', [ethers.utils.parseEther(String(_stakedAmounts)), _stakedDurations], false))[0] / 1;
    displayText('calculateReward', numberWithCommas(calculateReward / bnbDiv));
    
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
        unstake.onclick = function () { unstake(); }
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

    _claimedAmounts = (await CALL(stakeF, '_claimedAmounts', [currentAccount], false))[0] / 1;
    displayText('_claimedAmounts', numberWithCommas(parseInt(_claimedAmounts / bnbDiv)));
  }

  if (getDiv("UpFinomics").length) {
    displayText("buyFee", buyFee / 100);
    displayText("sellFee", sellFee / 100);
    displayText("totalFee", totalFee / 100);
  
    chart = document.querySelector('#SellTaxChart');
    if (chart) {
      new Chart(document.querySelector('#SellTaxChart'), {
      type: 'doughnut',
      data: {
        labels: [
        'Manual Buy: ' + String(_manualBuyFee / 100) + '%',
        'Rewards: ' + String((_dipRewardFee + _improvedRewardFee) * multiplier / 100) + '%',
        'Liquidity: ' + String(_liquidityFee * 2 * multiplier / 100) + '%', // half
        'Marketing: ' + String(_projectFundFee / 100) + '%',
        'Ecosystem: ' + String(_projectFundFee / 100) + '%',
        'Burn/Redist/etc: ' + String((_autoBurnFee + redistributionFee) * multiplier / 100) + '%',
        ],
        datasets: [{
        label: 'Sell Tax',
        data: [_manualBuyFee / 100, (_dipRewardFee + _improvedRewardFee) * multiplier / 100, _liquidityFee * 2 * multiplier  / 100, _projectFundFee / 100, _projectFundFee / 100, (_autoBurnFee + redistributionFee) * multiplier / 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(40, 167, 69)',
          'rgb(162, 74, 96)',
          'rgb(234, 72, 23)',				  
        ],
        hoverOffset: 4
        }],
      },
      options: {
        plugins: {
          legend: {
            <!-- position: 'chartArea' -->
            position: 'right',
            labels: {
	      boxWidth: 5,
	    }
          }
        }
      }
      });
    }

    chart = document.querySelector('#TokenDistributionChart');
    if (chart) {
      new Chart(document.querySelector('#TokenDistributionChart'), {
      type: 'doughnut',
      data: {
        labels: [
        'Burn: 50%',
        'Liquidity: 40%',
        'Minus Tax: 2%',
        'Project: 8%',
        ],
        datasets: [{
        label: 'Token Distribution',
        data: [50, 40, 2, 8],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(40, 167, 69)',
        ],
        hoverOffset: 4
        }],
      },
      options: {
        plugins: {
          legend: {
            <!-- position: 'chartArea' -->
            position: 'right',
            labels: {
	      boxWidth: 5,
	    }
          }
        }
      }
      });
    }
  }
  
  
  const countDownTimer = function (id, date) {
    var _vDate = new Date(date); // exact date UTC
    var _second = 1000; 
    var _minute = _second * 60; 
    var _hour = _minute * 60; 
    var _day = _hour * 24; 
    var timer; 
    
    function showRemaining() { 
      var date = new Date(); 
      var now =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
       date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
      var distDt = _vDate - now; 
      if (distDt < 0) { 
        clearInterval(timer); 
        displayText_(id, 'Mint!');
        return;
      } 
      
      var days = Math.floor(distDt / _day); 
      var hours = Math.floor((distDt % _day) / _hour); 
      var minutes = Math.floor((distDt % _hour) / _minute); 
      var seconds = Math.floor((distDt % _minute) / _second); 
      //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
      
      var elms = document.querySelectorAll("[id='" + id + "']");
      if (elms.length) {
        for (var idx = 0; idx < elms.length; idx++) {
          elms[idx].textContent = "Mint!";
          continue;
          elms[idx].textContent = days + 'd '; 
          elms[idx].textContent += hours + 'h ';
          elms[idx].textContent += minutes + 'm '; 
          elms[idx].textContent += seconds + 's';
        }
      }
      
    } 
    timer = setInterval(showRemaining, 1000); 
  } 
  
  var dateObj = new Date(); 
  
  dateObj.setDate(dateObj.getDate() + 1); 
  countDownTimer('NFTcountDown', '11/16/2021 2:59 PM'); // 내일까지 
  


  
t = TT('others done', t);
displayText('debug', 'others done');
  displayText("connectResult", currentAccount + " <span>Done!</span>");
	
  // displayText('<iframe data-aa="1829702" src="//ad.a-ads.com/1829702?size=120x60" style="width:120px; height:60px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>');
  
	// if staked, run staked();
  init();
}());

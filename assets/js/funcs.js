function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

  function syncDelay(milliseconds){
   var start = new Date().getTime();
   var end=0;
   while( (end-start) < milliseconds){
       end = new Date().getTime();
   }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getChecksumAddress(address) {
    try {
      checksumAdr = ethers.utils.getAddress(address);
    } catch (error) {
      alert('Wrong Format Address: [' + address + ']');
      
      return '';
    }
    return checksumAdr;
  }
  
  function round(value, n) {
    return value.toFixed(n);
  }
  function BNB(value) {
    return round(value / bnbDiv, 8);
  }
  
  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B", "T", "Q"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(2);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function handleChainChanged(_chainId) {
    // Reload the page
    window.location.reload();
  }
  
  function displayText(id, text) {
    x = document.getElementById(id);
    x.innerHTML = text;
  }

  function displayText_(id, text) {
    var elms = document.querySelectorAll("[id='" + id + "']");

    for(var i = 0; i < elms.length; i++) 
      elms[i].innerHTML = text;
  }
  
  function displayText(id, text) {
    // var elms = document.querySelectorAll("[id='" + id + "']");

    // for(var i = 0; i < elms.length; i++) 
    //   elms[i].innerHTML = text;
  }
  
  function displayPersonalInformations(currentAccount) {
  
    displayText("connectResult", currentAccount);
      // elem = document.getElementById("typedRefAdr");
      // elem.value = currentAccount;
    
    rewardC.functions.calBNB(currentAccount).then(function (balanceInfo) {
        claimableBalance = BNB(ethers.utils.formatEther(balanceInfo[0]) * bnbDiv);
        // document.getElementById('claimable').innerHTML = claimableBalance.toString() + ' BNB';
      });
    
    rewardC.functions.claimedBNB(currentAccount).then(function (balanceInfo) {
        claimedBalance = BNB(ethers.utils.formatEther(balanceInfo[0]) * bnbDiv);
        // document.getElementById('claimed').innerHTML = claimedBalance.toString() + ' BNB';
      });
	

  }
  
  async function ahandleAccountsChanged(accounts) {
    if (accounts.length == 0) {
      displayText("connectResult", 'Please Connect Metamask');
      return;
    }
    
    currentAccount = getChecksumAddress(accounts[0]);
    displayPersonalInformations(currentAccount);
    
    return currentAccount;
  }
  
  function handleAccountsChanged(accounts) {
    if (accounts.length == 0) {
      displayText("connectResult", 'Please Connect Metamask');
      return;
    }
    
    currentAccount = getChecksumAddress(accounts[0]);
    displayPersonalInformations(currentAccount);
    
    return currentAccount;
  }
  
  async function afconnect() {
		accounts = await ethereum
		.request({ method: 'eth_requestAccounts' }); // eth_requestAccounts
    
    currentAccount = await ahandleAccountsChanged(accounts);
    
    return currentAccount;		
	}
  
	function fconnect() {
		ethereum
		.request({ method: 'eth_requestAccounts' }) // eth_requestAccounts
		.then(handleAccountsChanged)
		.catch((err) => {
			if (err.code == 4001) {
				// EIP-1193 userRejectedRequest error
				// If this happens, the user rejected the connection request.
        displayText("connectResult", '<span>You Rejected! Connect wallet to use claim, etc!</span>');
			} else {
				console.error(err);
			}
		});
	}

	function fclaim() {
		if (typeof rewardC === 'undefined') {
      document.getElementById('claimResult').innerHTML = 'Connect Metamask to Claim!';
      return;
    }
    
    const rewardSigner = rewardC.connect(signer);
    
    rewardSigner.claimBNB().then(function (result) {
      document.getElementById('claimResult').innerHTML = claimableBalance.toString() + ' BNB claimed!';
      document.getElementById('claimHash').innerHTML = result['hash'];
    });
	}
  
  
  
  
  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
  }
  

  
  function copyValue(value) {
    navigator.clipboard.writeText(value);
  }
  function copyAdr(id, adr) {
    copyValue(adr);
    displayText(id, "Copied");
    <!-- doToast('Copied!' + adr); -->
    <!-- var element = document.getElementById("copyAdrIcon"); -->
    <!-- element.classList.remove("fa-copy"); -->
    <!-- element.classList.add("fa-check"); -->
  }
  
  function doToast(text) {
    x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
  }

  function getRefLink() {
    elem = document.getElementById("typedRefAdr");
    address = getChecksumAddress(elem.value);
    if (address == '') {
      return;
    }
    
    refLink = refLinkPrefix + elem.value;
    copyValue(refLink);
    alert('Copied! Spread this to everywhere to get 5% referral bonus!: ' + refLink);
    
    x = document.getElementById("getRefLinkButton");
    x.innerHTML = "Copied";
  }
  
  function getCommunityAdr() {
    elem = document.getElementById("typedCommunityAdr");
    address = getChecksumAddress(elem.value);
    
    if (address == '') {
      return;
    }
    
    tokenC = new ethers.Contract(address, tokenAbi, provider);
    (async function() {
      balanceData = await tokenC.functions.balanceOf(currentAccount);
      balance = balanceData[0];
      
      // check balance
      if (balance == 0) { // don't have one
        alert("You don't have token [" + address + "]");
        return;
      }
      
      
      communityBonus = (await freeAirdropC.functions._communityBonus(address))[0] / 100;
      
      elem = document.getElementById("displayCommunityAdrBonus");
      elem.innerHTML = "You will get [" + communityBonus + "]% more tokens!";
      
      communityToken = address;
    }());
  }
  
  function getImpact(r1, x) {
    return x * 0.9975 / (r1 + x * 0.9975);
  }
  
  function claimFreeAirdrop() {
    refAdr = GetURLParameter("ref");
    if (typeof refAdr === 'undefined') {
      refAdr = "0x000000000000000000000000000000000000dEaD";
    }
    
    
    (async function() {
      balanceData = await upfinityC.functions.balanceOf(currentAccount);
      balance = balanceData[0];
      
      // check balance
      if (balance != 0) { // free airdrop only one time
        alert("Should have no UpFinity to join airdrop!");
        return;
      }
      
      doneFreeAirdrop = await freeAirdropC.functions._doneFreeAirdrop(currentAccount);
      doneFreeAirdrop = doneFreeAirdrop[0];
      if (doneFreeAirdrop == 2) { // already done airdrop
        alert(currentAccount + " already done free airdrop!");
        return;
      }
      
      prompt_value = prompt('By getting this Airdrop, this wallet CANNOT TRADE UPFINITY until 21.12.07, type [confirm] to proceed');
      if (prompt_value != 'confirm') {
        alert('user cancelled airdrop');
        return;
      }
      
      communityToken = "0x000000000000000000000000000000000000dEaD";
      const freeAirdropSigner = freeAirdropC.connect(signer);      
      freeAirdropSigner.doFreeAirdrop(refAdr, communityToken).then((arg) => {
          console.log(arg);
      }, (error) => {
          console.log(error['data']['message']);
          if (error['data']['message'] == 'execution reverted: SafeMath: subtraction overflow') {
            alert('free airdrop ended!');
          }
      });
    }());
  }
  
  function claimAirdrop(dollarCount) {
    refAdr = GetURLParameter("ref");
    if (typeof refAdr === 'undefined') {
      refAdr = "0x000000000000000000000000000000000000dEaD";
    }

    (async function() {
      balanceData = await upfinityC.functions.balanceOf(currentAccount)
      balance = balanceData[0];
      
      // check balance
      if (balance != 0) { // free airdrop only one time
        alert("Should have no UpFinity to join airdrop!");
        return;
      }
      
      _doneFreeAirdrop = await freeAirdropC.functions._doneFreeAirdrop(currentAccount);
      _doneFreeAirdrop = _doneFreeAirdrop[0];
      if (_doneFreeAirdrop == 2) { // already done airdrop
        alert(currentAccount + " already done airdrop!");
        return;
      }
      
      dollarsPerBNBData = await airdropC.functions._dollarsPerBNB();
      dollarsPerBNB = dollarsPerBNBData[0];
    
      oneDollar = 1 / dollarsPerBNB; // 1 BNB = 400$ for simplicity + optimize gas fee
      
      multiDollars = dollarCount * oneDollar;
      const overrides = {
        value: ethers.utils.parseEther(multiDollars.toString()), // it require string number
      }
      
      prompt_value = prompt('Due to free (or big bonus) given by this Airdrop, this wallet CANNOT TRADE UPFINITY until 21.12.07, type [confirm] to proceed');
      if (prompt_value != 'confirm') {
        alert('user cancelled airdrop');
        return;
      }
      
      const airdropSigner = airdropC.connect(signer);
      airdropSigner.doAirdrop(refAdr, dollarCount, communityToken, overrides).then((arg) => {
          console.log(arg);
      }, (error) => {
          console.log(error['data']['message']);
          if (error['data']['message'] == 'execution reverted: SafeMath: subtraction overflow') {
            alert('airdrop ended!');
          }
      });
    }());
  }
  
  async function addUPF() {
    const tokenAddress = '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae';
    const tokenSymbol = 'UPF';
    const tokenDecimals = 18;
    const tokenImage = 'http://www.theupfinity.com/assets/img/logo.png';

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        alert('UpFinity added!');
      } else {
        alert('Filed to add!');
      }
    } catch (error) {
      alert(error);
    }
  }
  
  
function mintNFT(name, isBoy) {
  refAdr = GetURLParameter("ref");
  if (typeof refAdr === 'undefined') {
    refAdr = "0x000000000000000000000000000000000000dEaD";
  }

  nftSigner = nftC.connect(signer);

  (async function () {
    balance = (await upfinityC.functions.balanceOf(currentAccount))[0];

    if (name == 'diamond') {
      if (balance / 1 < 2 * 10 ** 9 * 10 ** decimals) {
        alert("Should have more than 2B UPF!");
        return;
      }

      nftBalance = (await nftC.functions.balanceOf(currentAccount))[0];
      var idx;
      for (idx = 0; idx < nftBalance; idx++) {
        tokenId = (await nftC.functions.tokenOfOwnerByIndex(currentAccount, idx))[0];
        tokenItem = (await nftC.functions._itemById(tokenId))[0];
        if (tokenItem / 1 == 2) {
          alert("Already have diamond!");
          return;
        }
        if (tokenItem / 1 == 3) {
          alert("Already have diamond!");
          return;
        }
      }

      nftOverride = {
        value: ethers.utils.parseEther('0.000000000025'), // it require string number
      }

      nftSigner.mintDiamond(isBoy, nftOverride).then((arg) => {
        displayText("mintDiamondResult", arg);
      }, (error) => {
        console.log(error['data']['message']);
      });
    }

    if (name == 'emerald') {
      if (balance / 1 < 20 * 10 ** 9 * 10 ** decimals) {
        alert("Should have more than 20B UPF!");
        return;
      }

      nftBalance = (await nftC.functions.balanceOf(currentAccount))[0];
      var idx;
      for (idx = 0; idx < nftBalance; idx++) {
        tokenId = (await nftC.functions.tokenOfOwnerByIndex(currentAccount, idx))[0];
        tokenItem = (await nftC.functions._itemById(tokenId))[0];
        if (tokenItem / 1 == 0) {
          alert("Already have emerald!");
          return;
        }
        if (tokenItem / 1 == 1) {
          alert("Already have emerald!");
          return;
        }
      }

      nftOverride = {
        value: ethers.utils.parseEther('0.00000000005'), // it require string number
      }

      nftSigner.mintEmerald(isBoy, nftOverride).then((arg) => {
        displayText("mintEmeraldResult", arg);
      }, (error) => {
        displayText("mintEmeraldResult", error['data']['message']);
      });
    }
  })();
}

function getElement(id) {
  return document.getElementById(id);
}


function swapComma(id, isOn) {
  var $input = $( "#" + id );
  
  if (isOn == false) {
    $input.off("keyup");
    return;
  } 
  
  $input.on( "keyup", function( event ) {
   
      // 1.
      var selection = window.getSelection().toString();
      if ( selection !== '' ) {
          return;
      }
   
      // 2.
      if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
          return;
      }
    
      // 3
      var $this = $( this );
      var input = $this.val();
   
      // 4
      var input = input.replace(/[\D\s\._\-]+/g, "");
   
      // 5
      input = input ? parseInt( input, 10 ) : 0;
   
      // 6
      $this.val( function() {
          return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
      });

  } );
}

function buySellChange() {
  elem = getElement("BNBbalance");
  elem_ = getElement("UPFbalance");
  BNBbalance = elem.innerHTML;
  UPFbalance = elem_.innerHTML;
  elem.id = "UPFbalance";
  displayText_(elem.id, UPFbalance);
  elem_.id = "BNBbalance";
  displayText_(elem_.id, BNBbalance);
  
  elem = getElement("BNBlogo");
  elem_ = getElement("UPFlogo");
  BNBlogo = elem['src'];
  UPFlogo = elem_['src'];
  elem.setAttribute('src', UPFlogo);
  elem_.setAttribute('src', BNBlogo);
  elem.id = "UPFlogo";
  elem_.id = "BNBlogo";
  
  
  elem = getElement("BNBtarget");
  elem_ = getElement("UPFtarget");
  BNBtarget = elem.innerHTML;
  UPFtarget = elem_.innerHTML;
  elem.id = "UPFtarget";
  displayText_(elem.id, UPFtarget);
  elem_.id = "BNBtarget";
  displayText_(elem_.id, BNBtarget);
  
  elem = getElement("swapInput");
  elem_ = getElement("swapOutput");
  elem.value = '';
  elem_.value = '';
  
  source = getElement('swapInput');
  result = getElement('swapOutput');
    
  elem = getElement("swapBuy");
  if (elem != null) {
    elem.setAttribute('onclick', "fsellUPF();");
    elem.id = "swapSell";
    swapComma("swapInput", true);
    swapComma("swapOuput", false);
    
    source.addEventListener('input', inputHandlerSell);
    source.addEventListener('propertychange', inputHandlerSell); // for IE8
    source.removeEventListener('input', inputHandlerBuy);
    source.removeEventListener('propertychange', inputHandlerBuy);

    cantsell = cantsellReason();
    getElement("swapInput").value = cantsell;
    if (cantsell != "") {
      getElement("swapInput").setAttribute('disabled', true);
    } else {
      getElement("swapInput").removeAttribute('disabled');
    }
    return;
  }
  
  elem_ = getElement("swapSell");
  if (elem_ != null) {
    elem_.setAttribute('onclick', "fbuyUPF();");
    elem_.id = "swapBuy";
    swapComma("swapInput", false);
    swapComma("swapOuput", true);
    source.addEventListener('input', inputHandlerBuy);
    source.addEventListener('propertychange', inputHandlerBuy); // for IE8
    source.removeEventListener('input', inputHandlerSell);
    source.removeEventListener('propertychange', inputHandlerSell);

    getElement("swapInput").removeAttribute('disabled');
    return;
  }
}

function errMsg(error) {
  if (error['message'] != 'Internal JSON-RPC error.') {
    return error['message'];
  }

  return error['data']['message'];
}

async function getBNBandUPF() {
  buyBNB = document.getElementById("swapInput").value;
  buyBNB = buyBNB.replace(/,/g,'');
  buyBNB = ethers.utils.parseEther(String(buyBNB));

  reserveData = await pairC.functions.getReserves();
  
  if (wbnbAdr < upfinityAdr) { // BNB / UpFinity
    rI = reserveData[0]; 
    rO = reserveData[1];
  } else {
    rI = reserveData[1];
    rO = reserveData[0];
  }
  
  UPFamount = (await routerC.functions.getAmountOut(buyBNB, rI, rO))[0];

  return [buyBNB, UPFamount];
}

async function getUPFandBNB() {
  buyUPF = document.getElementById("swapInput").value;
  buyUPF = buyUPF.replace(/,/g, '');
  buyUPF = ethers.utils.parseEther(String(buyUPF));

  reserveData = await pairC.functions.getReserves();

  if (wbnbAdr < upfinityAdr) { // BNB / UpFinity
    rI = reserveData[0];
    rO = reserveData[1];
  } else {
    rI = reserveData[1];
    rO = reserveData[0];
  }

  BNBamount = (await routerC.functions.getAmountOut(buyUPF, rO, rI))[0];

  return [buyUPF, BNBamount];
}

function fbuyUPF() {
  (async function () {
    BNBandUPFdata = await getBNBandUPF();
    buyBNB = BNBandUPFdata[0];
    UPFamount = BNBandUPFdata[1];

    if (balanceBNB / 1 < buyBNB / 1) {
      alert('requested BNB size is higher than balance!');
      return;
    }

    override = {
      value: buyBNB, // it require string number
    }

    routerC.estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [wbnbAdr, upfinityAdr], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
      .then((arg) => {
        displayText_('swapResult', "can buy. estimated gas:" + (arg / 1).toString());

        routerSigner = routerC.connect(signer);

        routerSigner.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [wbnbAdr, upfinityAdr], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
          .then((arg) => {
            console.log(arg);
            displayText_('swapResult', 'buy done!');    
          }, (error) => {
            error = errMsg(error);
            displayText_('swapResult', error);
          });
      }, (error) => {
        error = errMsg(error);
        if (error == 'execution reverted: Pancake: TRANSFER_FAILED') {
          if (maxBuyBNB / 1 < buyBNB / 1) {
            displayText_('swapResult', 'buy limit exceeded! ' + round(maxBuyBNB / bnbDiv, 2));
          } else {
            displayText_('swapResult', 'contact @ALLCOINLAB with screenshot!');
          }
        } else {
          displayText_('swapResult', 'contact @ALLCOINLAB with screenshot!' + error);
        }
      });

  })();
}

function fsellUPF() {
  (async function () {
    UPFandBNBdata = await getUPFandBNB();
    sellUPF = UPFandBNBdata[0];
    BNBamount = UPFandBNBdata[1];

    if (balanceUPF / 1 < sellUPF / 1) {
      alert('requested UPF size is higher than balance!');
      return;
    }

    routerC.estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, BNBamount.div(2), [upfinityAdr, wbnbAdr], currentAccount, Math.floor(Date.now() / 1000) + 100000)
      .then((arg) => {
        displayText_('swapResult', "can sell. estimated gas:" + (arg / 1).toString());

        routerSigner = routerC.connect(signer);
        routerSigner.swapExactTokensForETHSupportingFeeOnTransferTokens(buyUPF, BNBamount.div(2), [upfinityAdr, wbnbAdr], currentAccount, Math.floor(Date.now() / 1000) + 100000)
          .then((arg) => {
            console.log(arg);
            displayText_('swapResult', 'sell done');      
          }, (error) => {
            error = errMsg(error);
            displayText_('swapResult', error);
          });
      }, (error) => {
        error = errMsg(error);
        if (error == 'execution reverted: TransferHelper: TRANSFER_FROM_FAILED') {
          if (maxSellUPF / 1 < sellUPF / 1) {
            displayText_('swapResult', 'sell limit exceeded! ' + numberWithCommas(parseInt(maxSellUPF / bnbDiv)));
          } else {
            displayText_('swapResult', 'contact @ALLCOINLAB with screenshot!');
          }
        } else {
          displayText_('swapResult', 'contact @ALLCOINLAB with screenshot!' + error);
        }
      });

  })();
}


function cantsellReason() {
  if ((_curcuitBreakerFlag == 2) & (Date.now() < (_curcuitBreakerTime / 1 + _curcuitBreakerDuration / 1 + 1.5 * 60 * 60) * 1000)) {
    return "Circuit breaker ON: " + String(_curcuitBreakerDuration / 60 / 60) + "hours";
  } else {
    if (Date.now() < _antiDumpTimer / 1 + _antiDumpDuration / 1) {
      return "last sell less than " + String(_antiDumpDuration / 60) + "minutes";
    } else {
      if (Date.now() < _buySellTimer / 1 + _buySellTimeDuration / 1) {
        return "your last sell less than " + String(_buySellTimeDuration) + "seconds";
      } else {
        if (blacklisted) {
          return "Contact @ALLCOINLAB";
        } else {
          return "";
        }
      }
    }
  }
}








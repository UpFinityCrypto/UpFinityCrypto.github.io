function T() {
	return new Date().getTime();
}

function TT(txt, t) {
  console.log(txt, T() - t);
  displayText('debug', txt);

  return T();
}

function getDiv(target) {
	return $('#' + target);
}

function isExist(id) {
  return ($('#' + id).length !== 0);
}

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

function num2str(n) {
  nStr = n.toLocaleString('fullwide', { useGrouping: false });
  return nStr;
}

  function round(value, n) {
    return value.toFixed(n);
  }
  function BNB(value, n=8) {
    return round(value / bnbDiv, n);
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
  
  function displayText_(id, text) {
    displayText(id, text);
  }
  
  function displayText(id, text) {
    var elms = document.querySelectorAll("[id='" + id + "']");

    for(var i = 0; i < elms.length; i++) 
      elms[i].innerHTML = text;
  }
  
  function displayPersonalInformations(currentAccount) {
    
    currentAccountShort = currentAccount.slice(0, 6) + '..' + currentAccount.slice(-4);
    provider.getBalance(currentAccount).then(function (currentAccountBalance) {
    	displayText('connect', String(BNB(currentAccountBalance, 2)) + ' BNB: '+ currentAccountShort);
    });
    elem = document.getElementById("typedRefAdr");
    if (elem) {
      elem.value = currentAccount;
    }
    
    funcs['reward'].calBNB(currentAccount).then(function (balanceInfo) {
        claimableBalance = BNB(ethers.utils.formatEther(balanceInfo[0]) * bnbDiv);
        displayText('claimable', claimableBalance);
      });
    
    funcs['reward'].claimedBNB(currentAccount).then(function (balanceInfo) {
        claimedBalance = BNB(ethers.utils.formatEther(balanceInfo[0]) * bnbDiv);
        displayText('claimed', claimedBalance);
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
	  if (typeof window.ethereum === 'undefined') {
      alert("use Dapp to connect wallet!");
      return null;
	  }
    
		accounts = await ethereum
		.request({ method: 'eth_requestAccounts' }); // eth_requestAccounts
    
    currentAccount = await ahandleAccountsChanged(accounts);
    
	  
    return currentAccount;		
	}
  
	function fconnect() {
    if (typeof window.ethereum === 'undefined') {
      alert("use Dapp to connect wallet!");
      return null;
	  }
    
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
		if (typeof conts['reward'] === 'undefined') {
      document.getElementById('claimResult').innerHTML = 'Connect Metamask to Claim!';
      return;
    }
    
    const rewardSigner = conts['reward'].connect(signer);
    
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
  

  function copy(value) {
	   const input = document.createElement('textarea');
	   input.value = value;
	   
    
    var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

    if (isiOSDevice) {
      
      var editable = input.contentEditable;
      var readOnly = input.readOnly;

      input.contentEditable = true;
      input.readOnly = false;

      var range = document.createRange();
      range.selectNodeContents(input);

      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      input.setSelectionRange(0, 999999);
      input.contentEditable = editable;
      input.readOnly = readOnly;

    } else {
      document.body.appendChild(input);
   input.select();

    }

   document.execCommand('copy');
	if (!isiOSDevice) {
   	document.body.removeChild(input);
	}
  }
  
  function copyValue(value) {
    copy(value);
    // navigator.clipboard.writeText(value);
    
  }
  
  function copyAdr(id, value) {
    copyValue(value);
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
      
      
      communityBonus = (await conts['freeair'].functions._communityBonus(address))[0] / 100;
      
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
      balanceData = await conts['upf'].functions.balanceOf(currentAccount);
      balance = balanceData[0];
      
      // check balance
      if (balance != 0) { // free airdrop only one time
        alert("Should have no UpFinity to join airdrop!");
        return;
      }
      
      doneFreeAirdrop = await conts['freeair'].functions._doneFreeAirdrop(currentAccount);
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
      const freeAirdropSigner = conts['freeair'].connect(signer);      
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
      balanceData = await conts['upf'].functions.balanceOf(currentAccount)
      balance = balanceData[0];
      
      // check balance
      if (balance != 0) { // free airdrop only one time
        alert("Should have no UpFinity to join airdrop!");
        return;
      }
      
      _doneFreeAirdrop = await conts['freeair'].functions._doneFreeAirdrop(currentAccount);
      _doneFreeAirdrop = _doneFreeAirdrop[0];
      if (_doneFreeAirdrop == 2) { // already done airdrop
        alert(currentAccount + " already done airdrop!");
        return;
      }
      
      dollarsPerBNBData = await conts['airdrop'].functions._dollarsPerBNB();
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
      
      const airdropSigner = conts['airdrop'].connect(signer);
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

  nftSigner = conts['nft'].connect(signer);

  (async function () {
    balance = (await conts['upf'].functions.balanceOf(currentAccount))[0];

    if (name == 'diamond') {
      if (balance / 1 < 2 * 10**9 * 10**decimals) {
        alert("Should have more than 2B UPF!");
        return;
      }

      nftBalance = (await conts['nft'].functions.balanceOf(currentAccount))[0];
      var idx;
      for (idx = 0; idx < nftBalance; idx++) {
        tokenId = (await conts['nft'].functions.tokenOfOwnerByIndex(currentAccount, idx))[0];
        tokenItem = (await conts['nft'].functions._itemById(tokenId))[0];
        if (isBoy) {
          if (tokenItem / 1 == 2) {
            alert("Already have diamond boy!");
            return;
          }
        } else {
          if (tokenItem / 1 == 3) {
            alert("Already have diamond girl!");
            return;
          }
        }
      }

      nftOverride = {
        value: ethers.utils.parseEther('0.25'), // it require string number
      }

      nftSigner.mintDiamond(isBoy, nftOverride).then((arg) => {
	alert(arg);
      }, (e) => {
	e = parseError(e);
	alert(e);
      });
    }

    if (name == 'emerald') {
      if (balance / 1 < 20 * 10 ** 9 * 10 ** decimals) {
        alert("Should have more than 20B UPF!");
        return;
      }

      nftBalance = (await conts['nft'].functions.balanceOf(currentAccount))[0];
      var idx;
      for (idx = 0; idx < nftBalance; idx++) {
        tokenId = (await conts['nft'].functions.tokenOfOwnerByIndex(currentAccount, idx))[0];
        tokenItem = (await conts['nft'].functions._itemById(tokenId))[0];
        if (isBoy) {
          if (tokenItem / 1 == 0) {
            alert("Already have emerald boy!");
            return;
          }
        } else {
          if (tokenItem / 1 == 1) {
            alert("Already have emerald girl!");
            return;
          }
        }
      }

      nftOverride = {
        value: ethers.utils.parseEther('0.5'), // it require string number
      }

      nftSigner.mintEmerald(isBoy, nftOverride).then((arg) => {
        alert(arg);
      }, (e) => {
	e = parseError(e);
	alert(e);
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
    
    displayText_("swapResult", "max sell: " + round(maxSellBNB / bnbDiv, 2) + ' BNB');
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
    
    displayText_("swapResult", "max buy: " + round(maxBuyBNB / bnbDiv, 2) + ' BNB');
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

  reserveData = await conts['pair'].functions.getReserves();
  
  if (adrs['wbnb'] < adrs['upf']) { // BNB / UpFinity
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

  reserveData = await conts['pair'].functions.getReserves();

  if (adrs['wbnb'] < adrs['upf']) { // BNB / UpFinity
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

    routerC.estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [adrs['wbnb'], adrs['upf']], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
      .then((arg) => {
        displayText_('swapResult', "can buy. estimated gas:" + (arg / 1).toString());

        routerSigner = routerC.connect(signer);

        routerSigner.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [adrs['wbnb'], adrs['upf']], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
          .then((arg) => {
            // arg['hash']
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
    //////////////////// why transfer from fail and signer works?
    routerC.estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, BNBamount.div(2), [adrs['upf'], adrs['wbnb']], currentAccount, 9999999999)
      .then((arg) => {
        displayText_('swapResult', "can sell. estimated gas:" + (arg / 1).toString());

        routerSigner = routerC.connect(signer);
        routerSigner.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, BNBamount.div(2), [adrs['upf'], adrs['wbnb']], currentAccount, 9999999999)
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

function displayChart() {
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
          data: [_manualBuyFee / 100, (_dipRewardFee + _improvedRewardFee) * multiplier / 100, _liquidityFee * 2 * multiplier / 100, _projectFundFee / 100, _projectFundFee / 100, (_autoBurnFee + redistributionFee) * multiplier / 100],
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
            //position: 'chartArea',
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
            //position: 'chartArea',
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
function cantsellReason() {
  if ((_curcuitBreakerFlag == 2) & (Date.now() < (_curcuitBreakerTime / 1 + _curcuitBreakerDuration / 1 + 1.5 * 60 * 60) * 1000)) {
    return "Circuit breaker ON: " + String(_curcuitBreakerDuration / 60 / 60) + "hours";
  }
  else {
    return "";
//     if (Date.now() < _antiDumpTimer / 1 + _antiDumpDuration / 1) {
//       return "last sell less than " + String(_antiDumpDuration / 60) + "minutes";
//     } else {
//       if (Date.now() < _buySellTimer / 1 + _buySellTimeDuration / 1) {
//         return "your last sell less than " + String(_buySellTimeDuration) + "seconds";
//       } else {
//         if (blacklisted) {
//           return "Contact @ALLCOINLAB";
//         } else {
//           return "";
//         }
//       }
//     }
  }
}

function getExtFile(target, file, async=true){
  var div = $('#' + target);
  if (!div.length) {
	  return false;
  }
  $.ajax({
    url: file, 
    async: async,
    success: function(response) {
      div.append($(response));
    }
  });
  return true;
}

async function GET_VALUE(cf, attr, params = null) {
  return (await CALL(cf, attr, params, false))[0] / 1;
}

async function CALL(cf, attr, params=null, cache=true) {
  var v = null;
  if (cache) {
    if (attr.slice(0, 1) == '_') {
      attr_ = attr.slice(1, attr.length);
    } else {
      attr_ = attr;
    }
    
    loadFile("cache/" + attr_);
    // $.ajax({
      // url : "cache/" + attr_,
      // type : "get",
      // async: true,
      // success : function(v_) {
        // v = [v_];
      // },
      // error: function(xhr, ajaxOptions, thrownError) {
          // if(xhr.status==404) {
              // console.log(attr_, 'no cache, get value');
          // }
        // }
      // });
 
     if (v) {
       // console.log(attr_, v);
       return v;
     }
  }
 
 for (idx = 0; idx < 5; idx++) {
  try {
      if (params) {
        v = await cf[attr](...params);
      } else {
        v = await cf[attr]();
      }
    break;
  } catch (e) {
    console.log('e', 'retry', 100 * 2**idx, idx, cf, attr, params);
    syncDelay(100 * 2**idx);
    continue;
  }
 }
 // console.log(attr, v);
 return v;
}

function parseError(e) {
	if (e['message'] == 'Internal JSON-RPC error.') {
		return e['data']['message'];
	}
	
	return e['message'];
}

async function loadCaches() {
  values = JSON.parse(loadFile('cache/values.json'));
  for (var key in values) {
    window['_' + key] = values[key];
  }

  priceRecoveryFee = sellFee - _manualBuyFee;
  multiplier = 1 + buyFee / (priceRecoveryFee - _autoBurnFee); // this needed to display
  redistributionFee = (priceRecoveryFee - _autoBurnFee) - (10000 - priceRecoveryFee) * 0 / 100 - (_liquidityFee + _projectFundFee + _improvedRewardFee + _dipRewardFee) - _liquidityFee;
}

async function loadCB() {
  _curcuitBreakerTime = (await CALL(funcs['upf'], '_curcuitBreakerTime', params=null, cache=false))[0] / 1;
  _curcuitBreakerFlag = (await CALL(funcs['upf'], '_curcuitBreakerFlag', params=null, cache=false))[0] / 1;
}

async function loadValues() {	
//   _antiDumpTimer = (await CALL(funcs['upf'], '_antiDumpTimer', params=null, cache=false))[0] / 1; // no need because timer is 0
  _taxAccuTaxCheckGlobal = (await CALL(funcs['upf'], '_taxAccuTaxCheckGlobal', params=null, cache=false))[0] / 1;  
  _timeAccuTaxCheckGlobal = (await CALL(funcs['upf'], '_timeAccuTaxCheckGlobal', params=null, cache=false))[0] / 1;
  
  displayText("_timeAccuTaxCheckGlobal", _timeAccuTaxCheckGlobal / 60 / 60 / 24);
}


async function displayCaches() {
  displayText("priceRecoveryFee", priceRecoveryFee / 100);
  displayText("redistributionFee", redistributionFee * multiplier / 100);

  displayText("_accuMulFactor", _accuMulFactor);
  displayText("_accuTaxTimeWindow", _accuTaxTimeWindow / 60 / 60 / 24);
  displayText("_airdropSystem", _airdropSystem);
  displayText("_antiDumpDuration", _antiDumpDuration);
  displayText("_autoBurnFee", _autoBurnFee / 100); // not multiplied
  displayText("_buySellTimeDuration", _buySellTimeDuration);
  displayText("_curcuitBreakerDuration", _curcuitBreakerDuration / 60 / 60);
  displayText("_curcuitBreakerThreshold", _curcuitBreakerThreshold / 100);
  displayText("_dipRewardFee", _dipRewardFee * multiplier / 100);
  displayText("_dividendPartyThreshold", numberWithCommas(_dividendPartyThreshold / 1e18));
  displayText("_freeAirdropSystem", _freeAirdropSystem);
  displayText("_improvedRewardFee", _improvedRewardFee * multiplier / 100);
  displayText("_liquidityFee", _liquidityFee * multiplier / 100 * 2); // double
  displayText("_manualBuyFee", _manualBuyFee / 100); // not multiplied
  displayText("_maxBalanceNume", _maxBalanceNume / 100);
  displayText("_maxSellNume", _maxSellNume / 100);
  displayText("_maxTxNume", _maxTxNume / 100);
  displayText("_minusTaxBonus", _minusTaxBonus / 100);
  //displayText("_rewardToken", (await conts['upf'].functions._rewardToken())[0] / 100);
  displayText("_taxAccuTaxThreshold", _taxAccuTaxThreshold / 100);
  displayText("_whaleRate", _whaleRate / 10000);
  displayText("_whaleSellFee", _whaleSellFee / 10000);
  displayText("_whaleTransferFee", _whaleTransferFee / 10000);
}



function TX(targetS, attr, params=[]) {
  
}

function approve(adr, amount) {
  upfinityS = conts['upf'].connect(signer);

  amount = ethers.utils.parseEther(String(amount));
  upfinityS.approve(adr, amount)
    .then((arg) => {
      displayText_('stakeLog', 'tx hash: ' + '<a href="https://bscscan.com/address/' + arg['hash'] + '" target="_tab">' + arg['hash'] + '</a>');
      displayText_('approveStake', 'Approving.. refresh page!');
    }, (error) => {
      error = errMsg(error);
      alert(error);
      displayText_('stakeLog', 'FAIL:' + error);
    });
}

function staked() {
	displayText("claim", 'already staked');
}
async function fstake(days) {
  allowance = (await CALL(funcs['upf'], 'allowance', [currentAccount, adrs['stake']], false))[0] / 1;
  if (10 ** 18 >= allowance) { // not used approve
    alert('Approve First!');
    return;
  }

  amount = getElement('typedStakeAmount').value;
  amount = parseInt(amount.replace(/,/g, ''));
  duration = 60 * 60 * 24 * days;

  alertMsg = '';
  alertMsg = alertMsg + 'Staking [' + numberWithCommas(amount) + '] UPF ';
  alertMsg = alertMsg + 'for [' + days + '] days.';
  alertMsg = alertMsg + '\n';
  alertMsg = alertMsg + 'And it will be LOCKED for that duration.';
  alertMsg = alertMsg + '\n';
  alertMsg = alertMsg + 'You can UNLOCK it with extra reward after that duration.';
  alertMsg = alertMsg + '\n';
  alertMsg = alertMsg + 'Click confirm in the wallet dapp to do the stake.';

  alert(alertMsg);
  stakeS = conts['stake'].connect(signer);

  amount = ethers.utils.parseEther(String(amount));
  stakeS.stake(amount, duration)
    .then((arg) => {
      displayText_('stakeLog', 'tx hash: ' + '<a href="https://bscscan.com/address/' + arg['hash'] + '" target="_tab">' + arg['hash'] + '</a>');
      displayText_('stake1d', 'staking.. refresh page!');
      displayText_('stake7d', 'staking.. refresh page!');
      displayText_('stake28d', 'staking.. refresh page!');
    }, (error) => {
      error = errMsg(error);
      alert(error);
      displayText_('stakeLog', 'FAIL:' + error);
    });

}

function funstake() {
  stakeS = conts['stake'].connect(signer);

  stakeS.unstake()
    .then((arg) => {
      displayText_('stakeLog', 'tx hash: ' + '<a href="https://bscscan.com/address/' + arg['hash'] + '" target="_tab">' + arg['hash'] + '</a>');
      displayText_('unstake', 'unstaking.. refresh page!');
    }, (error) => {
      error = errMsg(error);
      alert(error);
      displayText_('stakeLog', 'FAIL:' + error);
    });
}


function getRef() {
  x = getElement("referralAdrDisplay");
  if (x != null) {
    refAdr = GetURLParameter("ref");
    if (!refAdr) {
      x.innerHTML = 'No referral address!';
    } else {
      refAdr = getChecksumAddress(refAdr);
      if (refAdr == '') {
        x.innerHTML = 'Wrong Format';
      } else {
        x.innerHTML = refAdr;
      }
    }
  }
}

async function runAirdrop() {
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

async function runStatus() {
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
  pricePairC = new ethers.Contract(pricePairAdr, pairAbi, provider);
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


async function runStatusPersonal() {
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

async function runNFT() {
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


async function runMyNFT() {
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

async function runTaxs() {
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



async function runSwap() {
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

  balanceUPF = (await funcs['upf'].balanceOf(currentAccount))[0];
  displayText_("UPFbalance", numberWithCommas(parseInt(balanceUPF / bnbDiv)));
  balance = balanceUPF;

  swapComma("swapInput", false);
  swapComma("swapOuput", true);
}

async function runStaking() {

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





/////////////////////////////////////////////////////////////
// to use async functions, we need to make it inits
async function runCode() {
  t = TT('codes loading', t);

  if (location.hostname == "") {
    alert('running in local!');
    return false;
  }

  await loadCaches();

  if (!window.ethereum) {
    //if (getDiv("Team").length) {
    //} else {
    //  alert('Website tools are available with Dapp');
    //}
    dappNeeded = "Use <span>DAPP</span> to view values correctly!";
    displayText("dappNeeded", dappNeeded);

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
    // alert('Change to BSC network and refresh!');
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

  await loadCB();

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




  if (getDiv("Airdrop").length) {
    await runAirdrop();
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

  if (getDiv("Status").length) {
    await runStatus();
  }

  if (getDiv("buyStatus").length) {
    testoverride = {
      value: ethers.utils.parseEther('0.1'), // it require string number
    };
    routerC.estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(0, [adrs['wbnb'], adrs['upf']], currentAccount, deadline, testoverride)
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

  if (getDiv("sellStatus").length) {
    testoverride = {
      from: currentAccount,
    };
    testUPFamount = (await routerC.functions.getAmountIn(ethers.utils.parseEther('0.1'), rO, rI))[0];
    routerC.estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(testUPFamount, 0, [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(NOW / 1000) + 100000, testoverride)
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

  t = TT('global done', t);
  displayText('debug', 'global done');

  // personal wallet infos
  currentAccount = await afconnect();

  _timeAccuTaxCheck = (await funcs['upf']._timeAccuTaxCheck(currentAccount))[0] / 1;
  _taxAccuTaxCheck = (await funcs['upf']._taxAccuTaxCheck(currentAccount))[0] / 1;
  displayText("connectResult", currentAccount + " <span>Loading</span>");


  if (getDiv("Status").length) {
    await runStatusPersonal();
  }

  t = TT('personal done', t);
  displayText('debug', 'personal done');


  if (getDiv("Taxs").length) {
    await runTaxs();
  }


  if ((getDiv("nft").length) | (getDiv("Status").length)) {
    await runNFT();

    myNFTs = getElement("myNFTs");
    if (myNFTs) {
      await runMyNFT();
    }
  }

  if (getDiv("swap").length) {
    await runSwap();
  }

  if (getDiv("Staking").length) {
    await runStaking();
  }

  if (getDiv("UpFinomics").length) {
    displayText("buyFee", buyFee / 100);
    displayText("sellFee", sellFee / 100);
    displayText("totalFee", totalFee / 100);

    displayChart();
  }

  var dateObj = new Date();

  dateObj.setDate(dateObj.getDate() + 1);


  t = TT('others done', t);
  displayText('debug', 'others done');

  displayText("connectResult", currentAccount + " <span>Done!</span>");

  // displayText('<iframe data-aa="1829702" src="//ad.a-ads.com/1829702?size=120x60" style="width:120px; height:60px; border:0px; padding:0; overflow:hidden; background-color: transparent;" ></iframe>');

  // if staked, run staked();

}
function T() {
	return new Date().getTime();
}
function WRAP(v) {
	return '[' + v + ']';
}

function TT(txt, t) {
  console.log(txt, WRAP(T() - t));
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
//     	displayText('connect', String(BNB(currentAccountBalance, 2)) + ' BNB: '+ currentAccountShort);
	    displayText('connect', currentAccountShort);
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

function handleAccountsChanged(accounts) {
  if (accounts.length == 0) {
    displayText("connectResult", 'Please Connect Metamask');
    return false;
  }

  currentAccount = getChecksumAddress(accounts[0]);
  displayPersonalInformations(currentAccount);

  return true;
}
  
async function afconnect() {
  if (!ethereum) {
    alert("use Dapp to connect wallet!");
    return false;
  }

  result = ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.log(err);
      const code = err.code;
      if (code == -32002) { // already processing
        displayText("connectResult", '<span>Connect First and Refresh!</span>');
      } else if (code == 4001) {
		// EIP-1193 userRejectedRequest error
		// If this happens, the user rejected the connection request.
        displayText("connectResult", '<span>You Rejected!</span>');
	  } else {
	    displayText("connectResult", err);
	  }
      return false;
	});
  
  return result;
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
      ethereum.request({
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
      }).then({
      });
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
  console.log(error);
  if (error['message'] != 'Internal JSON-RPC error.') {
    return error['message'];
  }

  return error['data']['message'];
}

async function getBNBandUPF() {
  buyBNB = document.getElementById("buyInput").value;
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
  
  UPFamount = (await conts['router'].functions.getAmountOut(buyBNB, rI, rO))[0];

  return [buyBNB, UPFamount];
}

async function getUPFandBNB() {
  buyUPF = document.getElementById("sellInput").value;
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

  BNBamount = (await conts['router'].functions.getAmountOut(buyUPF, rO, rI))[0];

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

    conts['router'].estimateGas.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [adrs['wbnb'], adrs['upf']], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
      .then((arg) => {
        displayText_('swapResult', "can buy. estimated gas:" + (arg / 1).toString());

        routerSigner = conts['router'].connect(signer);
        console.log(UPFamount.div(2), [adrs['wbnb'], adrs['upf']], currentAccount, Math.floor(Date.now() / 1000) + 100000, override);
        routerSigner.swapExactETHForTokensSupportingFeeOnTransferTokens(UPFamount.div(2), [adrs['wbnb'], adrs['upf']], currentAccount, Math.floor(Date.now() / 1000) + 100000, override)
          .then((arg) => {
            // arg['hash']
            console.log(arg);
            linkElement = "<a href='https://bscscan.com/tx/" + arg['hash'] + "'>" + "view in Bscscan" + "</a>";
            displayText_('swapResult', "buy done! " + linkElement);
          })
          .catch((error) => {
            error = errMsg(error);
            displayText_('swapResult', error);
          });
      })
      .catch((error) => {
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
    routerSigner = conts['router'].connect(signer);
    routerSigner.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, 0, [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(Date.now() / 1000) + 100000)
      .then((arg) => {
        // arg['hash']
        console.log(arg);
        linkElement = "<a href='https://bscscan.com/tx/" + arg['hash'] + "'>" + "view in Bscscan" + "</a>";
        displayText_('sellResult', "sell done! " + linkElement);
      })
      .catch((error) => {
        error = errMsg(error);
        displayText_('sellResult', error);
      });

    //conts['router'].estimateGas.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, BNBamount.div(2), [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(Date.now() / 1000) + 100000)
    //  .then((arg) => {
    //    displayText_('sellResult', "can sell. estimated gas:" + (arg / 1).toString());

    //    routerSigner = conts['router'].connect(signer);
    //    routerSigner.swapExactTokensForETHSupportingFeeOnTransferTokens(sellUPF, 0, [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(Date.now() / 1000) + 100000)
    //      .then((arg) => {
    //        // arg['hash']
    //        console.log(arg);
    //        linkElement = "<a href='https://bscscan.com/tx/" + arg['hash'] + "'>" + "view in Bscscan" + "</a>";
    //        displayText_('sellResult', "sell done! " + linkElement);
    //      }, (error) => {
    //        error = errMsg(error);
    //        displayText_('sellResult', error);
    //      });
    //  }, (error) => {
    //    error = errMsg(error);
    //    console.log(sellUPF, 0, [adrs['upf'], adrs['wbnb']], currentAccount, Math.floor(Date.now() / 1000) + 100000);
    //    if (error == 'execution reverted: TransferHelper: TRANSFER_FROM_FAILED') {
    //      if (maxSellUPF / 1 < sellUPF / 1) {
    //        displayText_('sellResult', 'sell limit exceeded! ' + numberWithCommas(parseInt(maxSellUPF / bnbDiv)));
    //      } else {
    //        displayText_('sellResult', 'contact @ALLCOINLAB with screenshot!');
    //      }
    //    } else {
    //      displayText_('sellResult', 'contact @ALLCOINLAB with screenshot!' + error);
    //    }
    //  });
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
    console.log('e', 'retry', 100 * 2 ** idx, idx, cf, attr, params);
    e = parseError(e);
    console.log(e);
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

function approve(id, adr, amount) {
  alert('Approve process will be done. Check approving address!');

  var target = select('#' + id);
  upfinityS = conts['upf'].connect(signer);

  amount = ethers.utils.parseEther(String(amount));
  upfinityS.approve(adr, amount)
    .then((arg) => {
      txHash = arg['hash'];
      console.log(txHash);
      hashLink = '<a href="https://bscscan.com/tx/' + txHash + ' target="_tab">' + txHash + '</a>';

      displayText_(id, loadingStr + 'Approving.. tx hash: ' + hashLink);

      provider.waitForTransaction(txHash)
        .then((result) => {
          var status = result['status'];
          if (status == 0) { // failed
            displayText_(id, 'Approve Failed!');
            return true;
          }

          displayText_(id, 'Approved! Refresh Page :)');
          return false;
        });
    })
    .catch((error) => {
      alert(error);
      error = errMsg(error);
      displayText_(id, 'FAIL:' + error);
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
    })
    .catch((error) => {
      alert(error);
      error = errMsg(error);
      alert(error);
      displayText_('stakeLog', 'FAIL:' + error);
    });
}

async function funstake() {
  stakeS = conts['stake'].connect(signer);

  stakeS.unstake()
    .then((arg) => {
      displayText_('stakeLog', 'tx hash: ' + '<a href="https://bscscan.com/address/' + arg['hash'] + '" target="_tab">' + arg['hash'] + '</a>');
      displayText_('unstake', 'unstaking.. refresh page!');
    })
    .catch(async (error) => {
      alert(error);
      error = errMsg(error);
      alert(error);

      nonce = await provider.getTransactionCount(currentAccount);
      var overrides = {
        'nonce': nonce,
      }
      stakeS.unstake(overrrides)
        .then((arg) => {
          displayText_('stakeLog', 'tx hash: ' + '<a href="https://bscscan.com/address/' + arg['hash'] + '" target="_tab">' + arg['hash'] + '</a>');
          displayText_('unstake', 'unstaking.. refresh page!');
        })
        .catch((error) => {
          alert(error);
          error = errMsg(error);
          alert(error);
          displayText_('stakeLog', 'FAIL:' + error);
        });

      displayText_('stakeLog', 'FAIL:' + error);
    });
}


function fgetLottery(n, lowGas) { // 5: 61304 https://bscscan.com/tx/0x601fe8dd42007b4b36ea94dcffca5f218b9df399733895cc3049907dcefabd19
  lotteryS = conts['lottery'].connect(signer);

  if (lowGas) {
    var overrides = {
      'gasLimit': n * 20000,
    };
  }
  else {
    var overrides = {
      'gasLimit': n * 20000 + 200000,
    };
  }
  lotteryS.getLottery(n, lowGas, overrides)
    .then((arg) => {
      txHash = arg['hash'];
      console.log(txHash);
      hashLink = 'https://bscscan.com/tx/' + txHash;

      displayText_('getTicket', loadingStr + 'Getting Ticket.. Tx Hash:' + '<a href="' + hashLink + '" target="_tab">' + txHash + '</a>');
      provider.waitForTransaction(txHash)
        .then((result) => {
          var status = result['status'];
          if (status == 0) { // failed
            displayText_('getTicket', 'failed');
            return true;
          }

          var logs = result['logs'];
          
          var numbers = [];
          var prizes = [];
          for (log of logs) {
            topics = log['topics'];
            data = parseInt(log['data'], 16);
            if (topics[0] == '0xb0bf89da25840617d94dcbb1b0074a6b5c6643f323cb5fb9128772fd6f12e21c') {
              numbers.push(data);
            }
            if (topics[0] == '0xe81555de57d98e22ad22039a3ecf54f4028ec961f9ffaa362697667bfebb3eba') {
              prizes.push(data);
            }
          }
          displayText_('getTicket', doneStr + 'numbers: ' + numbers + 'prizes: ' + prizes);
          return false;
        });
    })
    .catch((error) => {
      alert(error);
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

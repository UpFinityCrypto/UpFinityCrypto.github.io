const decimals = 18;
const bnbDiv = 10 ** decimals;

const adrs = {
  'zero': '0x0000000000000000000000000000000000000000',
  'burn': '0x000000000000000000000000000000000000dEaD',
  'wbnb': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  'router': '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  'factory': '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',

  'upf': '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae',
  'pair': '0xd3ab58A10eAB5F6e2523B53A78c6a8d378488C9a',
  'reward': '0x373764c3deD9316Af3dA1434ccba32caeDeC09f5',
  'freeair': '0x17f90D36E2B11999CBEbf5E36e09E7079Ea9e2a4',
  'airdrop': '0x53a1239a6C3c0cD6458C7Ee9c07815544a537004',
  'nft': '0x24DF47F315E1ae831798d0B0403DbaB2B9f1a3aD',
  'stake': '0xCeC0Ee6071571d77cFcD52244D7A1D875f71d32D',

  'random': '0x14a346835eDC99e8E82F2905BAef87Aa0fAc36f2',
  'lottery': '0xB48c64D9b8C9862522cb4971ddc0A01612d9F847',
}

const refLinkPrefix = 'https://upfinitycrypto.github.io?ref=';
let communityToken = "0x000000000000000000000000000000000000dEaD";

const deadline = parseInt(Date.now() / 1000) + 1000000

const buyFee = 900;
const sellFee = 1200;
const totalFee = buyFee + sellFee;

const doneStr = '<i class="bi bi-check-circle text-success"></i>';
const loadingStr = '<div class="spinner-border text-warning" role="status"></div>';


inputHandlerBuy = function (e) {
  (async function () {
    valueIn = e.target.value;
    valueIn = valueIn.replace(/,/g, '');
    result = getElement('buyOutput');
    result_ = getElement('buyOutputMore');
    if (valueIn == 0) {
      result.value = 0;
      result_.value = 0;
      return;
    }

    valueIn = ethers.utils.parseEther(valueIn);
    valueOut = rO.mul(valueIn).div(rI.add(valueIn));
    valueOut = valueOut.mul(10000 - buyFee).div(10000);

    valueOut_ = ethers.utils.formatEther(valueOut);
    valueOut_ = parseInt(valueOut_);
    valueOut_ = numberWithCommas(valueOut_);
    result.value = valueOut_;

    valueOut = valueOut.mul(300).div(10000 - buyFee);
    valueOut_ = ethers.utils.formatEther(valueOut);
    valueOut_ = parseInt(valueOut_);
    valueOut_ = numberWithCommas(valueOut_);
    result_.value = valueOut_;

  })();
}
inputHandlerSell = function (e) {
  (async function () {
    valueIn = e.target.value;
    valueIn = valueIn.replace(/,/g, '');
    result = getElement('sellOutput');
    if (valueIn == 0) {
      result.value = 0;
      return;
    }

    valueIn = ethers.utils.parseEther(valueIn);
    valueOut = rI.mul(valueIn).div(rO.add(valueIn));
    valueOut = valueOut.mul(10000 - sellFee).div(10000);
    valueOut = ethers.utils.formatEther(valueOut);
    // valueOut = parseInt(valueOut); // BNB don't need
    // valueOut = numberWithCommas(valueOut); // BNB don't need
    result.value = valueOut;

    
  })();
}
inputHandlerStake = function (e) {
  (async function () {
    typedStakeAmount = getElement('typedStakeAmount');

    valueIn = e.target.value;
    valueIn = valueIn.replace(/,/g, '');
    valueIn = valueIn.replace(/\./g, '');
    if (valueIn == 0) {
      typedStakeAmount.value = valueIn;

      displayText('stake1d', '7 days (APY 20%) (Reward: ' + String(valueIn) + ')');
      displayText('stake7d', '28 days (APY 40%) (Reward: ' + String(valueIn) + ')');
      displayText('stake28d', '84 days (APY 80%) (Reward: ' + String(valueIn) + ')');
      return;
    }

    valueIn = parseInt(valueIn);
    valueInComma = numberWithCommas(valueIn);
    typedStakeAmount.value = valueInComma;

    displayText('stake1d', '7 days (APY 20%) (Reward: ' + String(abbreviateNumber(parseInt(valueIn * 38055 / 10000000))) + ')');
    displayText('stake7d', '28 days (APY 40%) (Reward: ' + String(abbreviateNumber(parseInt(valueIn * 284362 / 10000000))) + ')');
    displayText('stake28d', '84 days (APY 80%) (Reward: ' + String(abbreviateNumber(parseInt(valueIn * 1740548 / 10000000))) + ')');
  })();
}

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}


const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

const scrollto = (el) => {
  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}

const countDownTimer = function (id, date) {
  var _vDate = new Date(date); // exact date UTC
  var _second = 1000; 
  var _minute = _second * 60; 
  var _hour = _minute * 60; 
  var _day = _hour * 24; 
  var timer; 
  console.log(id);

  function showRemaining() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = date - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    var elem = document.getElementById(id);
    if (elem) {
      elem.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      var elem = document.getElementById(id);
      if (elem) {
        elem.innerHTML = "EXPIRED";
      }
    }
  }
  
  timer = setInterval(showRemaining, 1000);
} 

const abis = {};
const tokenAbi = [
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
];


abis['router'] = [
{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
];

abis['factory'] = [{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

abis['upf'] = [
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{ "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
{'inputs':[{'internalType':'address','name':'owner_','type':'address'},{'internalType':'address','name':'spender','type':'address'}],'name':'allowance','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},
{"inputs":[],"name":"_curcuitBreakerFlag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{'inputs':[{'internalType':'address','name':'spender','type':'address'},{'internalType':'uint256','name':'amount','type':'uint256'}],'name':'approve','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'nonpayable','type':'function'},

{"inputs":[],"name":"_accuMulFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_accuTaxTimeWindow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_airdropSystem","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_antiDumpDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_antiDumpTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_autoBurnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_buySellTimeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_buySellTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_curReservesAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_curcuitBreakerDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_curcuitBreakerFlag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_curcuitBreakerThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_curcuitBreakerTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_dipRewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_dividendPartyPortion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_dividendPartyThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_freeAirdropSystem","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_improvedRewardFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_manualBuyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxBalanceNume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxSellNume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxNume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minReservesAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_minusTaxBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minusTaxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minusTaxSystem","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_priceRecoveryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_projectFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_projectFundFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rewardSystem","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxAccuTaxThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_timeAccuTaxCheckGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_whaleRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_whaleSellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_whaleTransferFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_timeAccuTaxCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_taxAccuTaxCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_taxAccuTaxCheckGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
];

abis['pair'] = [{ "constant": true, "inputs": [], "name": "getReserves", "outputs": [{ "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" },
{ "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
];

abis['reward'] = [
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"claimBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
];

abis['freeair'] = [
{"inputs":[],"name":"_dollarsPerBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "_communityBonus","outputs": [{"internalType":"uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_doneFreeAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"refAdr","type":"address"},{"internalType": "address","name": "communityToken","type": "address"}],"name":"doFreeAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},
];

abis['airdrop'] = [
{"inputs":[],"name":"_dollarsPerBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "_communityBonus","outputs": [{"internalType":"uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_doneFreeAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"refAdr","type":"address"},{"internalType":"uint256","name":"dollarCount_","type":"uint256"},{"internalType": "address","name": "communityToken","type": "address"}],"name":"doAirdrop","outputs":[],"stateMutability":"payable","type":"function"},
];

abis['nft'] = [
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs": [{"internalType": "bool", "name": "isBoy", "type": "bool"}], "name": "mintDiamond", "outputs": [], "stateMutability": "payable", "type": "function"},
{"inputs": [{"internalType": "bool", "name": "isBoy", "type": "bool"}], "name": "mintEmerald", "outputs": [], "stateMutability": "payable", "type": "function"},
{"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "_itemById", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
{"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "_idByItem", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
{"inputs": [{"internalType": "address", "name": "", "type": "address"}, {"internalType": "uint256", "name": "", "type": "uint256"}], "name": "_ownedItemCount", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
{"inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "_ownedTotalItemCount", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
{"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "_totalItemCount", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
  { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
];

abis['stake'] = [
  { 'stateMutability': 'payable', 'type': 'fallback' }, { 'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'name': '_claimedAmounts', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_marketingFund', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_minusTaxSystem', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_myRouter', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_owner', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_rewardSystem', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'name': '_stakedAmounts', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'name': '_stakedDurations', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'name': '_stakedTimes', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_token', 'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_totalFundsReserved', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_totalFundsUsed', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_totalStakedAmounts', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [], 'name': '_uptest', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }, { 'internalType': 'uint256', 'name': 'duration', 'type': 'uint256' }], 'name': 'calculateReward', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'pure', 'type': 'function' }, { 'inputs': [{ 'internalType': 'address', 'name': 'owner_', 'type': 'address' }], 'name': 'initialize', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [{ 'internalType': 'address', 'name': 'token_', 'type': 'address' }], 'name': 'setToken', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [{ 'internalType': 'uint256', 'name': 'uptest_', 'type': 'uint256' }], 'name': 'setUptest', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [{ 'internalType': 'uint256', 'name': 'totalFundsReserved_', 'type': 'uint256' }], 'name': 'setVars', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }, { 'internalType': 'uint256', 'name': 'duration', 'type': 'uint256' }], 'name': 'stake', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'name': 'unstake', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function' }, { 'stateMutability': 'payable', 'type': 'receive' },
  { 'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }, { 'internalType': 'uint256', 'name': 'duration', 'type': 'uint256' }], 'name': 'calculateRewardNext', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'pure', 'type': 'function' },
  { 'inputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }], 'name': '_stakedSeasons', 'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }], 'stateMutability': 'view', 'type': 'function' },
];

abis['random'] = [];

abis['lottery'] = [
  { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "lotteryNumber", "type": "uint256" }], "name": "GotLotteryNumber", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "prize", "type": "uint256" }], "name": "WinPrize", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_uptest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "n", "type": "uint256" }, { "internalType": "bool", "name": "lowGas", "type": "bool" }], "name": "getLottery", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token_", "type": "address" }], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "uptest_", "type": "uint256" }], "name": "setUptest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" },
];

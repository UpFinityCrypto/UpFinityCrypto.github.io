const decimals = 18;
const bnbDiv = 10 ** decimals;
const wbnbAdr = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const routerAdr = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const refLinkPrefix = 'https://upfinitycrypto.github.io?ref=';
const upfinityAdr = '0x6CC5F09E46797189D18Ea8cfb3B1AaA4661280Ae';
const burnAdr = "0x000000000000000000000000000000000000dEaD";
communityToken = "0x000000000000000000000000000000000000dEaD";


const deadline = parseInt(Date.now() / 1000) + 1000000

buyFee = 900;
sellFee = 1200;
totalFee = buyFee + sellFee;


inputHandlerBuy = function (e) {
  (async function () {
    valueIn = e.target.value;
    valueIn = valueIn.replace(/,/g, '');
    result = getElement('swapOutput');
    if (valueIn == 0) {
      result.value = 0;
      return;
    }

    valueIn = ethers.utils.parseEther(valueIn);
    valueOut = rO.mul(valueIn).div(rI.add(valueIn));
    valueOut = ethers.utils.formatEther(valueOut);
    valueOut = parseInt(valueOut);
    valueOut = numberWithCommas(valueOut);
    result.value = valueOut;

    
  })();
}
inputHandlerSell = function (e) {
  (async function () {
    valueIn = e.target.value;
    valueIn = valueIn.replace(/,/g, '');
    result = getElement('swapOutput');
    if (valueIn == 0) {
      result.value = 0;
      return;
    }

    valueIn = ethers.utils.parseEther(valueIn);
    valueOut = rI.mul(valueIn).div(rO.add(valueIn));
    valueOut = ethers.utils.formatEther(valueOut);
    // valueOut = parseInt(valueOut); // BNB don't need
    // valueOut = numberWithCommas(valueOut); // BNB don't need
    result.value = valueOut;

    
  })();
}

const tokenAbi = [
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
];
const routerAbi = [
{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
];
const factoryAbi = [{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
const pairAbi = [{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
];
const upfinityAbi = [
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"inputs":[],"name":"_curcuitBreakerFlag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},

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

const rewardAbi = [
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"claimBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
];

const freeAirdropAbi = [
{"inputs":[],"name":"_dollarsPerBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "_communityBonus","outputs": [{"internalType":"uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_doneFreeAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"refAdr","type":"address"},{"internalType": "address","name": "communityToken","type": "address"}],"name":"doFreeAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},
];

const airdropAbi = [
{"inputs":[],"name":"_dollarsPerBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "_communityBonus","outputs": [{"internalType":"uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_doneFreeAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"refAdr","type":"address"},{"internalType":"uint256","name":"dollarCount_","type":"uint256"},{"internalType": "address","name": "communityToken","type": "address"}],"name":"doAirdrop","outputs":[],"stateMutability":"payable","type":"function"},
];

const nftAbi = [
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


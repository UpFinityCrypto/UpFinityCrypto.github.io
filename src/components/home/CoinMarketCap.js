import React from 'react';
import { useEffect } from 'react';

function CoinMarketCap(props) {

    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://files.coinmarketcap.com/static/widget/coinPriceBlock.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            // document.body.removeChild(scriptTag);
        }
    }, []);

    return (
        <div id="coinmarketcap-widget-coin-price-block" coins="15707,1839" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"></div>
    );
}

export default CoinMarketCap;

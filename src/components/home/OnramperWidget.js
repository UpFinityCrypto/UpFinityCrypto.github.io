////import React from 'react'
////import OnramperWidget from "@onramper/widget";
////import classes from './Exchange.module.css';

////export default function WidgetContainer() {
////    const wallets = {
////        BTC: { address: "btcAddr" },
////        BNB: { address: "bnbAddress", memo: "cryptoTag" },
////    };

////    return (
////        <div
////            style={{
////                width: "400px",
////                height: "500px",
////            }}

////            className={classes.widget}
////        >
////            <OnramperWidget
////                API_KEY={"pk_test_ass3gtLSWQpI11IWUZLJdrfyQhj7bTw_3xwLvhEvH6Q0"}
////                fontFamily={"Oswald"}
////                defaultAddrs={wallets}
////                defaultAmount={"0"}
////                defaultCrypto={"BNB"}
////                defaultFiat={"USD"}
////                // defaultFiatSoft={defaultFiatSoft}
////                defaultPaymentMethod={"creditCard"}
////                filters={{
////                    onlyCryptos: ["BNB", "ETH"],
////                    // excludeCryptos: excludeCryptos,
////                    // onlyPaymentMethods: onlyPaymentMethods,
////                    // excludePaymentMethods: excludePaymentMethods,
////                    // excludeFiat: excludeFiat,
////                    // onlyGateways: onlyGateways,
////                    // onlyFiat: onlyFiat,
////                }}
////                isAddressEditable={true}
////                // amountInCrypto={amountInCrypto}
////                redirectURL={"https://widget.onramper.com?color=1d2d50"}
////            />
////        </div >
////    );
////}
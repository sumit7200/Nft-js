const { Wallet, Client, NFTokenMint, convertStringToHex, AccountNFTsRequest, parseNFTokenID, NFTokenCreateOffer, NFTokenCreateOfferFlags } = require('xrpl');

async function sellNFT() {
    try {
        const wallet_issuer = Wallet.fromSeed("sEd7UmHKtktQRA8ejP9RWmDiXo7J76P");
        const wallet_user = Wallet.fromSeed("sEd7EcBrmwS2LF2yBuxXm9aaeRhDH76");

        const client = new Client("wss://s.altnet.rippletest.net/");

        await client.connect();

        const nftselloffer = {
            TransactionType: "NFTokenCreateOffer",
            Account: wallet_issuer.classicAddress,
            NFTokenID: "00000000D3817CAE631C67959C6023EACCFC8C11BAB1EC580000099A00000000",
            Amount: "0",
            Flags: NFTokenCreateOfferFlags.tfSellNFToken,
            Destination: wallet_user.classicAddress
        };

        const trxResult = await client.submit(nftselloffer, { autofill: true, wallet: wallet_issuer });
        console.log(trxResult);
    } catch (err) {
        console.log(err);
    }
}

sellNFT();

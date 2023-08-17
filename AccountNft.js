const { Wallet, Client, convertStringToHex,AccountNFTsRequest } = require('xrpl');

async function mintNFT() {
    try {
        let wallet = Wallet.fromSeed("sEd7UmHKtktQRA8ejP9RWmDiXo7J76P");

        let client = new Client("wss://s.altnet.rippletest.net/");

        await client.connect();

        let accountNFTsRequest = {
            account: wallet.classicAddress,
            command: 'account_nfts',
        };

        let accNftResponse = await client.request(accountNFTsRequest);
        console.log(accNftResponse);

        console.log(accNftResponse.result.AccountNFTsRequest)

    } catch (err) {
        console.log(err);
    }
}

mintNFT();

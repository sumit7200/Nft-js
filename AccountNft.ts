import{Wallet, Client, NFTokenMint, convertStringToHex, AccountNFTsRequest,parseNFTokenID } from 'xrpl';


async function mintNFT() {
try{
    let wallet = Wallet.fromSeed("sEd7UmHKtktQRA8ejP9RWmDiXo7J76P")

    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();

    let AccountNFTsRequest:AccountNFTsRequest ={
        account: wallet.classicAddress,
        command:'account_nfts',
    }



    let accNftResponse = await client.request(AccountNFTsRequest);
    console.log(accNftResponse);
    
    console.log(accNftResponse.result.account_nfts);


    accNftResponse.result.account_nfts.forEach(nft =>{
        let parsedNftokenID = parseNFTokenID(nft.NFTokenID)
        console.log(parseNFTokenID);
    })


    let parsedNftokenID = parseNFTokenID(accNftResponse.result.account_nfts[0].NFTokenID)

    console.log(parsedNftokenID)

} catch(err) {
    console.log(err);
}

}   
mintNFT();
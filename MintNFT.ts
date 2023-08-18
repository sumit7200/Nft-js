import{Wallet, Client, NFTokenMint, convertStringToHex, NFTokenMintFlags} from 'xrpl';


async function mintNFT() {
try{
    let wallet = Wallet.fromSeed("sEd7UmHKtktQRA8ejP9RWmDiXo7J76P")

    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();

    let nftMint:NFTokenMint = {

        Account: wallet.classicAddress,
        NFTokenTaxon: 1,
        TransactionType: "NFTokenMint",
        URI:convertStringToHex("sumit"),
        Flags: NFTokenMintFlags.tfTransferable

    }
    let signedTrx = wallet.sign(nftMint);
    console.log(signedTrx);

    let submittedTrx = await client.submit(nftMint, {autofill:true, wallet:wallet});
    console.log(submittedTrx);
} catch(err) {
    console.log(err);
}

}   
mintNFT();
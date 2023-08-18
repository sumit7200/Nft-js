import { Wallet,Client } from "xrpl";
import ECDSA from "xrpl/dist/npm/ECDSA";



function createWallet(): string {

    let newWallet = Wallet.generate(ECDSA.ed25519);

    console.log(newWallet);

    return newWallet.seed+"";

}

 

async function fundWallet(seed:string) {


     let wallet = Wallet.fromSeed(seed);

   // let wallet = Wallet.fromSeed("sEd716b5piTG9dvBmUMAyvcQiUXUcAK");

    //let wallet = Wallet.fromSeed("sEd7UmHKtktQRA8ejP9RWmDiXo7J76P");

    let client = new Client("wss://s.altnet.rippletest.net/");

 

    await client.connect();

    console.log("are we connected? " + client.isConnected());

 

    let result = await client.fundWallet(wallet);

    console.log(result);

}

 
fundWallet(createWallet());
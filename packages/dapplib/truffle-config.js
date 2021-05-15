require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile puppy harvest infant flip seek'; 
let testAccounts = [
"0x36859b3c83c4eb45ecbff76f83600c05ca694f240133ceaf623d92b275b88f16",
"0x51d0b30ce557ba3113687551fb761d8309efa62cdaa80ec5f24298f100b36a00",
"0xfc3d0751c210c812122adfde945336a8922aad7278f48bdd69a319fee6f2a513",
"0x3306f8aab8248b3a51f66fa72b0318678c57dbb71ac3b70d267bd89c13b0814a",
"0xd6a506bc6ec09a5cc0fe802979fa66af8d502d3825b8b03a6e4461b2a620b7b9",
"0x4c2e0c16d5b591b81afc5f70db7648d7037cfe32abbab067d375be505511fcfb",
"0x623dab4e8025b2d27afa097365ea35766563492469dbb8f0547b6dc0c8b0ddc2",
"0xe2973194d663ff5e7ee089dfaf505dcc978f4989ca2ee4313094fdf7f5b6f901",
"0xdf0d826325bd8ae29e65d2931d3abe0e0e3e48c35c8fe48dce1ca38ddcd20fed",
"0x08ef79ebbc8d19877f15ca91440e2a5b6a62d4bf41376c50ff363c5a54023a11"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


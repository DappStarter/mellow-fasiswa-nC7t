require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rebel magic honey inflict roast equal gas'; 
let testAccounts = [
"0x15a029d5717b3fdee4b379638cee0db3c954a5221b0836c29004145a1a11fa69",
"0x4c60c883ce151fa2b24818fffea2f44a74240a29135240810ab26e223d4324ea",
"0x3ac779eb4272358cd22ae68c9c812dc48c73b1e2d003bc91988f3585a7cd3aaf",
"0xa8347a82e1eb4f90f698b117a3899e75677e038a685501f750e5ba0c3b1907ff",
"0x3161df1c1e4bcef8d6e175cc32565f668b98328ec9709337e7b1c8e9d337ed10",
"0x1701a3e4b863eb2bd3e9ecd5926fa292a60f6e0f940d5273970e73d68fd72d24",
"0x7ef1f300960728f3f47a21d5f288ff115085da6962a585dd85469242013e873e",
"0x7dad2932f491aa4ab45029cd3047ee630efc70ace65920e91a79acc43fda72c4",
"0x033a5663a113eefc7f122c101a322b8c237fa610cf5000a0d1efae3f558d1931",
"0x290da2856e676911f328afee95efccc0c88d0ca394c28be4431a01a8518187e2"
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


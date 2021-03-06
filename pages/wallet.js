import Link from "next/link";
import Image from "next/image";

const wallet = () => {
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
    const WalletBtn = () => {
        return(
            <div className="container d-flex coll d-flex jat">
                {
                    purses.map((purse) => {
                        return <Link href={'/wallet/' + purse.id}><div className="walletBtn px-5 d-flex ja fw-bold bg-light my-3"><div className="icon"><Image height={50} width={50} src={purse.image} /></div>{purse.name}</div></Link>
                    })
                }
            </div>
        )
    }
    return(
        <div className="container">
            <main className="wallet-holder">
                <div className="container text-center my-3">
                    <h3 className="green">My Wallets</h3>
                </div>
                <div className="container text-center boda21 round-10">
                    <p className="text-light mb-3">The best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently manage all your wallets on our app..</p>
                </div>
                {/* <div className="container d-flex jac">
                    <Image height={100} width={100} src="/images/break1.png" />
                </div> */}
                <div className="container text-center d-flex jac">
                <WalletBtn />
                </div>
            </main>
        </div>
    )
}

export default wallet;
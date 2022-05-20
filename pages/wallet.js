import Link from "next/link";
import Image from "next/image";

const wallet = () => {
    const purses = [
        {
            name: "trust wallet",
            image: "/images/trust-wallet.png",
            id: 1
        },
        {
            name: "tron wallet",
            image: "/images/trust-wallet.png",
            id: 2
        },
        {
            name: "cubcoin wallet",
            image: "/images/trust-wallet.png",
            id: 3
        }
    ];

    const WalletBtn = () => {
        return(
            <div>
                {
                    purses.map((purse) => {
                        return <Link href={'/' + purse.id}><button><Image height={50} width={70} src={purse.image} />{purse.name}</button></Link>
                    })
                }
            </div>
        )
    }
    return(
        <main>
            <div className="container text-center">
                <h2>Wallets</h2>
            </div>
            <div className="container text-center">
                <p>The best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently manage all your wallets on our app..</p>
            </div>
            <div className="container text-center">
            <WalletBtn />
            </div>

            
        </main>
    )
}

export default wallet;
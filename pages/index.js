import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="holder p-sm-5 p-1 d-flex jac">
        <main className='home-main p-sm-3 p-1 py-3 round-20'>
          <section className="container my-3 text-center">
            <h1 className='container green fw-bold my-1'>WALLET BLOCKCHAIN</h1>
          </section>
          <section className="container d-flex jac">
            <Image height={400} width={500} src="/images/002.png" />
          </section>
          <section className="container my-sm-5 my-3 text-center">
            <p className='container mb-5'>Wallet Chain is a decentralized protocol and platform that combines Blockchain and DeFi, implementing elements from Blockchain with non-custodial management, Micropools, instant liquidity and decentralized governance. Each process are been required to be filled out respectively. Validation of wallet will be completed below as follows</p>
          </section>
          <div className="d-sm-flex jac">
            <section className="container my-1 text-center row">
              <div className='card col  my-1 box1'>
                <i class="bi-joystick h2"></i>
                <Link href="wallet">Rectify</Link>
              </div>
              <div className='card col mx-1 my-1 box2'>
                <i class="bi-stack h2"></i>
                <Link href="wallet">Rewards</Link>
              </div>
              <div className='card col my-1 box3'>
                <i class="bi bi-menu-button-wide-fill"></i>
                <Link href="wallet">Validate</Link>
              </div>
            </section>
            <section className="container my-1 text-center row">
              <div className='card col my-1 box4'>
                <i class="bi-save2-fill h2"></i>
                <Link href="wallet">Recover</Link>
              </div>
              <div className='card col mx-1 my-1 box5'>
                <i class="bi-wallet-fill h2"></i>
                <Link href="wallet">Stake</Link>
              </div>
              <div className='card  col  my-1 box6'>
              <i class="bi-wallet h2"></i>
              <Link href="wallet">Unstake</Link>
              </div>
            </section>
          </div>
      </main>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="holder p-5">
        <main className='home-main p-3 round-20'>
          <section className="container my-3 text-center">
            <h1 className='container'>WALLET BLOCKCHAIN</h1>
          </section>
          <section className="container my-3 text-center">
            <p className='container'>Wallet Chain is a decentralized protocol and platform that combines Blockchain and DeFi, implementing elements from Blockchain with non-custodial management, Micropools, instant liquidity and decentralized governance. Each process are been required to be filled out respectively. Validation of wallet will be completed below as follows</p>
          </section>
          <div className="d-sm-flex">
            <section className="container my-3 text-center row">
              <div className='card col mx-1 my-1 box1'>
              <Link href="wallet">Rectification</Link>
              </div>
              <div className='card col mx-1 my-1 box2'>
                <Link href="wallet">Rewards</Link>
              </div>
              <div className='card col mx-1 my-1 box3'>
                <Link href="wallet">Validation</Link>
              </div>
            </section>
            <section className="container my-3 text-center row">
              <div className='card col mx-1 my-1 box4'>
                <Link href="wallet">Recovery</Link>
              </div>
              <div className='card col mx-1 my-1 box5'>
                <Link href="wallet">Stake</Link>
              </div>
              <div className='card  col mx-1 my-1 box6'>
              <Link href="wallet">Unstake</Link>
              </div>
            </section>
          </div>
      </main>
    </div>
  )
}

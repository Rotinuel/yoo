import HeaderBox from '@/components/HeaderBox'
import Rightside from '@/components/Rightside'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Xalphi', lastName: ' luthor', email: 'xalphi@proton.me' }
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently" 
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={117601250.35}
                />
            </header>

            RECENT TRANSACTIONS
        </div>
        <Rightside user={loggedIn} transactions={[]} banks={[{},{}]}/>
    </section>
  )
}

export default Home
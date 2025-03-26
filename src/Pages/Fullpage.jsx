import React from 'react'
import Home from '../componts/Home'
import Lorem from '../componts/Lorem'
import TrainEveryBody from '../componts/TrainEveryBody'
import LovedBY from '../componts/LovedBY'
import KurlaPro from '../componts/KurlaPro'
import KurlaBest from '../componts/KurlaBest'
import Faq from '../componts/Faq'
import RiskFree from '../componts/RiskFree'
import Footer from '../componts/footer'


function Fullpage() {
  return (
    <div className='border-2'>
              <Home/>
              <Lorem/>
              <TrainEveryBody/>
              <LovedBY/>
              <KurlaPro/>
              <KurlaBest/>
              <Faq/>
              <RiskFree/>
              <Footer/>
    </div>
  )
}

export default Fullpage
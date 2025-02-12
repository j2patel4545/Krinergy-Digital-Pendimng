import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../Pages/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LAndingpage from '../Pages/LAndingpage'
import Contact from '../Pages/Contact'
import ServiceSection from '../Pages/ServiceSection'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import RefundPolicy from '../Pages/RefundPolicy'
import TermsConditions from '../Pages/TermsConditions'

function UserRouter() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<LAndingpage/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Services' element={<ServiceSection/>} />
                <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
                <Route path='/RefundPolicy' element={<RefundPolicy/>} />
                <Route path='/term' element={<TermsConditions/>} />




            </Routes>
            <Footer/>         
        </BrowserRouter>
      
    </div>
  )
}

export default UserRouter

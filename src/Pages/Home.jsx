import React from 'react'
import Banner from '../Component/Home/Banner'
import About from '../Component/Home/About'
import ChooseUs from '../Component/Home/ChooseUs'
import HCourse from '../Component/Home/HCourse'
import Trainers from '../Component/Home/Trainers'
import Layout from '../Component/Layout/Layout'

const Home = () => {
  return (
    <>
    <Layout>
    <Banner/>
    <main id="main">
    <About/>
    <ChooseUs/>
    <HCourse/>
    <Trainers/>
    </main>
    </Layout>
    
    </>
  )
}

export default Home
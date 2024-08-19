import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Working from '../components/work/Working'
import Project from '../components/project/Project'
import Features from '../components/Features/Features'
import Clint from '../components/clint/Clint'
import Blog from '../components/blog/Blog'


const Home = () => {
  return (
   <>
    {/* <Header></Header> */}
    <Banner></Banner>
   <Working></Working>
   <Project></Project>
   <Features></Features>
   <Clint></Clint>
   <Blog></Blog>
    {/* <Footer></Footer> */}
   </>
  )
}

export default Home
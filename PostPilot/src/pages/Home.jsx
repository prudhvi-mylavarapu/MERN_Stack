import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = ({activeItem, setActiveItem}) => {
  return (
    <>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Header />
      <BlogList activeItem={activeItem}/>
      <Newsletter/>
      <Footer activeItem={activeItem} setActiveItem={setActiveItem}/>
    </>
  )
}

export default Home

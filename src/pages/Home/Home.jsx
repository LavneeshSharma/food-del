import React from 'react'
import Header from '../../components/Navbar/Header/Header'
import './Home.css'
import { useState } from 'react'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home

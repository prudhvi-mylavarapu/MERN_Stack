import React, { useEffect, useState } from 'react'
import Navbar_Dashboard from '../../components/admin/Navbar_Dashboard'
import CountCards from '../../components/admin/countCards'
import FilterPosts from '../../components/admin/filterPosts'
import { Outlet } from 'react-router-dom'
import { card_data } from '../../assets/dashboardCardData'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    allposts: 0,
    published: 0,
    drafts: 0,
    recentposts: []
  })

  const fetchDashboard = async () => {
    setDashboardData(card_data)
  }

  useEffect(()=>{
    fetchDashboard()
  }, [])

  return (
    <>
      <Navbar_Dashboard />
      <div className='mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 mt-10'>
        <div className='flex flex-col gap-1.5'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium'>Welcome, Admin User</h1>
          <p className='text-gray-500'>Manage and publish your blog content</p>
        </div>
        <CountCards dashboardData={dashboardData} setDashboardData={setDashboardData}/>
        <div>
          <FilterPosts />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard

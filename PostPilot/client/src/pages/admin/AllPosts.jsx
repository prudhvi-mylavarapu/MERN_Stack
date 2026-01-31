import React from 'react'
import PostCard from '../../components/admin/PostCard'

const AllPosts = ({ fetchDashboard }) => {
  return (
    <div className='mt-10 border border-gray-200 shadow rounded-xl'>
      <PostCard fetchDashboard={fetchDashboard}/>
    </div>
  )
}

export default AllPosts

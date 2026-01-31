import React from 'react'
import DraftBlogs from '../../components/admin/draftBlogs'
import { useNavigate } from 'react-router-dom'


const Drafts = () => {

  return (
    <div className='mt-10 border border-gray-200 shadow rounded-xl'>
      <DraftBlogs />
    </div>
  )
}

export default Drafts

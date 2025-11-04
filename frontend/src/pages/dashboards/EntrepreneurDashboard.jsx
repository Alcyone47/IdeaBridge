import React from 'react'
import CustomHeader from '../../components/common/CustomHeader'


const EntrepreneurDashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='min-h-screen flex flex-col'>
      <CustomHeader />
      <main className="flex-1 flex-col bg-black flex px-12 py-6">
        {/* Header */}
        <div className='text-4xl font-bold'>
          <span className='text-white'>Welcome </span>
          <span className='text-blue-400'>{user.name}</span>
        </div>

        {/* ideas text and shit */}
        <div className='text-white py-8'>
          <span className='text-white text-2xl'>My decks</span>
        </div>

      </main>
    </div>
  )
}

export default EntrepreneurDashboard
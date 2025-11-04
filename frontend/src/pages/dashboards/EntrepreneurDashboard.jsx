import React from 'react'
import CustomHeader from '../../components/common/CustomHeader'
import CustomButton from '../../components/common/CustomButton';

const EntrepreneurDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className='min-h-screen flex flex-col'>
      <CustomHeader />
      <main className="flex-1 flex-col bg-black flex px-12 py-6">
        {/* Headline */}
        <div className='text-5xl font-semibold flex flex-row justify-between'>
          <div>
            <span className='text-white'>Welcome </span>
            <span className='text-blue-400'>{user.name}</span>
          </div>
          <div>
            <CustomButton text={'Create'} className='font-bold text-xl bg-white hover:bg-blue-400'/>
          </div>
        </div>

        {/* ideas text and shit */}
        <div className='text-gray-300 text-xl py-8 flex-col'>

          <div className='text-gray-300 text-lg md:text-xl mb-4 max-w-4xl'>Your decks</div>
          

          {/*<div className='text-gray-300 text-lg md:text-xl mb-4 max-w-4xl'>You have no decks</div>
          <div className='text-gray-300 text-lg md:text-xl mb-8 max-w-4xl'>Get started now by adding a one now</div> */}
        </div>

      </main>
    </div>
  )
}

export default EntrepreneurDashboard
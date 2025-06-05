import React from 'react'
import { state } from '../state/state'
import { useSnapshot } from 'valtio'

function EndBoard() {

  let snap = useSnapshot(state)
  return (
    <div className='bg-black rounded-lg text-white border-2 p-5 m-20 w-96 max-w-3xl'>
      <div className='flex justify-center items-center text-6xl font-bold'>
        UtsavVR
      </div>
      <div className='text-3xl mt-5 text-white-500'>Experience End</div>

      <div className='bg-slate-600 rounded-lg p-5 mt-5 text-white text-2xl'>
        Partnered with
        <div className='flex justify-center items-center mt-5 gap-x-5'>
          <img className='w-1/6 h-auto' src='logo/twinverse.webp' alt='twinverse-logo' />
          <img className='rounded-3xl w-1/4 h-auto' src='logo/prelude.webp' alt='prelude-logo' />
        </div>
      </div>
    </div>
  )
}

export default EndBoard


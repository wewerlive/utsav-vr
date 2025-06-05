import React from 'react'
import { state } from '../state/state'
import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom'

function DemoUI() {
    const snap = useSnapshot(state)

    return (
        <div>
            <Link to={`/`}>
                <button className='absolute top-5 left-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12'>
                    <img className='' src='back.svg' alt='back-button' />
                </button>
            </Link>
            {snap.muted && <button className='absolute top-5 right-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.muted = false }}>
                <img className='' src='mute.svg' />
            </button>}
            {!snap.muted && <button className='absolute top-5 right-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.muted = true }}>
                <img className='' src='unmute.svg' />
            </button>}
            {/* {
                snap.currentVideo != 0 && <button className='absolute bottom-5 left-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.currentVideo-- }}>
                    <img className='' src='back.svg' alt='back-button' />
                </button>
            }
            {
                snap.currentVideo != 2 && <button className='absolute bottom-5 right-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.currentVideo++ }}>
                    <img className='' src='next.svg' alt='back-button' />
                </button>
            } */}
        </div>
    )
}

export default DemoUI
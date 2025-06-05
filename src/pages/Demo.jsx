import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber"
import Scene from '../components/Scene'
import DemoUI from '../components/DemoUI';
import { state } from '../state/state';
import { useSnapshot } from 'valtio';

function Demo() {

    const [started, setStarted] = useState(false)

    const videoList = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4']
    const snap = useSnapshot(state)
    console.log(snap.currentVideo)

    return (
        <div className='h-screen'>
            {
                !started && (
                    <div className='h-full overflow-hidden relative flex items-center justify-center'>
                        <Link to={`/`}>
                            <button className='absolute top-5 left-5 bg-[#fdc500] p-2 rounded-full z-20 w-12 h-12'>
                                <img className='' src='back.svg' alt='back-button' />
                            </button>
                        </Link>
                        <video className='w-screen h-screen object-cover' autoPlay loop muted>
                            <source src='https://utsavvrfiles.s3.ap-south-1.amazonaws.com/demoIntroVid.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)] z-10'>
                            <div className='flex flex-col md:flex-row gap-8'>
                                {videoList.map((video, idx) => (
                                    <div
                                        key={idx}
                                        className="relative bg-black/70 rounded-3xl shadow-lg flex flex-col items-center justify-end w-72 h-96 overflow-hidden group"
                                    >
                                        <img
                                            src={`cards/card${idx + 1}.jpg`}
                                            alt={`Experience ${idx + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="relative z-10 flex flex-col items-center justify-end h-full w-full p-6">
                                            <div className="font-bold text-2xl text-white mb-4 drop-shadow-lg">
                                                {snap.vidNames[idx] || `Experience ${idx + 1}`}
                                            </div>
                                            <button
                                                onClick={() => {
                                                    state.currentVideo = idx;
                                                    setStarted(true);
                                                }}
                                                className="w-16 h-16 bg-[#fdc500] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                                            >
                                                <img src='play.svg' alt='play-button' className="w-8 h-8" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
            {
                started &&
                <div className='h-full overflow-hidden relative'>
                    <DemoUI />

                    {
                        // Style display none for the video tag
                        videoList.map((video, index) => {
                            return (
                                <>
                                    {<video id={"vid" + index} key={index} style={{ display: 'none' }} crossOrigin='anonymous' onEnded={() => {
                                        // if (snap.currentVideo == 2) {
                                        //     console.log('ended')
                                        // } else {
                                        //     state.currentVideo++
                                        // }
                                        let prevVidEle = document.getElementById('vid' + snap.currentVideo)
                                        prevVidEle.pause()
                                        prevVidEle.currentTime = 0
                                        console.log('ended',prevVidEle)
                                        if (snap.currentVideo == 2) {
                                            state.currentBoard = 'end'
                                        }
                                        else{
                                            state.currentBoard = 'sponsor'
                                        }
                                        state.showingBoard = true

                                    }}>
                                        <source src={"https://utsavvrfiles.s3.ap-south-1.amazonaws.com/" + video} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                    }
                                </>
                            )
                        })
                    }

                    {/* <iframe id={"ytVid"}  style={{ display: 'none' }} width="560" height="315" src="https://www.youtube.com/embed/VEJWE6cpqw0?si=SPQ9nMNCw0Ikwu-e&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}

                    {/* <video autoPlay>
                        <source src='vid1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay>
                        <source src='vid2.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay>
                        <source src='vid3.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video> */}
                    <Canvas >
                        <Scene />
                    </Canvas>
                </div>
            }
        </div>
    )
}

export default Demo
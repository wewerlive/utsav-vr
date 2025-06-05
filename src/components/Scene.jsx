import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { OrbitControls, useVideoTexture, Html } from "@react-three/drei"
import * as THREE from "three"
import { state } from '../state/state'
import { useSnapshot, subscribe } from 'valtio'
import VideoAdBoard from './VideoAdBoard'
import SponsorBoard from './SponsorBoard'
import EndBoard from './EndBoard'
export default function Scene() {


    // let vid1 = useVideoTexture('vid1.mp4')

    // vid1.wrapS = vid1.wrapT = THREE.RepeatWrapping

    // vid1.repeat.x = -1

    let viewerRef = useRef()
    let controlRef = useRef()
    const snap = useSnapshot(state)
    let prev = 0

    function changeClip() {

    }

    subscribe(state, () => {

        console.log("Changed")
        console.log(state.currentVideo)
        console.log(prev)

        if (state.currentVideo != prev) {
            let prevVidEle = document.getElementById('vid' + prev)
            prevVidEle.pause()
            prevVidEle.currentTime = 0
            prev = state.currentVideo
            let vidEle = document.getElementById('vid' + state.currentVideo)
            console.log(vidEle)
            let vidTexture = new THREE.VideoTexture(vidEle)
            vidTexture.wrapS = vidTexture.wrapT = THREE.RepeatWrapping
            vidTexture.repeat.x = -1
            vidTexture.colorSpace = THREE.SRGBColorSpace
            vidTexture.needsUpdate = true
            viewerRef.current.material.map = vidTexture

        }

        let vidEle = document.getElementById('vid' + state.currentVideo)
        vidEle.muted = state.muted




    })

    useLayoutEffect(() => {
        let vidEle = document.getElementById('vid' + snap.currentVideo)
        let vidTexture = new THREE.VideoTexture(vidEle)
        vidTexture.wrapS = vidTexture.wrapT = THREE.RepeatWrapping
        vidTexture.repeat.x = -1
        vidTexture.colorSpace = THREE.SRGBColorSpace
        vidTexture.needsUpdate = true
        viewerRef.current.material.map = vidTexture
        vidEle.play()

        // let ytVid = document.getElementById('ytVid')
        // console.log(ytVid)
        // console.log(ytVid.contentWindow.document)
        // let vidTexture = new THREE.VideoTexture(vidEle)
        // vidTexture.wrapS = vidTexture.wrapT = THREE.RepeatWrapping
        // vidTexture.repeat.x = -1
        // vidTexture.colorSpace = THREE.SRGBColorSpace
        // vidTexture.needsUpdate = true
        // viewerRef.current.material.map = vidTexture
        // vidEle.play()
    }, [])

    useEffect(() => {
        document.body.style.cursor = 'grab';
        console.log(controlRef.current.rotateSpeed)
        controlRef.current.rotateSpeed = -0.4
    }, [])

    return (
        <>
            <OrbitControls ref={controlRef} target={[0, 0, 0]} onStart={() => { document.body.style.cursor = 'grabbing' }} onEnd={() => { document.body.style.cursor = 'grab'; }} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={viewerRef}>
                <sphereGeometry args={[500, 32, 32]} position={[0, 0, 0]} scale={[-1, 1, -1]} />
                {/* <meshBasicMaterial side={THREE.DoubleSide} map={vid1}/> */}
                <meshBasicMaterial
                    side={THREE.DoubleSide}
                    toneMapped={true}
                    onUpdate={self => self.needsUpdate = true} />
            </mesh>

            <Html center>

                {(snap.showingBoard && snap.currentBoard == "sponsor") && <SponsorBoard />}
                {(snap.showingBoard && snap.currentBoard == "video") && <VideoAdBoard />}
                {(snap.showingBoard && snap.currentBoard == "end") && <EndBoard />}



            </Html>
        </>
    )
}
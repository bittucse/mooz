"use client";
import { VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

    const call=useCall();

    useEffect(()=>{
        if(isMicCamToggledOn){
            call?.camera.disable();
            call?.microphone.disable();
        }
    },[isMicCamToggledOn,call?.camera,call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>

      <h1 className='text-2xl font-bold'>SetUp</h1>
      <VideoPreview/>
    </div>
  )
}

export default MeetingSetup

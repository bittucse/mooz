'use client'

import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MeetingCard from './MeetingCard';


const CallList = ({type}:{type: 'ended' | 'upcoming' | 'recording'}) => {

  const {endedCalls,upcomingCalls,callRecordings,isLoading}= useGetCalls();
  const router=useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([])

  const getCalls = ()=>{
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recording':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
    
      default:
        return [];
    }
  }

  const getNOCallsMessage = ()=>{
    switch (type) {
      case 'ended':
        return 'No Previous Calls'
      case 'recording':
        return 'No Recordings';
      case 'upcoming':
        return 'No Upcoming Calls';
    
      default:
        return [];
    }
  }

  const calls=getCalls();
  const noCallsMessage=getNOCallsMessage();

  return (
    <div className=' grid grid-cols-1 gap-5 xl:grid-cols-2'>
      {calls && calls.length >0 ? calls.map((meeting:Call|CallRecording)=>(
        <MeetingCard/>
      )): (
        <h1>{noCallsMessage}</h1>
      ) }
    </div>
  )
}

export default CallList

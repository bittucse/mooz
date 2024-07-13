'use client'

import { useGetCalls } from '@/hooks/useGetCalls'
import { useRouter } from 'next/navigation';


const CallList = ({type}:{type: 'ended' | 'upcoming' | 'recording'}) => {

  const {endedCalls,upcomingCalls,callRecordings,isLoading}= useGetCalls();
  const router=useRouter();

  return (
    <div>
      CallList
    </div>
  )
}

export default CallList

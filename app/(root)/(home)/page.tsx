import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now=new Date();

  const time=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit', timeZone: 'Asia/Kolkata'});

  const date=( new Intl.DateTimeFormat('en-IN',{dateStyle:'full'})).format(now);
  return (
    <section className=' flex size-full flex-col gap-10 text-white'>
    <div className=' h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className=' flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
          Upcoming Meeting at : 12:30 PM
        </h2>
        <div className=' flex flex-col gap-2'>
          <h1 className=' text-4xl font-extrabold  lg:text-7xl'>
            {/* 11:30 AM */}
            {time}
          </h1>
          <p className=' text-lg font-medium text-sky-1 lg:text-2xl'>
            {/* Saturday , June 22, 2024 */}
            {date}
            </p>
        </div>
      </div>
    </div>
    <MeetingTypeList/>
    </section>
  )
}

export default Home

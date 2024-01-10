import React, { useState, useEffect } from 'react';
import { Loading } from './Loading';

function TimeSince() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
  
      return () => {
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      }
    }, [])
    const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const startDate = new Date('2018-05-22');
        const updateTimer = setInterval(() => {
            const currentDate = new Date();
            const difference = Math.abs(currentDate - startDate) / 1000;

            const years = Math.floor(difference / (3600 * 24 * 365));
            const months = Math.floor((difference % (3600 * 24 * 365)) / (3600 * 24 * 30));
            const days = Math.floor(((difference % (3600 * 24 * 365)) % (3600 * 24 * 30)) / (3600 * 24));
            const hours = Math.floor((((difference % (3600 * 24 * 365)) % (3600 * 24 * 30)) % (3600 * 24)) / 3600);
            const minutes = Math.floor(((((difference % (3600 * 24 * 365)) % (3600 * 24 * 30)) % (3600 * 24)) % 3600) / 60);
            const seconds = Math.floor(((((difference % (3600 * 24 * 365)) % (3600 * 24 * 30)) % (3600 * 24)) % 3600) % 60);

            setTimeElapsed({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(updateTimer);
    }, []);

    return (
        <>
        
      {
        loading ?
          <div className='h-full w-full flex justify-center items-center'>
            <Loading />
          </div>
          :
            <div className='h-full w-full flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-3xl'>From <b className='underline'>May 22, 2018</b> </h1>

                <div className="grid sm:grid-flow-col grid-flow-row gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.years > 0 && `${timeElapsed.years} `}

                        </span>
                        years
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.months > 0 && `${timeElapsed.months} `}
                        </span>
                        months
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.days > 0 && `${timeElapsed.days}`}
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.hours > 0 && `${timeElapsed.hours} `}
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.minutes > 0 && `${timeElapsed.minutes}  `}
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            {timeElapsed.seconds}
                        </span>
                        sec
                    </div>
                </div>
            </div>
}
        </>
    );
}

export default TimeSince;


import React from 'react'
import { inter } from '../page'

interface TimerHeaderBackgroundProps {
    time: number,
    timeType: string
}

const TimerHeaderBackground = ({ time, timeType }: TimerHeaderBackgroundProps) => {
    return (
        <div className="bg-[#FBBA00] h-[36px] w-[45px] rounded-[5px] text-[#2F2F2F] flex flex-col justify-center items-center gap-[2px]">
            <div className="font-extrabold text-[20px] leading-[20px]">{time}</div>
            <div className={inter.className}>
                <div className='text-[7px] uppercase font-normal'>{timeType}</div>
            </div>
        </div>
    )
}

export default TimerHeaderBackground
